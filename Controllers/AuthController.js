const AuthService = require('../Services/AuthService');

class AuthController {
  // Route d'inscription
  async register(req, res) {
    try {
      const newUser = await AuthService.register(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAllRegisters(req, res) {
    try {
      const Registers = await RegisterService.getAllRegisters();
      res.json(Registers);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Erreur lors de la récupération des élèves" });
    }
  }

  // Route de connexion
  async login(req, res) {
    try {
      const { token, utilisateur } = await AuthService.login(req.body);
      res.json({ token, utilisateur });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  // Route pour récupérer les informations de l'utilisateur
  async getUser(req, res) {
    try {
      const utilisateur = await AuthService.getUserById(req.user.id);
      res.json(utilisateur);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new AuthController();
