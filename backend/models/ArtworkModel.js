const mongoose = require("mongoose");

const schema = mongoose.Schema({
  artist_id: { type: mongoose.Schema.Types.ObjectId, ref: "artists" },
  painting: { type: String, required: true },
  artist: { type: String, required: true },
  year: { type: String, required: true },
  picture: { type: File, required: true },
});

module.exports = mongoose.model("artworks", schema);
