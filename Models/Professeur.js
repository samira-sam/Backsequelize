const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelize");

class Professeur extends Model {}

Professeur.init(
  {
    id_professeur: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    description: {
      type: DataTypes.TEXT
    },
   
    id_matiere: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "matieres",
        key: "id_matiere",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    id_maison_directeur: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "maisons",
        key: "id_maison",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    },
  },
  {
    sequelize,
    modelName: "Professeur",
    tableName: "professeur",
    timestamps: false,
  }
);

module.exports = Professeur;
