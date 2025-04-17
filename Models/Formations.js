const { Model, DataTypes } = require('sequelize');
// on déclare la const Model et DataTypes pour utiliser les types de données

const sequelize = require('../Config/sequelize');
// on importe la config de sequelize

class Formation extends Model { }
// on déclare la classe Formation qui hérite de Model

Formation.init( // on initialise le modèle
  {
    id_formation: { // on déclare les champs de la table
      type: DataTypes.INTEGER, // on déclare le type de données
      primaryKey: true, // on déclare la clé primaire
      autoIncrement: true, // on déclare l'auto increment
      allowNull: false, // on déclare le champ comme non nul
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    niveau: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize, // on déclare la config sequelize
    modelName: 'Formation', // on déclare le nom du modèle
    tableName: 'formation', // on déclare le nom de la table dans la BDD
    timestamps: false, // on désactive les timestamps
  }
);

module.exports = Formation;
// on exporte le modèle Formation
