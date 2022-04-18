DROP DATABASE IF EXISTS  chess_db;
CREATE DATABASE  chess_db;

USE chess_db;

-- Table init and seed 
CREATE TABLE IF NOT EXISTS `organization` (`id` INTEGER auto_increment , `name` VARCHAR(255) NOT NULL, PRIMARY KEY (`id`));
INSERT INTO `organization` (`name`)
VALUES ("ACC");
INSERT INTO `organization` (`name`)
VALUES ("HUTTO");
INSERT INTO `organization` (`name`)
VALUES ("Deeze");
SHOW INDEX FROM `organization`;
SELECT * from `organization`;


-- USers 
CREATE TABLE IF NOT EXISTS `user`(
`id` INTEGER auto_increment PRIMARY KEY, 
`username` VARCHAR(255) NOT NULL, 
`email` VARCHAR(255) NOT NULL, 
`is_Host` boolean,  
`password` VARCHAR(255) NOT NULL, 
`wins` INTEGER, 
`losses` INTEGER, 
`elo` DECIMAL(10,2));

INSERT INTO `user` (`username`,`email`, `is_Host`,`password`,`wins`,`losses`,`elo`)
VALUES ("k-bugz", "kbugusky@gmail.com", false, "1234Password", 100, 0, 1234);
SHOW INDEX FROM `user`;
SELECT * from `user`;