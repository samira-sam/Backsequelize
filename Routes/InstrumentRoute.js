const express = require("express");
const InstrumentController = require("../Controllers/InstrumentController");
const router = express.Router();

router.get("/", (request, response) => {
  InstrumentController.getAllInstrument(request, response);
});

router.get("/:id", (request, response) => {
  InstrumentController.getAllInstrumentById(request, response);
});

router.post("/", (req, res) => {
  InstrumentController.addInstrument(req, res);
  });


router.put("/:id", (req, res) => {
      InstrumentController.updateInstrument(req, res);
      });

router.delete("/:id", (req, res) => {
InstrumentController.deleteInstrument(req, res);
});

module.exports = router;
