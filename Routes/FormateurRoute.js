const express = require('express');
// on importe express

const router = express.Router();
// on déclare le router

const FormateurController = require('../Controllers/FormateurController');
// on importe le controller formateur

router.get("/", (req, res) => {
  // on déclare la route GET
  FormateurController.getAllFormateurs(req, res);
  // on appelle la fonction getAllFormateurs
});

module.exports = router;
// on exporte le router
