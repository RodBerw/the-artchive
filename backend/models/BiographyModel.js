const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {type:String, required:true},
  picture: {type:String, required:true},
  fullName: {type:String, required:true},
  bornDate: {type:String, required:true},
  bornLocation: {type:String, required:true},
  deathDate: {type:String, required:true},
  deathLocation: {type:String, required:true},
  education: {type:String, required:true},
  educationLocation: {type:String, required:true},
  movement: [{type:String}],
  description: {type:String, required:true},
  availableWorks: [{type:String}],
});

module.exports = mongoose.model("biographies", schema);
