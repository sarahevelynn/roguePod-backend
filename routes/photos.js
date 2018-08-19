const express = require("express");
const router = express.Router();
const Photo = require("../database/models/photos");


router.post("/upload", (req, res) => {
  const { photo, photoTitle, photoCap } = req.body;

  const newPhoto = new Photo({
    photo: photo,
    photoTitle: photoTitle,
    photoCap: photoCap
  });
  newPhoto.save((err, savedPhoto) => {
    if (err) return res.json(err);
    res.json(savedPhoto);
  });
});

module.exports = router;
