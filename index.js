
const mysql = require("mysql");
const { prompt } = require("inquirer");
const DB = require('./main/db');


async function start() {
 
   const { choice } = await prompt([{
      name: "choice",
      type: "list", 
      message: "What would you like to do ?",
      choices:[{
        name : "View all employees ?",
        value : "VIEW_EMPLOYEES"
      },
      {
        name : "View Roles",
        value : "VIEW_ROLE"
      },
      {
        name : "View all Departments ?",
        value : "VIEW_DEPARTMENTS"
      }
    ]
    }]);

    switch (choice) {
      case "VIEW_EMPLOYEES":
      console.log(`THIS IS THE CHOICE ${choice}`);

        return viewEmployee();
        break;
      case "VIEW_ROLE":
         return viewEmployeeRoles();
        break;
      case "VIEW_ROLE":
        return viewEmployeeRoles();
        break;
      default:
        break;
    }
    

    async function viewEmployee()  {
      const employees = await DB.findAllEmployees();
        console.log('/n');
        console.table(employees);
    }

    async function viewEmployeeRoles()  {
      const roles = await DB.allEmployeeRoles();
        console.log('/n');
        console.table(roles);
    }
}

start();
// const employees =   DB.findAllEmployees();
// console.log('/n');
// console.table(employees);
// const  viewEmployee = async () =>{
// const employees = db.findAllEmployees();
//     console.log('/n');
//     console.table(employees);
//     start();
// }


