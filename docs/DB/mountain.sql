-- Adminer 4.8.1 MySQL 8.0.36-0ubuntu0.22.04.1 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `Countries`;
CREATE TABLE `Countries` (
  `CountryID` int NOT NULL AUTO_INCREMENT,
  `CountryName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`CountryID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `Countries` (`CountryID`, `CountryName`) VALUES
(1,	'Nepal'),
(2,	'France'),
(3,	'Tanzania'),
(4,	'Pakistan'),
(5,	'Switzerland'),
(6,	'Argentina'),
(7,	'United States'),
(8,	'Russia'),
(9,	'Japan'),
(10,	'New Zealand'),
(11,	'Antarctica'),
(12,	'Canada'),
(13,	'China');

DROP TABLE IF EXISTS `Fauna`;
CREATE TABLE `Fauna` (
  `FaunaID` int NOT NULL AUTO_INCREMENT,
  `FaunaName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`FaunaID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `Fauna` (`FaunaID`, `FaunaName`, `Description`) VALUES
(1,	'Chamois',	'The chamois is a species of goat-antelope native to mountains in Europe'),
(2,	'Marmot',	'The marmot is a large ground squirrel in the genus Marmota'),
(3,	'Golden eagle',	'The golden eagle is one of the best-known birds of prey in the Northern Hemisphere'),
(4,	'Wolf',	'The wolf, also known as the gray wolf or grey wolf, is a large canine native to Eurasia and North America'),
(5,	'Red fox',	'The red fox is the largest of the true foxes and one of the most widely distributed members of the order Carnivora'),
(6,	'Ibex',	'The ibex is a species of wild goat that lives in the mountains of Europe, Asia, and northern Africa'),
(7,	'Owl',	'Owls are birds from the order Strigiformes, which includes over 200 species of mostly solitary and nocturnal birds of prey'),
(8,	'Lynx',	'The lynx is a medium-sized wild cat native to North America, Europe, and Asia'),
(9,	'Alpine ibex',	'The Alpine ibex, also known as the steinbock, is a species of wild goat that lives in the mountains of the European Alps'),
(10,	'Brown bear',	'The brown bear is a large bear species found across Eurasia and North America'),
(11,	'Hare',	'Hares are mammals in the genus Lepus of the family Leporidae'),
(12,	'Pika',	'Pikas are small mammals, with short limbs, rounded ears, and no external tail'),
(13,	'Bearded vulture',	'The bearded vulture, also known as the lammergeier or ossifrage, is a bird of prey and the only member of the genus Gypaetus'),
(14,	'Bison',	'Bison are large, even-toed ungulates in the genus Bison within the subfamily Bovinae'),
(15,	'Badger',	'Badgers are short-legged omnivores in the families Mustelidae and Mephitidae'),
(16,	'Deer',	'Deer are the hoofed ruminant mammals forming the family Cervidae'),
(17,	'Weasel',	'Weasels are mammals of the genus Mustela of the family Mustelidae'),
(18,	'Roe deer',	'The European roe deer, also known as the western roe deer, chevreuil, or simply roe deer or roe, is a species of deer'),
(19,	'Frog',	'Frogs are a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura'),
(20,	'Bat',	'Bats are mammals of the order Chiroptera. With their forelimbs adapted as wings, they are the only mammals capable of true and sustained flight');

DROP TABLE IF EXISTS `Flora`;
CREATE TABLE `Flora` (
  `FloraID` int NOT NULL AUTO_INCREMENT,
  `FloraName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`FloraID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `Flora` (`FloraID`, `FloraName`, `Description`) VALUES
(1,	'Edelweiss',	'Leontopodium alpinum, commonly called edelweiss, is a well-known mountain flower, belonging to the Asteraceae family'),
(2,	'Gentian',	'Gentiana is a genus of flowering plants belonging to the gentian family Gentianaceae'),
(3,	'Rhododendron',	'Rhododendron is a genus of 1,024 species of woody plants in the heath family'),
(4,	'Martagon lily',	'Lilium martagon, the martagon lily, is a Eurasian species of lily'),
(5,	'Wild orchid',	'Orchidaceae is a diverse and widespread family of flowering plants, with blooms that are often colourful and fragrant'),
(6,	'Juniper',	'Junipers are coniferous plants in the genus Juniperus of the cypress family'),
(7,	'Bellflower',	'Campanula is one of several genera in the family Campanulaceae with the common name bellflower'),
(8,	'Monkshood',	'Aconitum, also known as aconite, monkshood, wolf\'s-bane, leopard\'s bane, mousebane, women\'s bane, devil\'s helmet, queen of poisons, or blue rocket, is a genus of over 250 species of flowering plants belonging to the family Ranunculaceae'),
(9,	'Daffodil',	'Narcissus is a genus of predominantly spring perennial plants of the Amaryllidaceae family'),
(10,	'Blueberry',	'Vaccinium is a genus of shrubs and dwarf shrubs in the heath family'),
(11,	'Poet\'s daffodil',	'Narcissus poeticus was one of the first daffodils to be cultivated, and is frequently identified as the narcissus of ancient times'),
(12,	'Alpine aster',	'Aster alpinus is an ornamental plant native to the mountains of Europe (including the Alps), with a subspecies native to Canada and the United States'),
(13,	'Alpine anemone',	'Anemone is a genus of about 200 species of flowering plants in the family Ranunculaceae'),
(14,	'Saxifrage',	'Saxifraga is the largest genus in the family Saxifragaceae, containing about 440 species of holarctic perennial plants'),
(15,	'Perennial geranium',	'Geranium is a genus of 422 species of annual, biennial, and perennial plants that are commonly known as geraniums or cranesbills'),
(16,	'Centaury',	'Centaurium is a genus of herbaceous flowering plants in the gentian family Gentianaceae'),
(17,	'Yellow gentian',	'Gentiana lutea, the great yellow gentian, is a species of gentian native to the mountains of central and southern Europe'),
(18,	'Trollius',	'Trollius is a genus of about 30 species of plants in the family Ranunculaceae, closely related to Ranunculus'),
(19,	'Pasqueflower',	'Pulsatilla is a genus of about 33 species of herbaceous perennials native to meadows and prairies of North America, Europe, and Asia'),
(20,	'Fireweed',	'Chamerion is a genus of the botanical family Onagraceae and includes the species known as willowherbs and fireweeds');

DROP TABLE IF EXISTS `MountainFauna`;
CREATE TABLE `MountainFauna` (
  `MountainID` int NOT NULL,
  `FaunaID` int NOT NULL,
  PRIMARY KEY (`MountainID`,`FaunaID`),
  KEY `FaunaID` (`FaunaID`),
  CONSTRAINT `MountainFauna_ibfk_1` FOREIGN KEY (`MountainID`) REFERENCES `Mountains` (`MountainID`),
  CONSTRAINT `MountainFauna_ibfk_2` FOREIGN KEY (`FaunaID`) REFERENCES `Fauna` (`FaunaID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `MountainFauna` (`MountainID`, `FaunaID`) VALUES
(1,	1),
(2,	1),
(3,	1),
(1,	2),
(2,	2),
(3,	2),
(1,	3),
(2,	3),
(3,	3),
(1,	4),
(2,	4),
(3,	4),
(1,	5),
(2,	5),
(3,	5),
(1,	6),
(2,	6),
(3,	6),
(1,	7),
(2,	7),
(3,	7),
(1,	8),
(2,	8),
(3,	8),
(1,	9),
(2,	9),
(3,	9),
(1,	10),
(2,	10),
(3,	10);

DROP TABLE IF EXISTS `MountainFlora`;
CREATE TABLE `MountainFlora` (
  `MountainID` int NOT NULL,
  `FloraID` int NOT NULL,
  PRIMARY KEY (`MountainID`,`FloraID`),
  KEY `FloraID` (`FloraID`),
  CONSTRAINT `MountainFlora_ibfk_1` FOREIGN KEY (`MountainID`) REFERENCES `Mountains` (`MountainID`),
  CONSTRAINT `MountainFlora_ibfk_2` FOREIGN KEY (`FloraID`) REFERENCES `Flora` (`FloraID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `MountainFlora` (`MountainID`, `FloraID`) VALUES
(1,	1),
(2,	1),
(3,	1),
(1,	2),
(2,	2),
(3,	2),
(1,	3),
(2,	3),
(3,	3),
(1,	4),
(2,	4),
(3,	4),
(1,	5),
(2,	5),
(3,	5),
(1,	6),
(2,	6),
(3,	6),
(1,	7),
(2,	7),
(3,	7),
(1,	8),
(2,	8),
(3,	8),
(1,	9),
(2,	9),
(3,	9),
(1,	10),
(2,	10),
(3,	10);

DROP TABLE IF EXISTS `MountainType`;
CREATE TABLE `MountainType` (
  `MountainTypeID` int NOT NULL AUTO_INCREMENT,
  `TypeName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`MountainTypeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `MountainType` (`MountainTypeID`, `TypeName`) VALUES
(1,	'Peak'),
(2,	'Massif'),
(3,	'Volcano'),
(4,	'Rocky peak'),
(5,	'Rock wall');

DROP TABLE IF EXISTS `Mountains`;
CREATE TABLE `Mountains` (
  `MountainID` int NOT NULL AUTO_INCREMENT,
  `MountainName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Latitude` decimal(9,6) DEFAULT NULL,
  `Longitude` decimal(9,6) DEFAULT NULL,
  `Altitude` int DEFAULT NULL,
  `MountainTypeID` int DEFAULT NULL,
  `CountryID` int DEFAULT NULL,
  `RegionID` int DEFAULT NULL,
  PRIMARY KEY (`MountainID`),
  KEY `MountainTypeID` (`MountainTypeID`),
  KEY `CountryID` (`CountryID`),
  KEY `RegionID` (`RegionID`),
  CONSTRAINT `FK_Countries` FOREIGN KEY (`CountryID`) REFERENCES `Countries` (`CountryID`),
  CONSTRAINT `FK_MountainType` FOREIGN KEY (`MountainTypeID`) REFERENCES `MountainType` (`MountainTypeID`),
  CONSTRAINT `FK_Regions` FOREIGN KEY (`RegionID`) REFERENCES `Regions` (`RegionID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `Mountains` (`MountainID`, `MountainName`, `Latitude`, `Longitude`, `Altitude`, `MountainTypeID`, `CountryID`, `RegionID`) VALUES
(1,	'Mount Everest',	27.988100,	86.925000,	8848,	1,	1,	1),
(2,	'Mont Blanc',	45.832500,	6.865100,	4808,	2,	2,	2),
(3,	'Mount Kilimanjaro',	-3.067400,	37.355600,	5895,	3,	3,	3),
(4,	'K2',	35.881400,	76.513300,	8611,	1,	4,	4),
(5,	'Matterhorn',	45.976400,	7.658400,	4478,	4,	5,	2),
(6,	'Aconcagua',	-32.653500,	-70.011400,	6962,	1,	6,	5),
(7,	'Denali',	63.069500,	-151.007000,	6190,	1,	7,	6),
(8,	'Mount Elbrus',	43.359400,	42.439600,	5642,	3,	8,	7),
(9,	'Mount McKinley',	63.069500,	-151.007000,	6190,	1,	7,	6),
(10,	'Mount Fuji',	35.360600,	138.727400,	3776,	3,	9,	8),
(11,	'Mount Cook',	-43.595000,	170.141900,	3724,	2,	10,	9),
(12,	'Kangchenjunga',	27.702500,	88.146900,	8586,	1,	1,	1),
(13,	'Vinson Massif',	-78.525700,	-85.617400,	4892,	2,	11,	10),
(14,	'Mount Logan',	60.567500,	-140.405800,	5959,	1,	12,	11),
(15,	'Lhotse',	27.961400,	86.933400,	8516,	1,	1,	1),
(16,	'Shishapangma',	28.353900,	85.778700,	8027,	1,	13,	12),
(17,	'K2',	35.881400,	76.513300,	8611,	1,	4,	4),
(18,	'Gasherbrum I',	35.721000,	76.696700,	8080,	1,	4,	4),
(19,	'Gasherbrum II',	35.757500,	76.659000,	8035,	1,	4,	4),
(20,	'Broad Peak',	35.809500,	76.568100,	8051,	1,	4,	4),
(21,	'Gasherbrum III',	35.757300,	76.625300,	7952,	1,	4,	4),
(22,	'Gasherbrum IV',	35.809700,	76.570600,	7925,	1,	4,	4);

DROP TABLE IF EXISTS `Regions`;
CREATE TABLE `Regions` (
  `RegionID` int NOT NULL AUTO_INCREMENT,
  `RegionName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`RegionID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `Regions` (`RegionID`, `RegionName`) VALUES
(1,	'Himalayas'),
(2,	'Alps'),
(3,	'East Africa'),
(4,	'Karakoram'),
(5,	'Andes'),
(6,	'Alaska'),
(7,	'Caucasus'),
(8,	'Honshu'),
(9,	'South Island'),
(10,	'Vincent'),
(11,	'Yukon'),
(12,	'Tibet'),
(13,	'Yosemite');

-- 2024-02-22 08:24:42