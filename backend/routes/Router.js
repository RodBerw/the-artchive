const express = require("express");
const router = express.Router();
const artistController = require("../controllers/ArtistController");
const biographyController = require("../controllers/BiographyController");

router.get("/artists", artistController.list);
router.post("/artists", artistController.register);

router.get("/biographies", biographyController.list);
router.post("/biographies", biographyController.register);


module.exports = router;
