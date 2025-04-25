const {} = require("sequelize");
const Instrument = require("../Models/Instrument");
const Fiche = require("../Models/Fiche");
//const Examen = require("../Models/Examen");


class InstrumentService {

  async getAllInstrument() {
    return await Instrument.findAll({
      include:[{
        model: Fiche,
        as: "Fiche"
      },
    
    ],
      
      });  }

  async getAllInstrumentById(InstrumentId) {
    return await Instrument.findByPk(InstrumentId,
   
    );
  }

  async addInstrument(instrument) { // on declare la fonction addInstrument
    return await Instrument.create(instrument); // on renvoie le Instrument
    }

async updateInstrument(id, instrument) { // on declare la fonction updateinstrument
      return await Instrument.update(instrument, { where: {id_instrument: id } }); // on renvoie la instrument mise à jour
            }
    
async deleteInstrument(id) { // on declare la fonction deleteInstrument
        return await Instrument.destroy({ where: {id_instrument: id } }); // on renvoie la instrument supprimée
  
  }
}
module.exports = new InstrumentService();