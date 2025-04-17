const { Model, DataTypes } = require('sequelize');
// on déclare la const Model et DataTypes pour utiliser les types de données

const sequelize = require('../Config/sequelize');
// on importe la config de sequelize

class Formateur extends Model { }
// on déclare la classe Formateur qui hérite de Model

Formateur.init( // on initialise le modèle
  {
    id_formateur: { // on déclare les champs de la table
      type: DataTypes.INTEGER, // on déclare le type de données
      primaryKey: true, // on déclare la clé primaire
      autoIncrement: true, // on déclare l'auto increment
      allowNull: false, // on déclare le champ comme non nul
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize, // on déclare la config sequelize
    modelName: 'Formateur', // on déclare le nom du modèle
    tableName: 'formateur', // on déclare le nom de la table dans la BDD
    timestamps: false, // on désactive les timestamps
  }
);

module.exports = Formateur;
// on exporte le modèle Formateur
