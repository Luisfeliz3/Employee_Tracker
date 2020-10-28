const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  findAllEmployees() {
    
    return this.connection.query("SELECT * FROM employee;");
  }


  employeeRoles() {
    
    return this.connection.query("SELECT * FROM role;");
  }

  viewDepartments() {
    
    return this.connection.query("SELECT * FROM department;");
  }

  addEmployee(employee) {
    const manager_id =parseInt(employee.manager_id)
    const role_id =parseInt(employee.role_id);



    return this.connection.query(`INSERT INTO employee (first_name, lasst_name, role_id, manager_id)
    VALUES ("${employee.firstName}","${employee.lastName}","${role_id}","${manager_id}");`);

//   `  INSERT INTO employee (first_name,lasst_name,role_id,manager_id)
//     VALUES ('${employee}','${employee}', ${employee}, ${employee});`

//     return this.connection.query(`INSERT INTO employee ( name)
//     VALUES (${employee})`);

    //    console.log(employee.firstName);
    //      console.log(employee.lastName);
    //       console.log(employee.role_id);
    //   console.log(employee.manager_id);
}



  
}

module.exports = new DB(connection);
