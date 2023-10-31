CREATE DATABASE IF NOT EXISTS companydb;

CREATE TABLE IF NOT EXISTS employee (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  salary INT(5) NOT NULL,
  PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee VALUES
  (1, 'Joe',1000),
  (3, 'Henry',2000),
  (4, 'Sam',2500),
  (5, 'Max',1500);