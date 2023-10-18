const biographyModel = require("../models/BiographyModel");

class BiographyController {
  async list(req, res) {
    try{
      const biographies = await biographyModel.find({});
      res.json(biographies);
    }catch(error){
      console.error(error);
    }
  }

  async register(req, res){
    try{
      const newBiography = new biographyModel(req.body)
      await newBiography.save();
    }catch(error){
      console.error(error)
    }
  }
}

module.exports = new BiographyController();
