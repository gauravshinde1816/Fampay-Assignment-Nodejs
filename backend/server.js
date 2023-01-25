const express = require("express");
const app = express();
const connectDB = require("./config/db");
const path = require("path");
const indexRoutes = require("./routes/index");
const cors = require("cors")
const fetchVideoCronJob = require("./cronjobs/fetchVideo");


//middleware
app.use(express.json());
app.use(cors())
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");


//connect to database
connectDB();

//routes
app.use("/" , indexRoutes)


// cronJobs
fetchVideoCronJob()


//listen to PORT
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
