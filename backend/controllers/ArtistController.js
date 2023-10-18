const artistModel = require("../models/ArtistModel");

class ArtistController {
  async list(req, res) {
    try{
      const artists = await artistModel.find({});
      res.json(artists);
    }catch(error){
      console.error(error);
    }
  }

  async register(req, res){
    try{
      const newArtist = new artistModel(req.body)
      await newArtist.save();
    }catch(error){
      console.error(error)
    }
  }
}

module.exports = new ArtistController();
