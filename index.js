const express = require('express');


require ('./Models/Associations');

require('dotenv').config();
// on importe le fichier .env

const app = express();
// on declare l'application express
app.use(express.json());

const port = 3000;
// on declare le port

app.get('/', (req, res) => {
    res.send('Hello World!');
});
// on declare la route racine

const InstrumentRoute = require('./Routes/InstrumentRoute');
app.use('/instrument', InstrumentRoute);


const ConcertRoute = require('./Routes/ConcertRoute');
app.use('/concert', ConcertRoute);

const MusicienRoute = require('./Routes/MusicienRoute');
app.use('/musicien', MusicienRoute);

const FicheRoute = require('./Routes/FicheRoute');
app.use('/fiche', FicheRoute);

app.use((req, res) => {
    res.status(404).json({ message: 'Route non trouvé' });
});



app.listen(process.env.PORT, () => {
    console.log(` Votre serveur est lancé sur http://127.0.0.1:${process.env.PORT}`);
  });