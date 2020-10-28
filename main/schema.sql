DROP DATABASE IF EXISTS employee_DB;
CREATE database employee_DB;

USE employee_DB;

CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id) NOT NULL
);

CREATE TABLE roles (
  id INT AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT,
  first_name VARCHAR(30),
  lasst_name VARCHAR(30),
  role_id DECIMAL,
  manager_id INT,
  PRIMARY KEY (id)
);


SELECT * FROM department;


INSERT INTO department ( name)
VALUES ('Technical');


INSERT INTO employee (fname,lname)
VALUES ('Technical');