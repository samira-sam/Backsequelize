const { Model, DataTypes } = require('sequelize');
// on declare la const model et dataTypes pour utiliser les types de données
const sequelize = require('../Config/sequelize');
// on importe la config de sequelize
class Stagiaires extends Model { }
// on declare la class stagiaires qui herite de model
Stagiaires.init( // on initialise le model
    {
        id_stagiaires: { // on declare les champs de la table
            type: DataTypes.INTEGER, // on declare le type dedonnées
            primaryKey: true, // on declare la clé primaire
            autoIncrement: true, // on declare l'auto increment
            allowNull: false, // on declare le champ comme non nul
        },
        nom: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        prenom: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize, // on declare la config de sequelize
        modelName: 'Stagiaires', // on declare le nom du model
        tableName: 'stagiaires', // on declare le nom de la table
        timestamps: false, // on declare les timestamps
    }
);
module.exports = Stagiaires;
// on exporte le model stagiaires