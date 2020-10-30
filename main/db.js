const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  findAllEmployees() {
    return this.connection.query("SELECT * FROM employee;");
  }

  employeeRoles() {
    return this.connection.query("SELECT * FROM roles;");
  }

  getManager(manager) {
    return this.connection.query(
      `SELECT * FROM employee WHERE manager_id = 4;`
    );
  }

  viewDepartments() {
    return this.connection.query("SELECT * FROM department;");
  }

  addEmployee(employee) {
    return this.connection
      .query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ("${employee.first_name}",
    "${employee.last_name}",
    ${employee.role_id.split(" ")[0]},
    ${employee.Managers.split(" ")[0]});`);
  }

  addDepartment(department) {
    return this.connection.query(
      `INSERT INTO department (name) VALUES ("${department}");`
    );
  }

  addRole(role) {
    return this.connection.query(
      `INSERT INTO roles (title,salary,department_id) VALUES ("${
        role.title
      }", ${role.salary}, ${parseInt(role.department.split("")[0])});`
    );
  }

  deleteEmployee(employee) {
    return this.connection.query(
      `DELETE FROM employee WHERE id = ${parseInt(employee.id.split(" ")[0])};`
    );
  }

  updateEmployee(employee) {
    return this.connection.query(`
  UPDATE employee 
  SET role_id = ${parseInt(employee.role_id.split(" ")[0])},
  manager_id = ${parseInt(employee.Managers.split(" ")[0])}
  WHERE id =${parseInt(employee.Employee.split(" ")[0])};`);
  }

  updateDepartment(employee) {
    return this.connection.query(`
  UPDATE department 
  SET role_id = ${parseInt(employee.role_id.split(" ")[0])},
  manager_id = ${parseInt(employee.Managers.split(" ")[0])}
  WHERE id =${parseInt(employee.Employee.split(" ")[0])};`);
  }
}

module.exports = new DB(connection);
