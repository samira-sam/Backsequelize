const { Model,DataTypes } = require('sequelize');
const sequelize = require('../Config/sequelize');

class Vacances extends Model {}

Vacances.init(
  {
    id_vacances: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    info: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
     
    },
    
    },
  
  {
    sequelize,
    tableName: "vacances",
    timestamps: false,
  }
);

module.exports = Vacances;
