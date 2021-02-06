-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: web_project_g9
-- ------------------------------------------------------
-- Server version	5.7.32-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `trays`
--

DROP TABLE IF EXISTS `trays`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `trays` (
  `TrayName` varchar(100) NOT NULL,
  `price` tinyint(4) NOT NULL,
  `Details` varchar(5000) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `t_div` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`TrayName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trays`
--

LOCK TABLES `trays` WRITE;
/*!40000 ALTER TABLE `trays` DISABLE KEYS */;
INSERT INTO `trays` VALUES ('colorful coconut tray',80,'colorful coconut cookies with almonds and brown sugar','media/colorful.JPG','item1'),('dates flowers',100,'dates cookies with sweet surprises combine with sumsum cookies','media/dates.jpg','item3'),('fresh sponges',120,'the classic sponges, hot from the oven','media/sfing.jpg','item4'),('shebacias',100,'the sweet shebacia cookies with hoeny','media/shebakia.jpg','item6'),('sumsum party tray',100,'sweet sumsum cookies, with nuts and almonds','media/sumsum.jpg','item2'),('sweet kisses',100,'sweet kisses, dates and coconut cookies all together for amazing event','media/kisses.jpg','item5');
/*!40000 ALTER TABLE `trays` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-06 20:53:10
