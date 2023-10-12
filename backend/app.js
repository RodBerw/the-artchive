const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/Router");
const cors = require("cors");

mongoose.connect("mongodb://0.0.0.0:27017/theartchivedb").then(() => {
  const app = express();
  app.use(cors());

  app.use(express.json());
  app.use("/api", router);

  app.listen(3001, () => {
    console.log("App is running!");
  });
});
