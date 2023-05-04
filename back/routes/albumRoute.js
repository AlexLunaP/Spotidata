const express = require("express");
const router = express.Router();

const { getAlbumTracks } = require("../controllers/albumController");
const { getAlbumDetails } = require("../controllers/albumController");

router.get("/getAlbumTracks", getAlbumTracks);
router.get("/getAlbumDetails", getAlbumDetails);

module.exports = router;