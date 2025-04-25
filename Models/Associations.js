const Musicien = require("./Musicien");
const Instrument = require("./Instrument");
const Fiche = require("./Fiche");
const Concert = require("./Concert");
const Avoir = require("./Avoir");

// relation 1 à N (Musicien -> Instrument)
Musicien.hasMany(Instrument, {
  foreignKey: "id_musicien",
  as: "Instrument",
});
Instrument.belongsTo(Musicien, {
  foreignKey: "id_musicien",
  as: "Musicien",
});



// relation 1 à 1 (Instrument -> fiche technique)
Instrument.hasOne(Fiche, {
  foreignKey: "id_instrument",
  as: "Fiche",
});
Fiche.belongsTo(Instrument, {
  foreignKey: "id_instrument",
  as: "Instrument",
});



// relation N à N (instrument -> examen)
Musicien.belongsToMany(Concert, {
  through: Avoir,
  foreignKey: "id_musicien",
  as: "Concert",
});
Concert.belongsToMany(Musicien, {
  through: Avoir,
  foreignKey: "id_concert",
  as: "Musicien",
});

module.exports = {
  Musicien,
  Instrument,
  Fiche,
  Concert,
  Avoir,

};