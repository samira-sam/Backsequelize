const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelize");

class Matiere extends Model {}
Matiere.init(
  {
    id_matiere: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    id_professeur: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'professeur', // référence à la table Professeur
        key: 'id_professeur', // clé primaire dans Professeur
      },
    },
  
  },
  {
    sequelize,
    tableName: "matiere",
    timestamps: false,
  }
);

module.exports = Matiere;

