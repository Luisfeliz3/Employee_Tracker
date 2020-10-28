
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
        value : "VIEW_ROLES"
      },
      {
        name : "View all Departments ?",
        value : "VIEW_DEPARTMENTS"
      },
      {
        name : "Add an Employees",
        value : "ADD_EMPLOYEE"
      }
    ]
    }]);


    const viewEmployee = async ()  =>  {
      const employees = await DB.findAllEmployees();
        console.log('/n');
        console.table(employees);
        start();
    }

   const viewEmployeeRoles =  async () => {
      const roles = await DB.employeeRoles();
      console.log('/n');
      console.table(roles);
      start();

    }

    const viewDepartments =  async () => {
      const department = await DB.viewDepartments();
      console.log('/n');
      console.table(department);
      start();
    }



    const addEmployee = async () => {
       await prompt([{
        name: "firstName",
        type: "input",
        message: "What is the First Name of the employee ?"
      },
      {
        name: "lastName",
        type: "input",
        message: "What is the First Name of the employee ?"
      },
      {
        name: "role_id",
        type: "input",
        message: "What is the First Name of the employee ?"
      },
      {
        name: "manager_id",
        type: "input",
        message: "What is the First Name of the employee ?"
      }]).then(function(answer){
    const roles =  DB.addEmployee(answer);
    console.log(`The employee ${answer.firstName} ${answer.lastName} has been added as ${answer.role_id} managed by ${answer.manager_id}`);
    start();
      })
    }

  
    switch (choice) {
      case "VIEW_EMPLOYEES":
        return viewEmployee();
        break;
      case "VIEW_ROLES":
        return viewEmployeeRoles();
        break;
      case "VIEW_DEPARTMENTS":
        return viewDepartments();
        break;
        case "ADD_EMPLOYEE":
          return addEmployee();
          break;
      default:
        break;
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


