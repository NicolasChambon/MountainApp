-- Adminer 4.8.1 MySQL 8.0.36-0ubuntu0.22.04.1 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `countries`;
CREATE TABLE `countries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `countries` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1,	'Nepal',	NULL,	NULL),
(2,	'France',	NULL,	NULL),
(3,	'Tanzania',	NULL,	NULL),
(4,	'Pakistan',	NULL,	NULL),
(5,	'Switzerland',	NULL,	NULL),
(6,	'Argentina',	NULL,	NULL),
(7,	'United States',	NULL,	NULL),
(8,	'Russia',	NULL,	NULL),
(9,	'Japan',	NULL,	NULL),
(10,	'New Zealand',	NULL,	NULL),
(11,	'Antarctica',	NULL,	NULL),
(12,	'Canada',	NULL,	NULL),
(13,	'China',	NULL,	NULL);

DROP TABLE IF EXISTS `faunas`;
CREATE TABLE `faunas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `faunas` (`id`, `name`, `description`, `createdAt`, `updatedAt`) VALUES
(1,	'Chamois',	'The chamois is a species of goat-antelope native to mountains in Europe',	NULL,	NULL),
(2,	'Marmot',	'The marmot is a large ground squirrel in the genus Marmota',	NULL,	NULL),
(3,	'Golden eagle',	'The golden eagle is one of the best-known birds of prey in the Northern Hemisphere',	NULL,	NULL),
(4,	'Wolf',	'The wolf, also known as the gray wolf or grey wolf, is a large canine native to Eurasia and North America',	NULL,	NULL),
(5,	'Red fox',	'The red fox is the largest of the true foxes and one of the most widely distributed members of the order Carnivora',	NULL,	NULL),
(6,	'Ibex',	'The ibex is a species of wild goat that lives in the mountains of Europe, Asia, and northern Africa',	NULL,	NULL),
(7,	'Owl',	'Owls are birds from the order Strigiformes, which includes over 200 species of mostly solitary and nocturnal birds of prey',	NULL,	NULL),
(8,	'Lynx',	'The lynx is a medium-sized wild cat native to North America, Europe, and Asia',	NULL,	NULL),
(9,	'Alpine ibex',	'The Alpine ibex, also known as the steinbock, is a species of wild goat that lives in the mountains of the European Alps',	NULL,	NULL),
(10,	'Brown bear',	'The brown bear is a large bear species found across Eurasia and North America',	NULL,	NULL),
(11,	'Hare',	'Hares are mammals in the genus Lepus of the family Leporidae',	NULL,	NULL),
(12,	'Pika',	'Pikas are small mammals, with short limbs, rounded ears, and no external tail',	NULL,	NULL),
(13,	'Bearded vulture',	'The bearded vulture, also known as the lammergeier or ossifrage, is a bird of prey and the only member of the genus Gypaetus',	NULL,	NULL),
(14,	'Bison',	'Bison are large, even-toed ungulates in the genus Bison within the subfamily Bovinae',	NULL,	NULL),
(15,	'Badger',	'Badgers are short-legged omnivores in the families Mustelidae and Mephitidae',	NULL,	NULL),
(16,	'Deer',	'Deer are the hoofed ruminant mammals forming the family Cervidae',	NULL,	NULL),
(17,	'Weasel',	'Weasels are mammals of the genus Mustela of the family Mustelidae',	NULL,	NULL),
(18,	'Roe deer',	'The European roe deer, also known as the western roe deer, chevreuil, or simply roe deer or roe, is a species of deer',	NULL,	NULL),
(19,	'Frog',	'Frogs are a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura',	NULL,	NULL),
(20,	'Bat',	'Bats are mammals of the order Chiroptera. With their forelimbs adapted as wings, they are the only mammals capable of true and sustained flight',	NULL,	NULL);

