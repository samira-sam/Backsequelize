const {} = require("sequelize");
const Concert = require("../Models/Concert");
const Musicien = require("../Models/Musicien");


class ConcertService {
    
  async getAllConcert() {
    return await Concert.findAll({
        include: [
            {
                model: Musicien,
                as: "Musicien",
            }
        ]
    });
  }
  async getConcertById(id) { // on declare la fonction getConcertById
      return await Concert.findByPk(id); // on renvoie les Concerts par son id
 }

   async addConcert(concert) { // on declare la fonction addConcert
    return await Concert.create(concert); // on renvoie la Concert
    }
    async getConcertById(id) { // on declare la fonction getConcertById
return await Concert.findByPk(id); // on renvoie la Concert par son id
      }
      async updateConcert(id, concert) { // on declare la fonction updateConcert
        return await Concert.update(concert, { where: {id_concert: id } }); // on renvoie la Concert mise à jour
        }

        async deleteConcert(id) { // on declare la fonction deleteConcert
          return await Concert.destroy({ where: {id_concert: id } }); // on renvoie la Concert supprimée
    }
}
module.exports = new ConcertService();
