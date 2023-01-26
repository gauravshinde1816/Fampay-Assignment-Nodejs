const mongoose = require("mongoose");
const config = require("config");
const logger = require("../utilities/logger");
const db = config.get("MONGO_URI");
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    logger.info("Database connected")
  } catch (error) {
    logger.error(error.message)
  }
};

module.exports = connectDB;
