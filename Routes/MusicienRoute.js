const express = require("express");
const MusicienController = require("../Controllers/MusicienController");
const router = express.Router();

router.get("/", (request, response) => {
  MusicienController.getAllMusicien(request, response);
});

router.get("/:id", (request, response) => {
  MusicienController.getAllMusicienById(request, response);
});

router.post("/", (req, res) => {
  MusicienController.addMusicien(req, res);
  });

router.put("/:id", (req, res) => {
      MusicienController.updateMusicien(req, res);
      });

router.delete("/:id", (req, res) => {
MusicienController.deleteMusicien(req, res);
});
module.exports = router;