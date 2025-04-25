const {} = require("sequelize");
const Fiche = require("../Models/Fiche");

class FicheService {
  async getAllFiche() {
    return await Fiche.findAll();
  }

  async getAllFicheById(FicheId) {
    return await Fiche.findByPk(FicheId,
   
    );
  }

  async addFiche(fiche) { // on declare la fonction addFiche
    return await Fiche.create(fiche); // on renvoie la Fiche
    }
   
      async updateFiche(id, fiche) { // on declare la fonction updateFiche
        return await Fiche.update(fiche, { where: {id_fiche: id } }); // on renvoie la Fiche mise à jour
        }

        async deleteFiche(id) { // on declare la fonction deleteFiche
          return await Fiche.destroy({ where: {id_fiche: id } }); // on renvoie la Fiche supprimée
          }
}
module.exports = new FicheService();