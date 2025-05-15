// Dans Services/AuthService.js

const bcrypt = require('bcrypt');
const Utilisateur = require('../Models/Utilisateur');
const jwt = require('jsonwebtoken');
// On importe notre nouveau service pour les emails !
const EmailService = require('./EmailService'); // Assure-toi que le chemin est correct !

class AuthService {
  // Inscription d'un utilisateur
  async register(data) {
    const { email, mot_de_passe, nom, prenom, role } = data;

    // Vérifier si l'email existe déjà
    const existingUser = await Utilisateur.findOne({ where: { email } });
    if (existingUser) throw new Error("L'email est déjà pris");

    // Hacher le mot de passe
    const hashedPassword = await bcrypt.hash(mot_de_passe, 10);

    // Créer un nouvel utilisateur
    const newUser = await Utilisateur.create({
      email,
      mot_de_passe: hashedPassword,
      nom,
      prenom,
      role: role || 'eleve' // Par défaut, un utilisateur a le rôle 'eleve'
    });

    // ON AJOUTE L'ENVOI D'EMAIL 
    // On vérifie qu'on a bien un nom et un email pour l'utilisateur
    if (newUser && newUser.email && newUser.nom) {
      try {
        // On appelle la fonction de notre EmailService
        await EmailService.envoyerEmailConfirmation(newUser.email, newUser.nom);
      } catch (emailError) {
        // Si l'email ne part pas, on peut afficher une erreur dans la console,
        // mais on ne bloque pas l'inscription pour autant. L'utilisateur est créé.
        console.error("L'inscription a réussi, mais l'email de confirmation n'a pas pu être envoyé :", emailError);
      }
    }

    return newUser; // On retourne toujours le nouvel utilisateur
  }

  // ... (le reste de tes fonctions login, getUserById reste pareil) ...
}

module.exports = new AuthService();