const { google } = require("googleapis");
const VideoModel = require("../models/video");
const logger = require("./logger");
const fetchVideos = async (apiKey, q) => {
  try {
    const service = google.youtube({
      version: "v3",
      auth: apiKey,
    });

    const publishedAfter = "2021-01-01T00:00:00Z";

    const {
      data: { items },
    } = await service.search.list({
      part: ["snippet"],
      maxResults: 20,
      order: "date",
      q,
      publishedAfter,
    });

    const videos = items.map((item) => ({
      title: item.snippet.title,
      channelId: item.snippet.channelId,
      channelTitle: item.snippet.channelTitle,
      videoId: item.id.videoId,
      description: item.snippet.description,
      thumbnails: {
        default: item.snippet.thumbnails.default,
      },
      publishedAt: item.snippet.publishedAt,
    }));

    // remove existing old records
    await VideoModel.remove({});
    // save it to the database
    await VideoModel.create(videos);
    logger.info("DATA WRITE : WRITE 20 records to DB")
  } catch (err) {
    logger.error(err.message)
  }
};

module.exports = {
  fetchVideos,
};
