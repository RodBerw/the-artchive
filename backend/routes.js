const express = require("express")
const router = express.Router()

const Artist = require("./models/Artist")

router.get("/artists", async (res,req) => {
    const artists = await Artist.find()
    res.set(artists)
})

module.exports = router