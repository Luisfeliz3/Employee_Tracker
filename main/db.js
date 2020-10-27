const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  findAllEmployees() {
    console.log(this.connection.query("SELECT * FROM employee;"));
    return this.connection.query("SELECT * FROM employee;");
  }


  allEmployeeRoles() {
    console.log(this.connection.query("SELECT * FROM department;"));
    return this.connection.query("SELECT * FROM department;");
  }


  
}

module.exports = new DB(connection);
