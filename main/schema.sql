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
  salary DECIMAL(10,4) NULL,
  department_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id DECIMAL,
  manager_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES roles(role_id),
  FOREIGN KEY (manager_id) REFERENCES Manager(manager_id);
);


CREATE TABLE employee (
  id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id DECIMAL,
  manager_id INT,
  PRIMARY KEY (id));


SELECT * FROM department;


INSERT INTO department (name,)
VALUES ('Technical');

INSERT INTO role (title, salary)
VALUES ('Technical', 100000.000);

INSERT INTO employee (fname,lname)
VALUES ('Technical');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ('Danny','Floral',2,1),
          ('Tony','Danza',3,2),
          ('Jose','Reta',2,1),
          ('Mario','Delora',1,1),
          ('Lalo','Rodriguez',3,3),
          ('Mario','Delora',2,2),
          ('Alex','Pena',3,2),
          ('Bobby','Johnson',4,2),
          ('Yendy','Feliz',2,1),
          ('Laijha','Phillps',3,2),
          ('Steven','Chipets',1,2);

    DELETE FROM employee WHERE lasst_name = 'Floral' AND first_name = 'Danny';
    Sales Lead 
Sales Person
Lead Engineer
Software Engineer
Account Manager 
Accountant
Leagal Team Lead