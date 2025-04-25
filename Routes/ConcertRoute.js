const express = require("express");
const ConcertController = require("../Controllers/ConcertController");
const router = express.Router();

router.get("/", (request, response) => {
  ConcertController.getAllConcert(request, response);
});

router.get("/:id", (req, res) => {
        ConcertController.getConcertById(req, res);
        });

 router.post("/", (req, res) => {
          ConcertController.addConcert(req, res);
          });
           
      
   router.put("/:id", (req, res) => {
      ConcertController.updateConcert(req, res);
              });
      
  router.delete("/:id", (req, res) => {
    ConcertController.deleteConcert(req, res);
      });
            

module.exports = router;