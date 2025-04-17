const express = require('express');
// on importe express

const router = express.Router();
// on déclare le router

const FormationController = require('../Controllers/FormationController');
// on importe le controller formation

router.get("/", (req, res) => {
  // on déclare la route GET
  FormationController.getAllFormations(req, res);
  // on appelle la fonction getAllFormations
});

module.exports = router;
// on exporte le router
