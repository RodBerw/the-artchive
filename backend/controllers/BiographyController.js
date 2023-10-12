const biographyModel = require("../models/BiographyModel");

class BiographyController {
  async list(req, res) {
    const biographies = await biographyModel.find({});
    res.json(biographies);
  }
}

module.exports = new BiographyController();
