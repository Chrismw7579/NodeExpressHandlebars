create database burgerDB;

use burgerDB;

CREATE TABLE burger (
    id int auto_increment,
    PRIMARY KEY (id),
    burger_name VARCHAR(30),
    devoured boolean
);

