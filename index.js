const mysql = require("mysql");
const { prompt } = require("inquirer");
const DB = require("./main/db");

const start = async () =>{
  const { choice } = await prompt([
    {
      name: "choice",
      type: "list",
      message: "What would you like to do ?",
      choices: [
        {
          name: "View all employees ?",
          value: "VIEW_EMPLOYEES",
        },
        {
          name: "View Roles",
          value: "VIEW_ROLES",
        },
        {
          name: "Add a Role",
          value: "ADD_ROLE",
        },
        {
          name: "View all Departments ?",
          value: "VIEW_DEPARTMENTS",
        },
        {
          name: "Add a Department",
          value: "ADD_DEPARTMENT",
        },
        {
          name: "Add an Employees",
          value: "ADD_EMPLOYEE",
        },
        {
          name: "Delete an Employee",
          value: "DELETE_EMPLOYEE",
        },
        {
          name: "Update an Employee",
          value: "UPDATE_EMPLOYEE",
        },
      ],
    },
  ]);

  const viewEmployee = async () => {
    const employees = await DB.findAllEmployees();
    console.log("/n");
    console.table(employees);
    start();
  };

  const viewEmployeeRoles = async () => {
    const roles = await DB.employeeRoles();
    console.log("/n");
    console.table(roles);
    start();
  };

  const viewDepartments = async () => {
    const department = await DB.viewDepartments();
    console.log("/n");
    console.table(department);
    start();
  };

  const addDepartments = async () => {
    await prompt([
      {
        name: "department_name",
        type: "input",
        message: "What is the new Department name ?",
      }
    ]).then(function (department) {
      let result = department.department_name;
      DB.addDepartment(result);
      console.log(
        `The Department : ${result} has been added to the employee tracker`
      );
      start();
    });
  };


  const addRole = async () => {
    await prompt([
      {
        name: "Roles",
        type: "list",
        choices: async () => {
          let results = await DB.employeeRoles();
          var choiceArray = [];
          for (var i = 0; i < results.length; i++) {
            choiceArray.push(
              `${results[i].title}`
            );
          }
          console.log("which Role do you need to update ?");
          return choiceArray;
        },
      },
    ]).then(function (role) {
      console.log(role);
      // let roles = parseInt(employee.role.split(" ")[0]);
      console.log(typeof role + role + "<<<-------");
      start();
    });
  };

  const addEmployee = async () => {
    await prompt([
      {
        name: "first_name",
        type: "input",
        message: "What is the First Name of the employee ?",
      },
      {
        name: "last_name",
        type: "input",
        message: "What is the Last Name of the employee ?",
      },
      {
        name: "role_id",
        type: "list",
        choices: async () => {
          let results = await DB.employeeRoles();
          var choiceArray = [];
          for (var i = 0; i < results.length; i++) {
            choiceArray.push(
              `${results[i].id} ${results[i].title}`
            );
          }
          console.log("which Role Will the Employee Fill ?");
          return choiceArray;
        }
      },
      {
        name: "Managers",
        type: "list",
        choices: async () => {
          let results = await DB.getManager();
          var choiceArray = [];
          for (var i = 0; i < results.length; i++) {
            choiceArray.push(
              `${results[i].manager_id} ${results[i].first_name}`
            );
          }
          console.log("which Manager Will Be assigned to the employee ?");
          return choiceArray;
        }
      }
    ]).then(function (employee) {
 console.log(employee + "<<<<<<<<<<<<<<------->>>>>>>>>>");
      DB.addEmployee(employee);
      console.log(
        `The employee ${employee.first_name} ${employee.last_name} has been added as ${employee.role_id} managed by ${employee.Managers}`
      );
      start();
    });
  };

  const deleteEmployee = async () => {
    await prompt([
      {name: "id",
      type: "list",
      choices: async () => {
        let results = await DB.findAllEmployees();
        var choiceArray = [];
        for (var i = 0; i < results.length; i++) {
          choiceArray.push(
            `${results[i].id} ${results[i].first_name} ${results[i].last_name}`
          );
        }
        console.log("which Employee do we delete  ?");
        return choiceArray;
       } },
    ]).then(function (employee) {
      DB.deleteEmployee(employee);
      // console.log(
      //   `The employee ${employee.first_name} ${employee.last_name} has been Deleted!`
      // );
      start();
    });
  };

  const  updateEmployeeInfo = async (employee_id) =>{
    await prompt([
      {
        name: "roles",
        type: "list",
        choices: async () => {
          let results = await DB.employeeRoles();
          var choiceArray = [];
          for (var i = 0; i < results.length; i++) {
            choiceArray.push(
              `${results[i].title}`
            );
          }
          console.log("which Role do you need to update ?");
          return choiceArray;
        },
      },
    ]).then(function (role) {
      console.log(role);
      // let roles = parseInt(employee.role.split(" ")[0]);
      console.log(typeof role + role + "<<<-------");
 
      start();
    });
  }

  const updateEmployee = async () => {
    await prompt([
     { name: "Employee",
        type: "list",
        choices: async () => {
          let results = await DB.findAllEmployees();
          var choiceArray = [];
          for (var i = 0; i < results.length; i++) {
            choiceArray.push(
              `${results[i].id} : ${results[i].first_name} ${results[i].last_name}`
            );
          }
          console.log("Which Employee do you wish to update ?");
          return choiceArray;
        }},
          {
        name: "role_id",
        type: "list",
        choices: async () => {
          let results = await DB.employeeRoles();
          var choiceArray = [];
          for (var i = 0; i < results.length; i++) {
            choiceArray.push(
              `${results[i].id} ${results[i].title}`
            );
          }
          console.log("What ROLE will we update the Employee too ?");
          return choiceArray;
        }
      },
      {
        name: "Managers",
        type: "list",
        choices: async () => {
          let results = await DB.getManager();
          var choiceArray = [];
          for (var i = 0; i < results.length; i++) {
            choiceArray.push(
              `${results[i].id} ${results[i].first_name}`
            );
          }
          console.log("which Manager Will Be assigned to the employee ?");
          return choiceArray;
        }
      }
    ]).then(function (employee) {
 console.log(employee + "<<<<<<<<<<<<<<------->>>>>>>>>>");
      DB.updateEmployee(employee);
      console.log(
        `The employee ${employee.first_name} ${employee.last_name} has been added as ${employee.role_id} managed by ${employee.Managers}`
      );
      start();
    });
  };

  switch (choice) {
    case "VIEW_EMPLOYEES":
      return viewEmployee();
      break;
    case "VIEW_ROLES":
      return viewEmployeeRoles();
      break;
      case "ADD_ROLE":
        return addRole();
        break;
    case "VIEW_DEPARTMENTS":
      return viewDepartments();
      break;
    case "ADD_DEPARTMENT":
      return addDepartments();
      break;
    case "ADD_EMPLOYEE":
      return addEmployee();
      break;
    case "DELETE_EMPLOYEE":
      return deleteEmployee();
      break;
    case "UPDATE_EMPLOYEE":
      return updateEmployee();
      break;
    default:
      break;
  }
}

start();
