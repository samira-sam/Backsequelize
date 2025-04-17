const { } = require("sequelize");
// on importe sequelize 

const Formateur = require('../Models/Formateur');
// on importe le modèle formateur

class FormateurService {
  async getAllFormateurs() {
    // on déclare la fonction getAllFormateurs
    return await Formateur.findAll();
    // on renvoie tous les formateurs
  }
}

module.exports = new FormateurService();
// on exporte le service formateur
