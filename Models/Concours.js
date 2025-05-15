const { DataTypes, Model } = require('sequelize');
const sequelize = require('../Config/sequelize');

class Concours extends Model {}
Concours.init(
   {
  id_concours: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  info: {
    type: DataTypes.TEXT
  }
}, {
  sequelize,
  tableName: 'concours',
  timestamps: false
});

module.exports = Concours;
