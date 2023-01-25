const cron = require("node-cron");
const config = require("config");
const { fetchVideos } = require("../utilities/api-util");
const key = config.get("API_KEY");

const fetchVideoCronJob = async () => {
  // cron.schedule("*/10 * * * * *", async () => {
  //   try {
  //     console.log("running a task every minute");
  //   } catch (error) {
  //     console.log("Error running a task every minute");
  //   }
  // });

  try {
    await fetchVideos(key, "cricket");
  } catch (error) {
    console.log("Error: ", error);
  }
};

module.exports = fetchVideoCronJob;
