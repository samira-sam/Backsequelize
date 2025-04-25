-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : ven. 25 avr. 2025 à 15:33
-- Version du serveur : 8.0.41-0ubuntu0.22.04.1
-- Version de PHP : 8.1.2-1ubuntu2.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `PoudlardEvaluation`
--

-- --------------------------------------------------------

--
-- Structure de la table `Avoir`
--

CREATE TABLE `Avoir` (
  `id_musicien` int NOT NULL,
  `id_concert` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `Avoir`
--

INSERT INTO `Avoir` (`id_musicien`, `id_concert`) VALUES
(2, 2),
(4, 4),
(4, 5),
(5, 5),
(6, 6),
(2, 7),
(7, 7),
(8, 8),
(10, 10);

-- --------------------------------------------------------

--
-- Structure de la table `Concert`
--

CREATE TABLE `Concert` (
  `id_concert` int NOT NULL,
  `nom` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `Concert`
--

INSERT INTO `Concert` (`id_concert`, `nom`, `date`) VALUES
(1, 'Symphonie No.5', '2025-06-15'),
(2, 'Concerto pour piano', '2025-07-20'),
(3, 'Sonate pour violon', '2025-08-01'),
(4, 'Requiem', '2025-09-10'),
(5, 'Nuit sur le mont chauve', '2025-10-12'),
(6, 'Le Printemps', '2025-11-05'),
(7, 'Les Quatre Saisons', '2025-12-21'),
(8, 'Tannhäuser', '2026-01-15'),
(9, 'Lac des Cygnes', '2026-02-05'),
(10, 'La Flûte Enchantée', '2026-03-03'),
(11, 'Symphonie No.5', '2025-06-15'),
(12, 'Concerto pour piano', '2025-07-20'),
(13, 'Sonate pour violon', '2025-08-01'),
(14, 'Requiem', '2025-09-10'),
(15, 'Nuit sur le mont chauve', '2025-10-12'),
(16, 'Le Printemps', '2025-11-05'),
(17, 'Les Quatre Saisons', '2025-12-21'),
(18, 'Tannhäuser', '2026-01-15'),
(19, 'Lac des Cygnes', '2026-02-05'),
(20, 'La Flûte Enchantée', '2026-03-03'),
(21, 'Symphonie No.5', '2025-06-15'),
(22, 'Concerto pour piano', '2025-07-20'),
(23, 'Sonate pour violon', '2025-08-01'),
(24, 'Requiem', '2025-09-10'),
(25, 'Nuit sur le mont chauve', '2025-10-12'),
(26, 'Le Printemps', '2025-11-05'),
(27, 'Les Quatre Saisons', '2025-12-21'),
(28, 'Tannhäuser', '2026-01-15'),
(29, 'Lac des Cygnes', '2026-02-05'),
(30, 'La Flûte Enchantée', '2026-03-03'),
(31, 'Concerto pour violon', '2026-07-20');

-- --------------------------------------------------------

--
-- Structure de la table `Fiche`
--

CREATE TABLE `Fiche` (
  `id_fiche` int NOT NULL,
  `catégorie` varchar(255) NOT NULL,
  `spécificité` varchar(255) NOT NULL,
  `id_instrument` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `Fiche`
--

INSERT INTO `Fiche` (`id_fiche`, `catégorie`, `spécificité`, `id_instrument`) VALUES
(1, 'Piano à queue', 'Concert', 1),
(2, 'Clavecin ancien', 'Baroque', NULL),
(3, 'Clavecin ancien', 'Baroque', 3),
(4, 'Cello 1750', 'Classique', 4),
(5, 'Flûte traversière', 'Moderne', 5),
(6, 'Guitare électrique', 'Rock', 6),
(7, 'Clarinette en bois', 'Classique', 7),
(8, 'Saxophone ', 'Jazz', 8),
(9, 'Trompette en laiton', 'Jazz', 9),
(10, 'Batterie acoustique', 'Rock', 10);

-- --------------------------------------------------------

--
-- Structure de la table `Instrument`
--

CREATE TABLE `Instrument` (
  `id_instrument` int NOT NULL,
  `type` varchar(255) NOT NULL,
  `id_musicien` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `Instrument`
--

INSERT INTO `Instrument` (`id_instrument`, `type`, `id_musicien`) VALUES
(1, 'Piano', NULL),
(3, 'Clavecin', NULL),
(4, 'Cello', 4),
(5, 'Flute', 5),
(6, 'Guitare', 6),
(7, 'Clarinette', 7),
(8, 'Saxophone', 8),
(9, 'Trompette', NULL),
(10, 'Batterie', 10);

-- --------------------------------------------------------

--
-- Structure de la table `Musicien`
--

CREATE TABLE `Musicien` (
  `id_musicien` int NOT NULL,
  `nom` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `Musicien`
--

INSERT INTO `Musicien` (`id_musicien`, `nom`) VALUES
(2, 'Mozart'),
(4, 'Berlioz'),
(5, 'Tchaikovsky'),
(6, 'Bach'),
(7, 'Vivaldi'),
(8, 'bidul'),
(10, 'Wagner');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Avoir`
--
ALTER TABLE `Avoir`
  ADD PRIMARY KEY (`id_musicien`,`id_concert`),
  ADD KEY `id_concert` (`id_concert`);

--
-- Index pour la table `Concert`
--
ALTER TABLE `Concert`
  ADD PRIMARY KEY (`id_concert`);

--
-- Index pour la table `Fiche`
--
ALTER TABLE `Fiche`
  ADD PRIMARY KEY (`id_fiche`),
  ADD UNIQUE KEY `id_instrument` (`id_instrument`);

--
-- Index pour la table `Instrument`
--
ALTER TABLE `Instrument`
  ADD PRIMARY KEY (`id_instrument`),
  ADD KEY `id_musicien` (`id_musicien`);

--
-- Index pour la table `Musicien`
--
ALTER TABLE `Musicien`
  ADD PRIMARY KEY (`id_musicien`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Concert`
--
ALTER TABLE `Concert`
  MODIFY `id_concert` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT pour la table `Fiche`
--
ALTER TABLE `Fiche`
  MODIFY `id_fiche` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `Instrument`
--
ALTER TABLE `Instrument`
  MODIFY `id_instrument` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `Musicien`
--
ALTER TABLE `Musicien`
  MODIFY `id_musicien` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Avoir`
--
ALTER TABLE `Avoir`
  ADD CONSTRAINT `Avoir_ibfk_1` FOREIGN KEY (`id_musicien`) REFERENCES `Musicien` (`id_musicien`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Avoir_ibfk_2` FOREIGN KEY (`id_concert`) REFERENCES `Concert` (`id_concert`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `Fiche`
--
ALTER TABLE `Fiche`
  ADD CONSTRAINT `Fiche_ibfk_1` FOREIGN KEY (`id_instrument`) REFERENCES `Instrument` (`id_instrument`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `Instrument`
--
ALTER TABLE `Instrument`
  ADD CONSTRAINT `Instrument_ibfk_1` FOREIGN KEY (`id_musicien`) REFERENCES `Musicien` (`id_musicien`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;