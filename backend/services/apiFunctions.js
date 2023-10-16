const artistModel = require("../models/ArtistModel");
const biographyModel = require("../models/BiographyModel");
const artworkModel = require("../models/ArtworkModel");

class apiFunctions {
  async updateArtist(currentId, newId) {
    const artworks = await artworkModel.find({}).then((r) => {
      artworks.map((artwork) => {
        if (artwork.artist_id == currentId) {
          artwork.artist_id = newId;
        }
      });
    });
  }
}
