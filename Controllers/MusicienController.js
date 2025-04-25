const MusicienService = require("../Services/MusicienService");

class MusicienController {

  async getAllMusicien(req, res) {
    try {
      const Musiciens = await MusicienService.getAllMusicien();

      res.json(Musiciens);
    } catch (error) {
      console.log(error);
      console;
      res.status(500);
      res.json({ error: "Erreur lors de la récupération des Musiciens" });
    }
  }


  async getAllMusicienById(request, response) {
    try {
      const Musiciens = await MusicienService.getAllMusicienById(
        request.params.id
      );
      response.json(Musiciens);
    } catch (error) {
      response.status(500);
      response.json({
        error: "Une erreur est survenue lors de la récupération du Patient",
      });
    }
  }

  async addMusicien(req, res) { // on declare la fonction addMusicien
    try { // on declare le try
      const musicien = await MusicienService.addMusicien(req.body);
      // on declare la const musicien qui va recuperer la musicien
      res.status(201).json(musicien);
    
    } catch (error) { // on declare le catch
      console.log(error); // on affiche l'erreur dans la console
      res.status(500); // on declare le status 500
      res.json({ error: 'Erreur lors de l\'ajout du musicien' });
      // on renvoie l'erreur au format json
    }
  }


   async updateMusicien(req, res) { // on declare la fonction updatemusicien
      try { // on declare le try
      const musicien= await
      MusicienService.updateMusicien(req.params.id, req.body);
      // on declare la const formateur qui va recuperer la musicien par son id
      if (!musicien) { // si la formateur n'existe pas
      return res.status(404).json({ error:'Musicien non trouvé' });
      // on renvoie l'erreur au format json
      }
      res.json(musicien);
      // on renvoie la musicien au format json
      } catch (error) { // on declare le catch
      console.log(error); // on affiche l'erreur dans la console
      res.status(500); // on declare le status 500
      res.json({ error: 'Erreur lors de la mise à jour Musicien' });
      // on renvoie l'erreur au format json
      }
      }

  
      async deleteMusicien(req, res) { // on declare la fonction deleteFormateur
        try { // on declare le try
        const musicien = await
        MusicienService.deleteMusicien(req.params.id);
        // on declare la const musicien qui va recupererla musicien par son id
        if (!musicien) { // si la musicien n'existe pas
        return res.status(404).json({ error:'Musicien non trouvé' });
        // on renvoie l'erreur au format json
      }
        res.json({ message: 'Musicien supprimé avec succès' });
        // on renvoie le message de succes au format json
        } catch (error) { // on declare le catch
        console.log(error); // on affiche l'erreur dans la console
        res.status(500); // on declare le status 500
        res.json({ error: 'Erreur lors de la suppression du Musicien' });
        // on renvoie l'erreur au format json
        }
        }
}
module.exports = new MusicienController();
