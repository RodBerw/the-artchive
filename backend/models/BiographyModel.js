const mongoose = require("mongoose");

const schema = mongoose.Schema({
  id: Number,
  name: String,
  picture: String,
  fullName: String,
  bornDate: String,
  bornLocation: String,
  deathDate: String,
  deathLocation: String,
  education: String,
  educationLocation: String,
  movement: [String],
  text: String,
  availableWorks: [String],
  articlesId: [Number],
});

module.exports = mongoose.model("biographies", schema);
