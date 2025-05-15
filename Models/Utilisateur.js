const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelize");

class Utilisateur extends Model {}

Utilisateur.init(
  {
    id_utilisateur: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    mot_de_passe: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("eleve", "professeur", "admin"),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "utilisateur",
    timestamps: false,
  }
);

module.exports = Utilisateur;