const express = require("express");
const FicheController = require("../Controllers/FicheController");
const router = express.Router();

router.get("/", (request, response) => {
  FicheController.getAllFiche(request, response);
});

router.get("/:id", (request, response) => {
  FicheController.getAllFicheById(request, response);
});
router.post("/", (req, res) => {
  FicheController.addFiche(req, res);
  });
  //pour creer une nouvelle Fiche



router.put("/:id", (req, res) => {
      FicheController.updateFiche(req, res);
      });

router.delete("/:id", (req, res) => {
FicheController.deleteFiche(req, res);
});
    

module.exports = router;