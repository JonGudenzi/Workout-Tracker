
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const apiRouter = require("./routes/api-routes");
const htmlRouter = require("./routes/html-routes");

const PORT = process.env.PORT || 4000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(apiRouter);
app.use(htmlRouter);
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.listen(4000, () => {
    console.log("App running on port 4000!");
  });