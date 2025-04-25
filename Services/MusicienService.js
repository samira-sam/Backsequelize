const {} = require("sequelize");
const Musicien = require("../Models/Musicien");
const Instrument = require("../Models/Instrument");
const Concert = require("../Models/Concert");

class MusicienService {
  async getAllMusicien() {
    return await Musicien.findAll({ include: [
        {
          model: Instrument,
          as: "Instrument",
        },
        {
          model: Concert,
          as: "Concert",
          through: { attributes: [] }, 
        },
      ],});
  }

  async getAllMusicienById(MusicienId) {
    return await Musicien.findByPk(MusicienId, {
      include: [
        {
          model: Instrument,
          as: "Instrument",
        },
        {
          model: Concert,
          as: "Concert",
          through: { attributes: [] },
        },
      ],
    });;
  }

  async addMusicien(musicien) { // on declare la fonction addMusicien
    return await Musicien.create(musicien); // on renvoie la Musicien
    }
    async getMusicienById(id) { // on declare la fonction getMusicienById
return await Musicien.findByPk(id); // on renvoie la Musicien par son id
      }
      async updateMusicien(id, musicien) { // on declare la fonction updateMusicien
        return await Musicien.update(musicien, { where: {id_musicien: id } }); // on renvoie la Musicien mise à jour
        }

        async deleteMusicien(id) { // on declare la fonction deleteMusicien
          return await Musicien.destroy({ where: {id_musicien: id } }); // on renvoie la Musicien supprimée
          }
}

module.exports = new MusicienService();


