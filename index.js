const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config(); // Chargement des variables d'environnement

require("./Models/Associations.js"); // Importe les associations Sequelize

// Importe les fichiers de route
const authRoutes = require("./Routes/AuthRoute");
const utilisateurRoutes = require("./Routes/UtilisateurRoute");
const professeurRoutes = require("./Routes/ProfesseurRoute");
const matiereRoutes = require("./Routes/MatiereRoute");
const anneeEtudeRoutes = require("./Routes/AnneeEtudeRoute");
const eleveRoutes = require("./Routes/EleveRoute");
const maisonRoutes = require("./Routes/MaisonRoute");
const noteRoutes = require("./Routes/NoteRoute");
const adminRoutes = require("./Routes/AdminRoute");
const rentreeRoutes = require("./Routes/RentreeRoute");
const infoLivraisonRoutes = require("./Routes/InfoLivraisonRoute");
const concoursRoutes = require("./Routes/ConcoursRoute");
const buseRoutes = require("./Routes/BuseRoute");
const vacancesRoutes = require("./Routes/VacancesRoute");
const bdcRoutes = require("./Routes/BdcRoute");
const articleRoutes = require("./Routes/ArticleRoute");
const inscriptionRoutes = require('./Routes/EleveMatiereRoute');
const anneeEtudeMatiereRoutes = require('./Routes/AnneeEtudeMatiereRoute');

const app = express();

// Middleware pour parser le corps des requêtes en JSON
app.use(bodyParser.json());

// Utilisation des routes
app.use("/auth", authRoutes);
app.use("/utilisateurs", utilisateurRoutes);
app.use("/professeurs", professeurRoutes);
app.use("/matieres", matiereRoutes);
app.use("/annees", anneeEtudeRoutes);
app.use("/eleves", eleveRoutes);
app.use("/maisons", maisonRoutes);
app.use("/notes", noteRoutes);
app.use("/admins", adminRoutes);
app.use("/rentrees", rentreeRoutes);
app.use("/infos-livraison", infoLivraisonRoutes);
app.use("/concours", concoursRoutes);
app.use("/buses", buseRoutes);
app.use("/vacances", vacancesRoutes);
app.use("/bdcs", bdcRoutes);
app.use("/articles", articleRoutes);
app.use('/inscriptions', inscriptionRoutes);//inscrire un eleve a une matière
app.use('/annees-etudes-matieres', anneeEtudeMatiereRoutes);

// Route racine
app.get("/", (req, res) => {
  res.send("Bienvenue à Poudlard 🧙‍♂️");
});

// Gestion des erreurs 404 (Route non trouvée)
app.use((req, res) => {
  res.status(404).json({ message: "Route non trouvée" });
});

// Démarrage du serveur
const PORT = process.env.PORT || 3033;
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});
