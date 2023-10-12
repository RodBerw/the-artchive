const mongoose = require("mongoose");

const schema = mongoose.Schema({
  id: Number,
  biographyId: Number,
  img: String,
  date: String,
  name: String,
});

module.exports = mongoose.model("artists", schema);
