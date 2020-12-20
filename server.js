// Read and set any environment variables with the dotenv package
require("dotenv").config();
// require dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Connecting to Mongo Atlas (running databse in the cloud)
// budget database
const databaseUrl = `mongodb+srv://sareronald:${encodeURIComponent(
  process.env.MONGO_PWD
)}@primarycluster0.sxdap.mongodb.net/budget`;
mongoose.connect(databaseUrl, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// mongoose.connect("mongodb://localhost/budget", {
//   useNewUrlParser: true,
//   useFindAndModify: false,
// });

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
