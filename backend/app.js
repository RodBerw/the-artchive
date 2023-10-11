const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");


mongoose
  .connect("mongodb://0.0.0.0:27017/theartchivedb")
  .then(() => {
    const app = express();
    app.use("/api", routes)

    app.listen("3000", () => {
      console.log("App is running!");
    });
  });
