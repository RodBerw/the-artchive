const express = require("express");
const router = express.Router();
const artistController = require("../controllers/ArtistController");
const biographyController = require("../controllers/BiographyController");
const artworkController = require("../controllers/ArtworkController");

router.get("/artists", artistController.list);
router.post("/artists", artistController.register);

router.get("/biographies", biographyController.list);
router.post("/biographies", biographyController.register);

router.get("/artworks", artworkController.list);

module.exports = router;
