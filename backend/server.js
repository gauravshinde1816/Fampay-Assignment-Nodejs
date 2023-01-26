const express = require("express");
const app = express();
const connectDB = require("./config/db");
const indexRoutes = require("./routes/index");
const cors = require("cors")
const fetchVideoCronJob = require("./cronjobs/fetchVideo");
const logger = require("./utilities/logger");


//middleware
app.use(express.json());
app.use(cors())


//connect to database
connectDB();

//routes
app.use("/" , indexRoutes)


// cronJobs
fetchVideoCronJob()


//listen to PORT
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  logger.info(`Server  Started at ${PORT}`)
});
