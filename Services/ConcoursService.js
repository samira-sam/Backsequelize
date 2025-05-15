const Concours = require("../Models/Concours");

class ConcoursService {
  async getAllConcours() {
    return await Concours.findAll();
  }

  async getConcoursById(id) {
    return await Concours.findByPk(id);
  }

  async addConcours(data) {
    return await Concours.create(data);
  }

  async updateConcours(id, data) {
    const concours = await Concours.findByPk(id);
    if (!concours) return null;
    return await concours.update(data);
  }

  async deleteConcours(id) {
    const concours = await Concours.findByPk(id);
    if (!concours) return null;
    await concours.destroy();
    return concours;
  }
}

module.exports = new ConcoursService();
