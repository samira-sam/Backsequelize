const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelize");

const Musicien = require("./Musicien");

class Avoir extends Model {}

Avoir.init(
  {
    id_concert : {
      type: DataTypes.INTEGER,
      primaryKey: true,
     
    },
    id_musicien: {
      type: DataTypes.INTEGER,
      primaryKey: true,
     
    },
  },
  {
    sequelize,
    tableName: "Avoir",
    timestamps: false,
  }
);

module.exports = Avoir;
