const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelize");

class Bdc extends Model {}

Bdc.init(
  {
    id_Bdc: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
      },
    photo: {
        type: DataTypes.STRING,
        allowNull: false
      },
    prix: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    
},
    
  {
    sequelize,
    tableName: "bdc",
    timestamps: false,
  }
);

module.exports = Bdc;