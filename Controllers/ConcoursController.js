const ConcoursService = require("../Services/ConcoursService");

class ConcoursController {
  async getAllConcours(req, res) {
    try {
      const Concourss = await ConcoursService.getAllConcours();
      res.json(Concourss);
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de la récupération des Concourss" });
    }
  }

  async getConcoursById(req, res) {
    try {
      const Concours = await ConcoursService.getConcoursById(req.params.id);
      if (!Concours) return res.status(404).json({ error: "Concours non trouvée" });
      res.json(Concours);
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de la récupération de la Concours" });
    }
  }

  async addConcours(req, res) {
    try {
      const Concours = await ConcoursService.addConcours(req.body);
      res.status(201).json(Concours);
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de l'ajout de la Concours" });
    }
  }

  async updateConcours(req, res) {
    try {
      const Concours = await ConcoursService.updateConcours(req.params.id, req.body);
      if (!Concours) return res.status(404).json({ error: "Concours non trouvée" });
      res.json(Concours);
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de la mise à jour de la Concours" });
    }
  }

  async deleteConcours(req, res) {
    try {
      const Concours = await ConcoursService.deleteConcours(req.params.id);
      if (!Concours) return res.status(404).json({ error: "Concours non trouvée" });
      res.json({ message: "Concours supprimée avec succès" });
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de la suppression de la Concours" });
    }
  }
}

module.exports = new ConcoursController();


