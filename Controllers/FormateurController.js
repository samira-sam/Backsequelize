const FormateurService = require('../Services/FormateurService');
// on importe le service formateur

class FormateurController {
  // on déclare la classe FormateurController

  async getAllFormateurs(req, res) {
    // on déclare la fonction getAllFormateurs

    try {
      const formateurs = await FormateurService.getAllFormateurs();
      // on déclare la const formateurs qui va récupérer tous les formateurs

      res.json(formateurs);
      // on renvoie les formateurs au format JSON

    } catch (error) {
      console.log(error); // on affiche l'erreur dans la console

      res.status(500); // on déclare le status 500
      res.json({ error: 'Erreur lors de la récupération des formateurs' });
      // on renvoie l'erreur au format JSON
    }
  }
}

module.exports = new FormateurController();
// on exporte la classe FormateurController
