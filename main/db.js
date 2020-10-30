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
    // const role_id =parseInt(manager.manager_id);
    return this.connection.query(`SELECT * FROM employee WHERE manager_id = 4;`);
  }

  viewDepartments() {
    return this.connection.query("SELECT * FROM department;");
  }

addEmployee(employee) {
    return this.connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ("${employee.first_name}",
    "${employee.last_name}",
    ${employee.role_id.split(" ")[0]},
    ${employee.Managers.split(" ")[0]});`);
}

addDepartment(department) {

  console.log(department + "<<<<<-------");
    return this.connection.query(`INSERT INTO department (name) VALUES ("${department}");`);
}

addRole(role) {

  console.log(role.title + "<<<<<----title---");
  console.log(role.salary + "<<<<<----salary---");
  console.log(parseInt(role.department.split("")[0]) + "<<<<<----employ>>>>>");
    return this.connection.query(`INSERT INTO roles (title,salary,department_id) VALUES ("${role.title}", ${role.salary}, ${parseInt(role.department.split("")[0])});`);
}
// INSERT INTO roles (title,salary,department_id) VALUES ('Floor Manager',100900.00,4);

deleteEmployee(employee) {
  console.log(parseInt(employee.id.split("")[0]) + '<<============');
    return this.connection.query(`DELETE FROM employee WHERE id = ${parseInt(employee.id.split("")[0])};`);
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
// UPDATE employee SET role_id = 2 AND manager_id =3 WHERE id =  7;
module.exports = new DB(connection);
