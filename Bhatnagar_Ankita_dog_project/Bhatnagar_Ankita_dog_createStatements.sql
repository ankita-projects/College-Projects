create database dogdb;
CREATE USER 'william'@'localhost' IDENTIFIED BY 'aqJA6jQ5';
GRANT ALL PRIVILEGES ON * . * TO 'william'@'localhost';


use dogdb;
CREATE TABLE dog (
number integer PRIMARY KEY,
name varchar(29),
weightKg integer,
length integer,
breed varchar(22)
);
INSERT INTO dog (number, name, weightKg, length, breed)
VALUES ( 123, 'Tomy',  21, 20, 'bulldog' );
INSERT INTO dog (number, name, weightKg, length, breed)
VALUES ( 1234, 'Jacky',  30, 25, 'pit bull' );


