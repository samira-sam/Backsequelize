// Fichier : UtilisateurController.js

const UtilisateurService = require("../Services/UtilisateurService");

class UtilisateurController {


 // === NOUVELLE FONCTION pour trouver les utilisateurs par rôle ===
  // ==============================================================
  async findUsersByRole(req, res) {
    
    // 1. On récupère le nom du rôle demandé dans l'URL. 
    //    Si ta route est définie comme '/role/:roleName', alors le rôle sera dans req.params.roleName
    const roleDemande = req.params.roleName; 
    
    console.log(`--- Controller: Requête reçue pour chercher les utilisateurs avec le rôle : '${roleDemande}' ---`);

    try {
      // 2. On appelle la fonction du Service pour faire la recherche
      //    On lui passe le rôle qu'on a récupéré de l'URL
      const utilisateurs = await UtilisateurService.getUtilisateursByRole(roleDemande);

      // 3. On a reçu la réponse du Service (la liste des utilisateurs)
      //    On peut vérifier si la liste est vide ou non
      if (utilisateurs && utilisateurs.length > 0) {
        // Si on a trouvé des utilisateurs, on les renvoie en JSON
        console.log(`--- Controller: ${utilisateurs.length} utilisateur(s) trouvé(s). Envoi de la réponse JSON. ---`);
        res.json(utilisateurs); 
      } else {
        // Si la liste est vide (aucun utilisateur trouvé pour ce rôle)
        console.log(`--- Controller: Aucun utilisateur trouvé pour le rôle '${roleDemande}'. Envoi d'une réponse vide. ---`);
        // C'est souvent bien de renvoyer un tableau vide pour montrer qu'on a cherché mais rien trouvé
        res.json([]); 
        // Alternative : si tu préfères renvoyer une erreur "Non trouvé" (404) :
        // return res.status(404).json({ message: `Aucun utilisateur trouvé avec le rôle '${roleDemande}'` });
      }

    } catch (error) {
      // 4. Si quelque chose s'est mal passé (par exemple, une erreur dans le Service)
      console.error("### ERREUR dans le Controller (findUsersByRole):", error);
      // On renvoie une erreur générique au client (Postman)
      res.status(500).json({ error: "Oops ! Erreur lors de la recherche des utilisateurs par rôle." });
    }
  }
  // ==============================================================
  // === FIN DE LA NOUVELLE FONCTION                            ===
  // ==============================================================



  async getAllUtilisateur(req, res) {
    try {
      const utilisateurs = await UtilisateurService.getAllUtilisateur();
      res.json(utilisateurs);
    } catch (error) {
      console.log("Erreur dans getAllUtilisateur:", error); // Tu peux aussi ajouter des logs ici
      res.status(500).json({ error: "Erreur lors de la récupération des utilisateurs" });
    }
  }

  async getUtilisateurById(req, res) {
    console.log("--- LA FONCTION getUtilisateurById A ÉTÉ APPELÉE (dans le Controller) ---"); // Pour vérifier si la fonction est appelée
    try {
      const utilisateur = await UtilisateurService.getUtilisateurById(req.params.id);
      if (!utilisateur) {
        console.log(`Utilisateur non trouvé pour l'ID: ${req.params.id}`); // Log si l'utilisateur n'est pas trouvé
        return res.status(404).json({ error: "Utilisateur non trouvé" });
      }
      res.json(utilisateur);
    } catch (error) {
      // C'est ici qu'on veut voir l'erreur détaillée pour getUtilisateurById
      console.log("L'ERREUR DÉTAILLÉE pour getUtilisateurById EST LA SUIVANTE:", error); 
      res.status(500).json({ error: "Erreur lors de la récupération de l'utilisateur" });
    }
  }

  async addUtilisateur(req, res) {
    console.log("--- LA FONCTION addUtilisateur A ÉTÉ APPELÉE (dans le Controller) ---");
    try {
      const utilisateur = await UtilisateurService.addUtilisateur(req.body);
      res.status(201).json(utilisateur);
    } catch (error) {
      console.log("L'ERREUR DÉTAILLÉE pour addUtilisateur EST LA SUIVANTE:", error);
      res.status(500).json({ error: "Erreur lors de l'ajout de l'utilisateur" });
    }
  }

  async updateUtilisateur(req, res) {
    console.log("--- LA FONCTION updateUtilisateur A ÉTÉ APPELÉE (dans le Controller) ---");
    try {
      const utilisateur = await UtilisateurService.updateUtilisateur(req.params.id, req.body);
      if (!utilisateur) {
        return res.status(404).json({ error: "Utilisateur non trouvé" });
      }
      res.json(utilisateur);
    } catch (error) {
      console.log("L'ERREUR DÉTAILLÉE pour updateUtilisateur EST LA SUIVANTE:", error);
      res.status(500).json({ error: "Erreur lors de la mise à jour de l'utilisateur" });
    }
  }

  async deleteUtilisateur(req, res) {
    console.log("--- LA FONCTION deleteUtilisateur A ÉTÉ APPELÉE (dans le Controller) ---");
    try {
      const success = await UtilisateurService.deleteUtilisateur(req.params.id);
      if (!success) {
        return res.status(404).json({ error: "Utilisateur non trouvé" });
      }
      res.json({ message: "Utilisateur supprimé avec succès" });
    } catch (error) {
      console.log("L'ERREUR DÉTAILLÉE pour deleteUtilisateur EST LA SUIVANTE:", error);
      res.status(500).json({ error: "Erreur lors de la suppression de l'utilisateur" });
    }
  }
}

module.exports = new UtilisateurController();