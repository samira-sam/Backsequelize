const Admin = require('../Models/Admin');
const Utilisateur = require('../Models/Utilisateur');


class AdminService {
  async findAll() {
    return await Admin.findAll({
      include: [{ model: Utilisateur, as: "utilisateur" }]
    });
  }

  async findById(id) {
    return await Admin.findByPk(id, {
      include: [{ model: Utilisateur, as: "utilisateur" }]
    });
  }

  async addAdmin(data) {
    return await Admin.create(data);
  }

  async updateAdmin(id, data) {
    const admin = await Admin.findByPk(id);
    if (!admin) return null;
    return await admin.update(data);
  }

  async deleteAdmin(id) {
    const admin = await Admin.findByPk(id);
    if (!admin) return null;
    await admin.destroy();
    return true;
  }
}

module.exports = new AdminService();
