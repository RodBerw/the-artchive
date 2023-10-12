const express = require("express");
const router = express.Router();
const artistController = require("../controllers/ArtistController");
const biographyController = require("../controllers/BiographyController");

router.get("/artists", artistController.list);

router.get("/biographies", biographyController.list);

module.exports = router;
