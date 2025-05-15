const Professeur = require("../Models/Professeur");
const Utilisateur = require('../Models/Utilisateur');

class ProfesseurService {
  // Récupérer tous les professeurs avec leurs informations liées à Utilisateur
  async getAllProfesseurs() {
    return await Professeur.findAll({
      include: [
        { model: Utilisateur, as: "utilisateur" }
      ]
    });
  }

  // Récupérer un professeur par son ID avec ses informations liées à Utilisateur
  async getProfesseurById(id) {
    return await Professeur.findByPk(id, {
      include: [
        { model: Utilisateur, as: "utilisateur" }
      ]
    });
  }

  // Ajouter un nouveau professeur
  async addProfesseur(data) {
    return await Professeur.create(data);
  }

  // Mettre à jour un professeur existant
  async updateProfesseur(id, data) {
    const professeur = await Professeur.findByPk(id);
    if (!professeur) return null;
    return await professeur.update(data);
  }

  // Supprimer un professeur
  async deleteProfesseur(id) {
    const professeur = await Professeur.findByPk(id);
    if (!professeur) return null;
    await professeur.destroy();
    return professeur;
  }
}

module.exports = new ProfesseurService();
