// --- RentreeController.js ---
const RentreeService = require("../Services/RentreeService");

module.exports = {
  async getAllRentrees(req, res) {
    const rentrees = await RentreeService.getAllRentrees();
    res.json(rentrees);
  },

  async getRentreeById(req, res) {
    const rentree = await RentreeService.getRentreeById(req.params.id_rentree);
    if (!rentree) return res.status(404).json({ message: "Rentree non trouvée" });
    res.json(rentree);
  },

  async addRentree(req, res) {
    const rentree = await RentreeService.addRentree(req.body);
    res.status(201).json(rentree);
  },

  async updateRentree(req, res) {
    const rentree = await RentreeService.updateRentree(req.params.id_rentree, req.body);
    if (!rentree) return res.status(404).json({ message: "Rentree non trouvée" });
    res.json(rentree);
  },

  async deleteRentree(req, res) {
    const rentree = await RentreeService.deleteRentree(req.params.id_rentree);
    if (!rentree) return res.status(404).json({ message: "Rentree non trouvée" });
    res.json(rentree);
  },
};
