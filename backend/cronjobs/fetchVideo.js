const cron = require("node-cron");
const config = require("config");
const { fetchVideos } = require("../utilities/api-util");
const logger = require("../utilities/logger");
const keys = config.get("API_KEYS");

const fetchVideoCronJob = async () => {
  cron.schedule("*/10 * * * * *", async () => {
    try {
      let fetchFlag = false;
      for (const apiKey of keys) {
        try {
          if (fetchFlag) {
            break;
          }
          await fetchVideos(apiKey, "cricket");
          fetchFlag = true;
        } catch (err) {
          console.error(err);
        }
      }

      if (!fetchFlag) {
        logger.error("All keys are exhausted")
        throw new Error("All keys are exhausted");
      }
    } catch (error) {
      logger.error(error.message)
    }
  });
};

module.exports = fetchVideoCronJob;
