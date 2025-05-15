const Maison = require("../Models/Maison");

class MaisonService {
  async getAllMaisons() {
    return await Maison.findAll();
  }

  async getMaisonById(id) {
    return await Maison.findByPk(id);
  }

  async addMaison(data) {
    return await Maison.create(data);
  }

  async updateMaison(id, data) {
    const maison = await Maison.findByPk(id);
    if (!maison) return null;
    return await maison.update(data);
  }

  async deleteMaison(id) {
    const maison = await Maison.findByPk(id);
    if (!maison) return null;
    await maison.destroy();
    return maison;
  }
}

module.exports = new MaisonService();
