const artworkModel = require("../models/ArtworkModel");

class ArtworkController {
  async list(req, res) {
    try {
      const artworks = await artworkModel.find({});
      res.json(artworks);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new ArtworkController();
