const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelize");
const Instrument = require("./Instrument");



class Fiche extends Model {}
Fiche.init(
  {
    id_fiche: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    catégorie: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    spécificité: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    id_instrument: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "Fiche",
    timestamps: false,
  }
);
module.exports = Fiche;