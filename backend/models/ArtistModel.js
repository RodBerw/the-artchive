const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {type:String, required:true},
  picture: {type:String, required:true},
  date: {type:String, required:true},
  biographyId: {type: mongoose.Schema.Types.ObjectId, ref:"biographies"},
});

module.exports = mongoose.model("artists", schema);
