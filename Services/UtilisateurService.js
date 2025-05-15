


// Début de ton fichier Services/UtilisateurService.js

// 1. Assure-toi d'avoir les imports pour tous les modèles nécessaires
const Utilisateur = require("../Models/Utilisateur");
const Admin = require("../Models/Admin");
const Professeur = require("../Models/Professeur");
const Eleve = require("../Models/Eleve");

class UtilisateurService {

    // === NOUVELLE FONCTION pour chercher par rôle ===
    async getUtilisateursByRole(roleCherche) {
      console.log(`  [Service] Recherche des utilisateurs avec le rôle : ${roleCherche}`);
      try {
        // On utilise findAll() pour trouver potentiellement plusieurs utilisateurs
        const utilisateurs = await Utilisateur.findAll({
          where: { // 'where' est la condition de recherche
            role: roleCherche // On demande à Sequelize : trouve toutes les lignes où la colonne 'role'
                               // est égale à la valeur de 'roleCherche' (ex: 'eleve')
          }
          // pour ajouter des 'include' 
          // récupérer les détails spécifiques (professeur, eleve) en même temps
          /*
          include: [
            { model: Admin, as: 'admin', required: false }, // required: false car un utilisateur n'a qu'un rôle
            { model: Professeur, as: 'professeur', required: false },
            { model: Eleve, as: 'eleve', required: false }
          ]
          */
        });
  
        console.log(`  [Service] Trouvé ${utilisateurs.length} utilisateur(s) avec le rôle ${roleCherche}.`);
        return utilisateurs; // Renvoie la liste des utilisateurs trouvés (peut être vide)
  
      } catch (error) {
        console.error(`  [Service] ### ERREUR en cherchant les utilisateurs par rôle (${roleCherche}):`, error);
        throw error; // Relance l'erreur pour que le Controller puisse la gérer
      }
    }
    // === FIN DE LA NOUVELLE FONCTION ===
  // Fonction pour récupérer tous les utilisateurs (ne change pas)
  async getAllUtilisateur() {
    return await Utilisateur.findAll();
  }

  // Fonction pour récupérer un utilisateur par ID (ne change pas, mais vérifie qu'elle marche maintenant)
  async getUtilisateurById(id) {
    return await Utilisateur.findByPk(id, {
      // L'include permet de récupérer aussi les infos d'admin/prof/eleve si elles existent
      include: [
        { model: Admin, as: 'admin' },
        { model: Professeur, as: 'professeur' },
        { model: Eleve, as: 'eleve' }
      ]
    });
  }

