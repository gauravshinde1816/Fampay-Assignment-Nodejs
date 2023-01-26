const express = require("express");
const router = express.Router();
const VideoModel = require("../models/video");
const logger = require("../utilities/logger");

// @Route       : GET "/videos"
// @Description : GET the Videos stored in database
router.get("/videos", async (req, res) => {
  const sortBy = req.query.sortBy || "publishedAt";
  const pageNumber = req.query.page || 0;
  try {
    const totalDocuments = await VideoModel.estimatedDocumentCount({});
    const hasNext = (+pageNumber + 1) * 10 <= totalDocuments;
    const hasPrev = (+pageNumber + 1) * 10 >= 1;

    if (!hasNext || !hasPrev) {
      return res.status(400).json({ msg: "NOT ENOUGH DOCUMENTS IN DB" });
    }

    const data = await VideoModel.find({})
      .sort({ sortBy: -1 })
      .skip(pageNumber * 10)
      .limit(10);
    return res.json({
      totalDocuments,
      resultCount: data.length,
      data,
      hasNext,
      hasPrev,
    });
  } catch (error) {
    logger.error("Internal Server Error")
    return res.status(500).json({msg:"Internal Server Error"})

  }
});

// @Route       : GET "/search"
// @Description : GET Fuzzy Search the videos over title and description fields
router.get("/search", async (req, res) => {
  const query = req.query.searchQuery || "cricket";
  try {
    const results = await VideoModel.aggregate([
      {
        $search: {
          index: "searchYoutubeVideo",
          text: {
            query: `{$or : ["title" : {$eq:${query}} ,  "description" : {$eq : ${query}}]}`,
            path: {
              wildcard: "*",
            },
            fuzzy: {
              maxEdits: 1,
              maxExpansions: 100,
            },
          },
        },
      },
    ]);

    return res.json({ totalDocuments: results.length, data: results });
  } catch (error) {
    logger.error("Internal Server Error")
    return res.status(500).json({msg:"Internal Server Error"})
  }
});

module.exports = router;
