const artistModel = require("../models/ArtistModel");

class ArtistController {
  async list(req, res) {
    const artists = await artistModel.find({});
    res.json(artists);
  }
}

module.exports = new ArtistController();
