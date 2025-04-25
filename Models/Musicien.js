const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/sequelize');


class Musicien extends Model {}
Musicien.init( 
 {
    id_musicien: { 
 type: DataTypes.INTEGER,
 primaryKey: true, 
 autoIncrement: true,
 },
 nom: {
 type: DataTypes.STRING(50),
 allowNull: false,
 },
 


 },
 {
 sequelize, 
 tableName: 'Musicien', 
 timestamps: false,
 }
);
module.exports = Musicien;
