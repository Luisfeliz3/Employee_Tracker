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

  console.log(role + "<<<<<-------");
    return this.connection.query(`INSERT INTO roles (title) VALUES ("${role}");`);
}


deleteEmployee(employee) {
  console.log(parseInt(employee.id.split("")[0]) + '<<============');
    return this.connection.query(`DELETE FROM employee WHERE id = ${parseInt(employee.id.split("")[0])};`);
}

updateEmployee(employee) {
//  const id = parseInt(employee.id.split("")[0])
//  const manId = parseInt(employee.id.split("")[0])
//  const empId = parseInt(employee.id.split("")[0])

//  console.log(id+"<<<<<---id---->>>");
//  console.log(manId+"<<<<<---manid---->>>>");
//  console.log(empId+"<<<<<----empd--->>>>");


  return this.connection.query(`
  UPDATE employee 
  SET role_id = ${parseInt(employee.role_id.split(" ")[0])},
  manager_id = ${parseInt(employee.Managers.split(" ")[0])}
  WHERE id =${parseInt(employee.Employee.split(" ")[0])};`);
}
}
// UPDATE employee SET role_id = 2 AND manager_id =3 WHERE id =  7;
module.exports = new DB(connection);
