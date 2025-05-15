const Utilisateur = require("./Utilisateur");
const Professeur = require("./Professeur");
const Eleve = require("./Eleve");
const AnneeEtude = require("./AnneeEtude");
const Matiere = require("./Matiere");
const Maison = require("./Maison");
const Note = require("./Note");
const EleveMatiere = require("./EleveMatiere");
const AnneeEtudeMatiere = require("./AnneeEtudeMatiere");
const Admin = require("./Admin");

//  RELATIONS UTILISATEUR / ADMIN 
Utilisateur.hasOne(Admin, {
  foreignKey: 'id_admin',        // La clé étrangère est id_admin dans la table Admin
  sourceKey: 'id_utilisateur',   // ... qui correspond à id_utilisateur dans Utilisateur
  as: 'admin',
  onDelete: 'CASCADE'
});

Admin.belongsTo(Utilisateur, {
  foreignKey: 'id_admin',        // La clé étrangère est id_admin dans la table Admin
  targetKey: 'id_utilisateur',   // ... qui correspond à id_utilisateur dans Utilisateur
  as: 'utilisateur'
});

//  RELATIONS UTILISATEUR / PROFESSEUR 
Utilisateur.hasOne(Professeur, {
  foreignKey: 'id_professeur',     // La clé étrangère est id_professeur dans la table Professeur
  sourceKey: 'id_utilisateur',    // ... qui correspond à id_utilisateur dans Utilisateur
  as: 'professeur',
  onDelete: 'CASCADE'
});

Professeur.belongsTo(Utilisateur, {
  foreignKey: 'id_professeur',     // La clé étrangère est id_professeur dans la table Professeur
  targetKey: 'id_utilisateur',    // ... qui correspond à id_utilisateur dans Utilisateur
  as: 'utilisateur'
});

//  RELATIONS UTILISATEUR / ELEVE 
Utilisateur.hasOne(Eleve, {
  foreignKey: 'id_eleve',          // La clé étrangère est id_eleve dans la table Eleve
  sourceKey: 'id_utilisateur',     // ... qui correspond à id_utilisateur dans Utilisateur
  as: 'eleve',
  onDelete: 'CASCADE'
});

Eleve.belongsTo(Utilisateur, {
  foreignKey: 'id_eleve',          // La clé étrangère est id_eleve dans la table Eleve
  targetKey: 'id_utilisateur',     // ... qui correspond à id_utilisateur dans Utilisateur
  as: 'utilisateur'
});

//  RELATIONS PROFESSEUR / MATIERE 
// Un professeur enseigne une matière.  Une matière est enseignée par un professeur.
Professeur.hasOne(Matiere, {
  foreignKey: "id_professeur", // Clé étrangère dans la table Matiere
  as: "matierePrincipale",     // Alias plus clair
});
Matiere.belongsTo(Professeur, {
  foreignKey: "id_professeur", // Clé étrangère dans la table Matiere
  as: "professeurPrincipal",
});

//  RELATIONS PROFESSEUR / NOTE 
Professeur.hasMany(Note, {
  foreignKey: "id_professeur", // Clé étrangère dans la table Note
  as: "notesDonnees",
});
Note.belongsTo(Professeur, {
  foreignKey: "id_professeur", // Clé étrangère dans la table Note
  as: "professeurEvaluateur",
});

//  RELATIONS ELEVE / NOTE 
Eleve.hasMany(Note, {
  foreignKey: "id_eleve",    // Clé étrangère dans la table Note
  as: "notesRecues",
});
Note.belongsTo(Eleve, {
  foreignKey: "id_eleve",    // Clé étrangère dans la table Note
  as: "eleveEvalue",
});

//  RELATIONS ELEVE / MATIERE
Eleve.belongsToMany(Matiere, {
  through: EleveMatiere,    // Utilise le modèle de table de jonction
  foreignKey: "id_eleve",   // Clé étrangère dans EleveMatiere pour Eleve
  otherKey: "id_matiere",   // Clé étrangère dans EleveMatiere pour Matiere
  as: "matieresSuivies",
});
Matiere.belongsToMany(Eleve, {
  through: EleveMatiere,    // Utilise le modèle de table de jonction
  foreignKey: "id_matiere",  // Clé étrangère dans EleveMatiere pour Matiere
  otherKey: "id_eleve",      // Clé étrangère dans EleveMatiere pour Eleve
  as: "elevesInscrits",
});

//  RELATIONS ELEVE / ANNEEETUDE 
Eleve.belongsTo(AnneeEtude, {
  foreignKey: "id_annee_etude",  // Clé étrangère dans la table Eleve
  as: "anneeEtude",
});
AnneeEtude.hasMany(Eleve, {
  foreignKey: "id_annee_etude",  // Clé étrangère dans la table Eleve
  as: "eleves",
});

//  RELATIONS MAISON / DIRECTEUR (PROFESSEUR) 
// Une maison a un directeur (professeur).  Un professeur peut diriger une maison.
Maison.belongsTo(Professeur, {
  foreignKey: 'id_directeur',  // Clé étrangère dans la table Maison
  as: 'directeur',
});
Professeur.hasOne(Maison, {
  foreignKey: 'id_directeur',  // Clé étrangère dans la table Maison
  as: 'maisonDirigee',
});

// RELATIONS MAISON / PREFET (ELEVE)
// Une maison a un préfet (élève). Un élève peut être préfet d'une maison.
Maison.belongsTo(Eleve, {
  foreignKey: 'id_prefet',     // Clé étrangère dans la table Maison
  as: 'prefet',
});
Eleve.hasOne(Maison, {
  foreignKey: 'id_prefet',     // Clé étrangère dans la table Maison
  as: 'maisonPrefet',
});

// RELATIONS MAISON / ELEVE 
Maison.hasMany(Eleve, {
  foreignKey: 'id_maison',    // Clé étrangère dans la table Eleve
  as: 'eleves',
});
Eleve.belongsTo(Maison, {
  foreignKey: 'id_maison',    // Clé étrangère dans la table Eleve
  as: 'maison',
});

// 
// ANNEEETUDE / MATIERE 

AnneeEtude.belongsToMany(Matiere, {
  through: AnneeEtudeMatiere,  // Utilise le modèle de table de jonction
  foreignKey: "id_annee_etude", // Clé étrangère dans AnneeEtudeMatiere pour AnneeEtude
  otherKey: "id_matiere",    // Clé étrangère dans AnneeEtudeMatiere pour Matiere
  as: "matieresEnseignees",
});
Matiere.belongsToMany(AnneeEtude, {
  through: AnneeEtudeMatiere,  // Utilise table de jonction anneeEtudeMatiere
  foreignKey: "id_matiere",    // Clé étrangère dans AnneeEtudeMatiere pour Matiere
  otherKey: "id_annee_etude",   // Clé étrangère dans AnneeEtudeMatiere pour AnneeEtude
  as: "anneesEtude",
});


module.exports = {
  Utilisateur,
  Professeur,
  Eleve,
  Admin,
  AnneeEtude,
  Matiere,
  Maison,
  Note,
  EleveMatiere,
  AnneeEtudeMatiere
};
