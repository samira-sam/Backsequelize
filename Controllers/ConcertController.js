const ConcertService = require("../Services/ConcertService");

class ConcertController {
  async getAllConcert(req, res) {
    try {
      const Concerts = await ConcertService.getAllConcert();

      res.json(Concerts);
    } catch (error) {
      console.log(error);
      console;
      res.status(500);
      res.json({ error: "Erreur lors de la récupération des Concerts" });
    }
  }

    async getConcertById(request, response) {
        try {
          const concert = await ConcertService.getConcertById(
            request.params.id
          );
          response.json(concert);
        } catch (error) {
          response.status(500);
          response.json({
            error: "Une erreur est survenue lors de la récupération du Concert",
          });
        }
      }

      async addConcert(req, res) { // on declare la fonction addConcert
        try { // on declare le try

          const concert = await ConcertService.addConcert(req.body);
          // on declare la const Concert qui va recuperer la Concert
          res.status(201).json(concert);
          // on renvoie la Concert au format json
        } catch (error) { // on declare le catch
          console.log(error); // on affiche l'erreur dans la console
          res.status(500); // on declare le status 500
          res.json({ error: 'Erreur lors de l\'ajout de la Concert' });
          // on renvoie l'erreur au format json
        }
      }

      async updateConcert(req, res) { // on declare la fonction updateConcert
        try { // on declare le try
          
        const concert = await
        ConcertService.updateConcert(req.params.id, req.body);
        // on declare la const Concert qui va recuperer la Concert par son id
        if (!concert) { // si la Concert n'existe pas
        return res.status(404).json({ error:'Concert non trouvée' });
        // on renvoie l'erreur au format json
        }
        res.json(concert);
        // on renvoie la Concert au format json
        } catch (error) { // on declare le catch
        console.log(error); // on affiche l'erreur dans la console
        res.status(500); // on declare le status 500
        res.json({ error: 'Erreur lors de la mise à jour de la Concert' });
        // on renvoie l'erreur au format json
        }
      }
    
      async deleteConcert(req, res) { // on declare la fonction deleteConcert
          try { // on declare le try
          const concert = await
          ConcertService.deleteConcert(req.params.id);
          // on declare la const Concert qui va recupererla Concert par son id
          if (!concert) { // si la Concert n'existe pas
          return res.status(404).json({ error:
          'Concert non trouvée' });
          // on renvoie l'erreur au format json
        }
          res.json({ message: 'Concert supprimée avec succès' });
          // on renvoie le message de succes au format json
          } catch (error) { // on declare le catch
          console.log(error); // on affiche l'erreur dans la console
          res.status(500); // on declare le status 500
          res.json({ error: 'Erreur lors de la suppression de la Concert' });
          // on renvoie l'erreur au format json
          }
        }
  

}
module.exports = new ConcertController();