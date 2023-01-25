const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema(
  {
    title: String,
    channelId: String,
    channelTitle: String,
    videoId: String,
    description: String,
    thumbnails: {
      default: {
        url: String,
        width: Number,
        height: Number,
      },
    },
    publishedAt: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Video", VideoSchema);