DROP TABLE IF EXISTS `floras`;
CREATE TABLE `floras` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `floras` (`id`, `name`, `description`, `createdAt`, `updatedAt`) VALUES
(1,	'Edelweiss',	'Leontopodium alpinum, commonly called edelweiss, is a well-known mountain flower, belonging to the Asteraceae family',	NULL,	NULL),
(2,	'Gentian',	'Gentiana is a genus of flowering plants belonging to the gentian family Gentianaceae',	NULL,	NULL),
(3,	'Rhododendron',	'Rhododendron is a genus of 1,024 species of woody plants in the heath family',	NULL,	NULL),
(4,	'Martagon lily',	'Lilium martagon, the martagon lily, is a Eurasian species of lily',	NULL,	NULL),
(5,	'Wild orchid',	'Orchidaceae is a diverse and widespread family of flowering plants, with blooms that are often colourful and fragrant',	NULL,	NULL),
(6,	'Juniper',	'Junipers are coniferous plants in the genus Juniperus of the cypress family',	NULL,	NULL),
(7,	'Bellflower',	'Campanula is one of several genera in the family Campanulaceae with the common name bellflower',	NULL,	NULL),
(8,	'Monkshood',	'Aconitum, also known as aconite, monkshood, wolf\'s-bane, leopard\'s bane, mousebane, women\'s bane, devil\'s helmet, queen of poisons, or blue rocket, is a genus of over 250 species of flowering plants belonging to the family Ranunculaceae',	NULL,	NULL),
(9,	'Daffodil',	'Narcissus is a genus of predominantly spring perennial plants of the Amaryllidaceae family',	NULL,	NULL),
(10,	'Blueberry',	'Vaccinium is a genus of shrubs and dwarf shrubs in the heath family',	NULL,	NULL),
(11,	'Poet\'s daffodil',	'Narcissus poeticus was one of the first daffodils to be cultivated, and is frequently identified as the narcissus of ancient times',	NULL,	NULL),
(12,	'Alpine aster',	'Aster alpinus is an ornamental plant native to the mountains of Europe (including the Alps), with a subspecies native to Canada and the United States',	NULL,	NULL),
(13,	'Alpine anemone',	'Anemone is a genus of about 200 species of flowering plants in the family Ranunculaceae',	NULL,	NULL),
(14,	'Saxifrage',	'Saxifraga is the largest genus in the family Saxifragaceae, containing about 440 species of holarctic perennial plants',	NULL,	NULL),
(15,	'Perennial geranium',	'Geranium is a genus of 422 species of annual, biennial, and perennial plants that are commonly known as geraniums or cranesbills',	NULL,	NULL),
(16,	'Centaury',	'Centaurium is a genus of herbaceous flowering plants in the gentian family Gentianaceae',	NULL,	NULL),
(17,	'Yellow gentian',	'Gentiana lutea, the great yellow gentian, is a species of gentian native to the mountains of central and southern Europe',	NULL,	NULL),
(18,	'Trollius',	'Trollius is a genus of about 30 species of plants in the family Ranunculaceae, closely related to Ranunculus',	NULL,	NULL),
(19,	'Pasqueflower',	'Pulsatilla is a genus of about 33 species of herbaceous perennials native to meadows and prairies of North America, Europe, and Asia',	NULL,	NULL),
(20,	'Fireweed',	'Chamerion is a genus of the botanical family Onagraceae and includes the species known as willowherbs and fireweeds',	NULL,	NULL);

DROP TABLE IF EXISTS `mountains`;
CREATE TABLE `mountains` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `latitude` decimal(9,6) DEFAULT NULL,
  `longitude` decimal(9,6) DEFAULT NULL,
  `altitude` int DEFAULT NULL,
  `typeId` int DEFAULT NULL,
  `countryId` int DEFAULT NULL,
  `regionId` int DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `MountainTypeID` (`typeId`),
  KEY `CountryID` (`countryId`),
  KEY `RegionID` (`regionId`),
  CONSTRAINT `mountains_ibfk_2` FOREIGN KEY (`countryId`) REFERENCES `countries` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `mountains_ibfk_3` FOREIGN KEY (`typeId`) REFERENCES `types` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `mountains_ibfk_4` FOREIGN KEY (`regionId`) REFERENCES `regions` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `mountains` (`id`, `name`, `latitude`, `longitude`, `altitude`, `typeId`, `countryId`, `regionId`, `createdAt`, `updatedAt`) VALUES
