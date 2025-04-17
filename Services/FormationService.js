const { } = require("sequelize");
// on importe sequelize 

const Formation = require('../Models/Formations');
// on importe le modèle formation

class FormationService {
  async getAllFormations() {
    // on déclare la fonction getAllFormations
    return await Formation.findAll();
    // on renvoie toutes les formations
  }
}

module.exports = new FormationService();
// on exporte le service formation
