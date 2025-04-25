const FicheService = require("../Services/FicheService");

class FicheController {
  async getAllFiche(req, res) {
    try {
      const Fiches = await FicheService.getAllFiche();

      res.json(Fiches);
    } catch (error) {
      console.log(error);
      console;
      res.status(500);
      res.json({ error: "Erreur lors de la récupération des Fiches" });
    }
  }

    async getAllFicheById(request, response) {
      try {
        const fiches = await FicheService.getAllFicheById(
          request.params.id
        );
        response.json(fiches);
      } catch (error) {
        response.status(500);
        response.json({
          error: "Une erreur est survenue lors de la récupération du Fiche",
        });
      }
    }
    async addFiche(req, res) { // on declare la fonction addFiche
      try { // on declare le try
        const fiche = await FicheService.addFiche(req.body);
        // on declare la const Fiche qui va recuperer la Fiche
        res.status(201).json(fiche);
        // on renvoie la Fiche au format json
      } catch (error) { // on declare le catch
        console.log(error); // on affiche l'erreur dans la console
        res.status(500); // on declare le status 500
        res.json({ error: 'Erreur lors de l\'ajout de la Fiche' });
        // on renvoie l'erreur au format json
      }
    }
    
  
  async updateFiche(req, res) { // on declare la fonction updateFiche
      try { // on declare le try
      const fiche = await
      FicheService.updateFiche(req.params.id, req.body);
      // on declare la const Fiche qui va recuperer la Fiche par son id
      if (!fiche) { // si la Fiche n'existe pas
      return res.status(404).json({ error:'Fiche non trouvée' });
      // on renvoie l'erreur au format json
    }
      res.json(fiche);
      // on renvoie la Fiche au format json
      } catch (error) { // on declare le catch
      console.log(error); // on affiche l'erreur dans la console
      res.status(500); // on declare le status 500
      res.json({ error: 'Erreur lors de la mise à jour de la Fiche' });
      // on renvoie l'erreur au format json
      }
    }
  
      async deleteFiche(req, res) { // on declare la fonction deleteFiche
        try { // on declare le try
        const fiche = await
        FicheService.deleteFiche(req.params.id);
        // on declare la const Fiche qui va recupererla Fiche par son id
        if (!fiche) { // si la Fiche n'existe pas
        return res.status(404).json({ error:
        'Fiche non trouvée' });
        // on renvoie l'erreur au format json
        }
        res.json({ message: 'Fiche supprimée avec succès' });
        // on renvoie le message de succes au format json
        } catch (error) { // on declare le catch
        console.log(error); // on affiche l'erreur dans la console
        res.status(500); // on declare le status 500
        res.json({ error: 'Erreur lors de la suppression de la Fiche' });
        // on renvoie l'erreur au format json
        }
        }
}
module.exports = new FicheController();