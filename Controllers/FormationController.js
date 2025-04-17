const FormationService = require('../Services/FormationService');
// on importe le service formation

class FormationController {
  // on déclare la classe FormationController

  async getAllFormations(req, res) {
    // on déclare la fonction getAllFormations

    try {
      const formations = await FormationService.getAllFormations();
      // on déclare la const formations qui va récupérer toutes les formations

      res.json(formations);
      // on renvoie les formations au format JSON

    } catch (error) {
      console.log(error); // on affiche l'erreur dans la console

      res.status(500); // on déclare le status 500
      res.json({ error: 'Erreur lors de la récupération des formations' });
      // on renvoie l'erreur au format JSON
    }
  }
}

module.exports = new FormationController();
// on exporte la classe FormationController
