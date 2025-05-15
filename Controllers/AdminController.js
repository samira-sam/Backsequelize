const adminService = require('../Services/AdminService');

class adminController {
  async getAll(req, res) {
    try {
      const admins = await adminService.findAll();
      res.json(admins);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  

  async getById(req, res) {
    try {
      const admin = await adminService.findById(req.params.id);
      if (!admin) return res.status(404).json({ message: 'Admin non trouvé' });
      res.json(admin);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async create(req, res) {
    try {
      const admin = await adminService.create(req.body);
      res.status(201).json(admin);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const result = await adminService.delete(req.params.id);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

module.exports = new adminController;
