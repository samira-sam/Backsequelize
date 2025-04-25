const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelize");



class Concert extends Model {}
Concert.init(
  {
    id_concert: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    date: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    
  },
  {
    sequelize,
    tableName: "Concert",
    timestamps: false,
  }
);
module.exports = Concert;