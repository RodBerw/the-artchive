const mongoose = require("mongoose");

const schema = mongoose.Schema({
  artwork_id: Number,
  artist_id: Number,
  name: String,
  date: String,
  picture: String,
});

module.exports = mongoose.model("artworks", schema);
