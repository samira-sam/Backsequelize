// Services/EmailService.js

const nodemailer = require('nodemailer');

// Configure le "transporteur" d'email (comment Nodemailer va se connecter à Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail', // On dit qu'on utilise Gmail
  auth: {
    user: 'contactsamirabel@gmail.com', // Ton adresse Gmail
    pass: 'xpdrooforycspmyy ' // Le mot de passe d'application que Google t'a donné
  }
});

// Une fonction pour envoyer l'email de confirmation
async function envoyerEmailConfirmation(emailUtilisateur, nomUtilisateur) {
  const mailOptions = {
    from: 'contactsamirabel@gmail.com', // L'expéditeur (ton adresse Gmail)
    to: emailUtilisateur,                 // Le destinataire (l'email de la personne qui s'est inscrite)
    subject: 'Bienvenue à Poudlard ! 🦉 Ton inscription est confirmée.', // L'objet de l'email
    html: `
      <h1>Bienvenue à Poudlard, ${nomUtilisateur} !</h1>
      <p>Ta chouette est bien arrivée avec ton inscription !</p>
      <p>Ton compte a été créé avec succès.</p>
      <p>Un administrateur de l'école examinera bientôt ta demande et t'attribuera ton rôle (Élève, Professeur, ou peut-être même une autre surprise !).</p>
      <p>En attendant, tu peux rêver à ta future maison : Gryffondor, Serpentard, Poufsouffle ou Serdaigle ?</p>
      <p>À très bientôt dans les couloirs de Poudlard !</p>
      <p>L'équipe d'admission de Poudlard</p>
    `
    // Tu peux aussi utiliser "text: 'Contenu en texte simple'" si tu ne veux pas de HTML
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email de confirmation envoyé à ${emailUtilisateur}`);
  } catch (error) {
    console.error(`Erreur lors de l'envoi de l'email à ${emailUtilisateur}:`, error);
    // Ici, tu pourrais vouloir gérer l'erreur plus spécifiquement si besoin
  }
}

// On exporte la fonction pour pouvoir l'utiliser ailleurs
module.exports = {
  envoyerEmailConfirmation
};