(1,	'Mount Everest',	27.988100,	86.925000,	8848,	1,	1,	1,	NULL,	NULL),
(2,	'Mont Blanc',	45.832500,	6.865100,	4808,	2,	2,	2,	NULL,	NULL),
(3,	'Mount Kilimanjaro',	-3.067400,	37.355600,	5895,	3,	3,	3,	NULL,	NULL),
(4,	'K2',	35.881400,	76.513300,	8611,	1,	4,	4,	NULL,	NULL),
(5,	'Matterhorn',	45.976400,	7.658400,	4478,	4,	5,	2,	NULL,	NULL),
(6,	'Aconcagua',	-32.653500,	-70.011400,	6962,	1,	6,	5,	NULL,	NULL),
(7,	'Denali',	63.069500,	-151.007000,	6190,	1,	7,	6,	NULL,	NULL),
(8,	'Mount Elbrus',	43.359400,	42.439600,	5642,	3,	8,	7,	NULL,	NULL),
(9,	'Mount McKinley',	63.069500,	-151.007000,	6190,	1,	7,	6,	NULL,	NULL),
(10,	'Mount Fuji',	35.360600,	138.727400,	3776,	3,	9,	8,	NULL,	NULL),
(11,	'Mount Cook',	-43.595000,	170.141900,	3724,	2,	10,	9,	NULL,	NULL),
(12,	'Kangchenjunga',	27.702500,	88.146900,	8586,	1,	1,	1,	NULL,	NULL),
(13,	'Vinson Massif',	-78.525700,	-85.617400,	4892,	2,	11,	10,	NULL,	NULL),
(14,	'Mount Logan',	60.567500,	-140.405800,	5959,	1,	12,	11,	NULL,	NULL),
(15,	'Lhotse',	27.961400,	86.933400,	8516,	1,	1,	1,	NULL,	NULL),
(16,	'Shishapangma',	28.353900,	85.778700,	8027,	1,	13,	12,	NULL,	NULL),
(17,	'K2',	35.881400,	76.513300,	8611,	1,	4,	4,	NULL,	NULL),
(18,	'Gasherbrum I',	35.721000,	76.696700,	8080,	1,	4,	4,	NULL,	NULL),
(19,	'Gasherbrum II',	35.757500,	76.659000,	8035,	1,	4,	4,	NULL,	NULL),
(20,	'Broad Peak',	35.809500,	76.568100,	8051,	1,	4,	4,	NULL,	NULL),
(21,	'Gasherbrum III',	35.757300,	76.625300,	7952,	1,	4,	4,	NULL,	NULL),
(22,	'Gasherbrum IV',	35.809700,	76.570600,	7925,	1,	4,	4,	NULL,	NULL);

DROP TABLE IF EXISTS `mountains_faunas`;
CREATE TABLE `mountains_faunas` (
  `mountainId` int NOT NULL,
  `faunaId` int NOT NULL,
  PRIMARY KEY (`mountainId`,`faunaId`),
  KEY `FaunaID` (`faunaId`),
  CONSTRAINT `mountains_faunas_ibfk_1` FOREIGN KEY (`mountainId`) REFERENCES `mountains` (`id`),
  CONSTRAINT `mountains_faunas_ibfk_2` FOREIGN KEY (`faunaId`) REFERENCES `faunas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `mountains_faunas` (`mountainId`, `faunaId`) VALUES
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

DROP TABLE IF EXISTS `mountains_floras`;
CREATE TABLE `mountains_floras` (
  `mountainId` int NOT NULL,
  `floraId` int NOT NULL,
  PRIMARY KEY (`mountainId`,`floraId`),
  KEY `FloraID` (`floraId`),
  CONSTRAINT `mountains_floras_ibfk_1` FOREIGN KEY (`mountainId`) REFERENCES `mountains` (`id`),
  CONSTRAINT `mountains_floras_ibfk_2` FOREIGN KEY (`floraId`) REFERENCES `floras` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `mountains_floras` (`mountainId`, `floraId`) VALUES
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

DROP TABLE IF EXISTS `regions`;
CREATE TABLE `regions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `regions` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1,	'Himalayas',	NULL,	NULL),
(2,	'Alps',	NULL,	NULL),
(3,	'East Africa',	NULL,	NULL),
(4,	'Karakoram',	NULL,	NULL),
(5,	'Andes',	NULL,	NULL),
(6,	'Alaska',	NULL,	NULL),
(7,	'Caucasus',	NULL,	NULL),
(8,	'Honshu',	NULL,	NULL),
(9,	'South Island',	NULL,	NULL),
(10,	'Vincent',	NULL,	NULL),
(11,	'Yukon',	NULL,	NULL),
(12,	'Tibet',	NULL,	NULL),
(13,	'Yosemite',	NULL,	NULL);

DROP TABLE IF EXISTS `types`;
CREATE TABLE `types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `types` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1,	'Peak',	NULL,	NULL),
(2,	'Massif',	NULL,	NULL),
(3,	'Volcano',	NULL,	NULL),
(4,	'Rocky peak',	NULL,	NULL),
(5,	'Rock wall',	NULL,	NULL);

-- 2024-02-22 23:05:30