const cron = require("node-cron");
const config = require("config");
const { fetchVideos } = require("../utilities/api-util");
const keys = config.get("API_KEYS");

const fetchVideoCronJob = async () => {
  cron.schedule("*/10 * * * * *", async () => {
    try {
      let done = false;
      for (const apiKey of keys) {
        try {
          if (done) {
            break;
          }
          await fetchVideos(apiKey, "cricket");
          done = true;
        } catch (err) {
          console.error(err);
        }
      }

      if (!done) {
        throw new Error("Quota exhausted for all keys");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  });
};

module.exports = fetchVideoCronJob;
