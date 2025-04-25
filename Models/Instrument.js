const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelize");
const Musicien = require("./Musicien");


class Instrument extends Model {}
Instrument.init(
  {
    id_instrument: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    
    id_musicien: {
      type: DataTypes.INTEGER,
      allowNull: true, 
    },

  },



  
  {
    sequelize,
    tableName: "Instrument",
    timestamps: false,
  }
);
module.exports = Instrument;