  // --- C'EST CETTE FONCTION QU'ON MODIFIE ---
  async addUtilisateur(data) {
    let nouvelUtilisateur = null; // On prépare la variable

    try {
      // 2. Crée l'utilisateur principal dans la table 'utilisateur'
      nouvelUtilisateur = await Utilisateur.create(data);

      // Si la création réussit, on continue pour gérer le rôle
      if (nouvelUtilisateur) {
        const nouvelId = nouvelUtilisateur.id_utilisateur; // L'ID de l'utilisateur créé
        const role = data.role; // Le rôle qui était dans les données envoyées

        console.log(`[UtilisateurService] Utilisateur principal créé: ID=${nouvelId}, Role=${role}`);

        // 3. Ajoute l'entrée dans la table spécifique au rôle
        // On met un try...catch ici au cas où cette deuxième étape échoue
        try {
          if (role === 'admin') {
            console.log(`[UtilisateurService] Ajout dans la table Admin pour ID=${nouvelId}`);
            await Admin.create({
              id_admin: nouvelId,
                
            });
            console.log(`[UtilisateurService] -> Succès: Entrée Admin créée.`);

          } else if (role === 'professeur') {
            console.log(`[UtilisateurService] Ajout dans la table Professeur pour ID=${nouvelId}`);
            // IMPORTANT: 'data' doit contenir 'id_matiere' envoyé depuis le Controller/la requête
            if (!data.id_matiere) {
              console.warn("[UtilisateurService] Attention: id_matiere manquant pour créer le professeur.");
              // Tu pourrais choisir de lancer une erreur ici si id_matiere est obligatoire
            }
            await Professeur.create({
              id_professeur: nouvelId,  // L'ID utilisateur devient la clé primaire de professeur
              id_matiere: data.id_matiere,
              description: data.description  // Assure-toi que ça arrive bien dans 'data'
              // Ajoute ici d'autres champs si ta table professeur en a besoin
            });
            console.log(`[UtilisateurService] -> Succès: Entrée Professeur créée.`);

          } else if (role === 'eleve') {
            console.log(`[UtilisateurService] Ajout dans la table Eleve pour ID=${nouvelId}`);
            // IMPORTANT: 'data' doit contenir 'id_annee_etude', 'id_maison', 'contact_parent'
            if (!data.id_annee_etude || !data.id_maison) {
               console.warn("[UtilisateurService] Attention: id_annee_etude ou id_maison manquant pour créer l'élève.");
               // Tu pourrais choisir de lancer une erreur ici si c'est obligatoire
            }
            await Eleve.create({
              id_eleve: nouvelId,         // L'ID utilisateur devient la clé primaire de eleve
              id_annee_etude: data.id_annee_etude, // Assure-toi que ça arrive bien dans 'data'
              id_maison: data.id_maison,           // Assure-toi que ça arrive bien dans 'data'
              contact_parent: data.contact_parent  // Assure-toi que ça arrive bien dans 'data'
            });
            console.log(`[UtilisateurService] -> Succès: Entrée Eleve créée.`);
          }
        } catch (errorRole) {
          // Si l'ajout dans la table spécifique (Admin, Professeur, Eleve) échoue
          console.error("### ERREUR lors de l'ajout dans la table de rôle spécifique:", errorRole);
          // Ici, c'est une décision importante : est-ce qu'on garde l'utilisateur principal
          // même si on n'a pas pu créer son rôle spécifique ? Ou est-ce qu'on l'annule ?
          // Pour l'instant, on va juste laisser un message d'erreur.
          // Tu pourrais ajouter : await nouvelUtilisateur.destroy(); pour annuler.
          // Puis : throw errorRole; pour remonter l'erreur.
        }
      }

    } catch (errorCreationUtilisateur) {
      // Si la création de l'utilisateur principal échoue
      console.error("### ERREUR lors de la création de l'utilisateur principal:", errorCreationUtilisateur);
      // Il faut renvoyer l'erreur pour que le Controller sache que ça n'a pas marché
      throw errorCreationUtilisateur;
    }

    // 4. Renvoie l'utilisateur principal qui a été créé (ou null si ça a échoué avant)
    // Il est important de le renvoyer pour que le Controller puisse l'utiliser si besoin
    return nouvelUtilisateur;
  }
  // --- FIN DE LA FONCTION MODIFIÉE ---

  // Fonction pour mettre à jour (ne change pas)
  async updateUtilisateur(id, data) {
    const utilisateur = await Utilisateur.findByPk(id);
    if (!utilisateur) return null;
    // Attention: La mise à jour du rôle ici ne changera pas automatiquement
    // l'entrée dans les tables admin/professeur/eleve. Il faudrait ajouter une logique
    // plus complexe si tu veux permettre le changement de rôle.
    return await utilisateur.update(data);
  }

  // Fonction pour supprimer (ne change pas)
  async deleteUtilisateur(id) {
    const utilisateur = await Utilisateur.findByPk(id);
    if (!utilisateur) return null;
    // Normalement, si tu as bien configuré les clés étrangères avec "ON DELETE CASCADE"
    // dans ta base de données (comme ALTER TABLE admin ADD CONSTRAINT ... ON DELETE CASCADE;),
    // supprimer l'utilisateur ici devrait automatiquement supprimer l'entrée
    // correspondante dans admin, professeur ou eleve. C'est à vérifier !
    await utilisateur.destroy();
    return true;
  }
}

module.exports = new UtilisateurService();