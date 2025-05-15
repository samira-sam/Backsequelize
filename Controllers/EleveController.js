const EleveService = require("../Services/EleveService");

class EleveController {
  async getAllEleves(req, res) {
    try {
      const eleves = await EleveService.getAllEleves();
      res.json(eleves);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Erreur lors de la récupération des élèves" });
    }
  }

  async getEleveById(req, res) {
    try {
      const eleve = await EleveService.getEleveById(req.params.id);
      if (!eleve) {
        return res.status(404).json({ error: "Élève non trouvé" });
      }
      res.json(eleve);
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de la récupération de l'élève" });
    }
  }

  async addEleve(req, res) {
    try {
      const eleve = await EleveService.addEleve(req.body);
      res.status(201).json(eleve);
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de l'ajout de l'élève" });
    }
  }

  async updateEleve(req, res) {
    try {
      const eleve = await EleveService.updateEleve(req.params.id, req.body);
      if (!eleve) {
        return res.status(404).json({ error: "Élève non trouvé" });
      }
      res.json(eleve);
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de la mise à jour de l'élève" });
    }
  }

  async deleteEleve(req, res) {
    try {
      const eleve = await EleveService.deleteEleve(req.params.id);
      if (!eleve) {
        return res.status(404).json({ error: "Élève non trouvé" });
      }
      res.json({ message: "Élève supprimé avec succès" });
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de la suppression de l'élève" });
    }
  }
}

module.exports = new EleveController();
