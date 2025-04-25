const InstrumentService = require("../Services/InstrumentService");

class InstrumentController {
  async getAllInstrument(req, res) {
    try {
      const Instruments = await InstrumentService.getAllInstrument();

      res.json(Instruments);
    } catch (error) {
      console.log(error);
      console;
      res.status(500);
      res.json({ error: "Erreur lors de la récupération des Instruments" });
    }
  }

  async getAllInstrumentById(request, response) {
    try {
      const Instruments = await InstrumentService.getAllInstrumentById(
        request.params.id
      );
      response.json(Instruments);
    } catch (error) {
      response.status(500);
      response.json({
        error: "Une erreur est survenue lors de la récupération du Instrument",
      });
    }
  }

  async addInstrument(req, res) { // on declare la fonction addInstrument
    try { // on declare le try
      const instrument = await InstrumentService.addInstrument(req.body);
      // on declare la const Instrument qui va recuperer la Instrument
      res.status(201).json(instrument);
      // on renvoie la Instrument au format json
    } catch (error) { // on declare le catch
      console.log(error); // on affiche l'erreur dans la console
      res.status(500); // on declare le status 500
      res.json({ error: 'Erreur lors de l\'ajout de la Instrument' });
      // on renvoie l'erreur au format json
    }
  }
  
 
  async updateInstrument(req, res) { // on declare la fonction updateInstrument
    try { // on declare le try
    const instrument = await
    InstrumentService.updateInstrument(req.params.id, req.body);
    // on declare la const Instrument qui va recuperer la Instrument par son id
    if (!instrument) { // si la Instrument n'existe pas
    return res.status(404).json({ error:'Instrument non trouvée' });
    // on renvoie l'erreur au format json
    }
    res.json(instrument);
    // on renvoie la Instrument au format json
    } catch (error) { // on declare le catch
    console.log(error); // on affiche l'erreur dans la console
    res.status(500); // on declare le status 500
    res.json({ error: 'Erreur lors de la mise à jour de la Instrument' });
    // on renvoie l'erreur au format json
    }
  }

    async deleteInstrument(req, res) { // on declare la fonction deleteInstrument
      try { // on declare le try
      const Instrument = await
      InstrumentService.deleteInstrument(req.params.id);
      // on declare la const Instrument qui va recupererla Instrument par son id
      if (!Instrument) { // si la Instrument n'existe pas
      return res.status(404).json({ error:
      'Instrument non trouvée' });
      // on renvoie l'erreur au format json
      }
      res.json({ message: 'Instrument supprimée avec succès' });
      // on renvoie le message de succes au format json
      } catch (error) { // on declare le catch
      console.log(error); // on affiche l'erreur dans la console
      res.status(500); // on declare le status 500
      res.json({ error: 'Erreur lors de la suppression de la Instrument' });
      // on renvoie l'erreur au format json
      }
    }
}
module.exports = new InstrumentController();




