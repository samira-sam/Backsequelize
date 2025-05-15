// Middlewares/AuthorizeRole.js

// Ce middleware prend en argument une liste des rôles qui sont autorisés
const authorizeRole = (rolesAutorises) => {
    return (req, res, next) => {
      // On suppose que ton middleware "authenticate" a déjà mis les infos de l'utilisateur
      // (y compris son rôle) dans req.user
      if (!req.user || !req.user.role) {
        // Si on n'a pas les infos de l'utilisateur ou son rôle, c'est un problème
        return res.status(403).json({ message: "Accès interdit: Rôle utilisateur non trouvé." });
      }
  
      // On vérifie si le rôle de l'utilisateur est dans la liste des rôles autorisés
      if (rolesAutorises.includes(req.user.role)) {
        // Oui, on continue
        next();
      } else {
        // Non, On bloque !
       
        res.status(403).json({ message: "Accès interdit: Vous n'avez pas les droits nécessaires." });
      }
    };
  };
  
  module.exports = authorizeRole; // On exporte notre super fonction