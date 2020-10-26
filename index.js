
// const inquirer = require("inquirer");


// var connection = mysql.createConnection({
//   host: "localhost",

//   // Your port; if not 3306
//   port: 3306,

//   // Your username
//   user: "root",

//   // Your password
//   password: "12345678",
//   database: "top_songsDB"
// });


const mysql = require("mysql");
const inquirer = require("inquirer");
var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "12345678",
  database: "top_songsDB",
});
connection.connect(function (err) {
  if (err) throw err;
  //   connection.end();
});
// Prompt the user, to see what he/she wants to do
/*
    1. All data for songs by a specific artist
    2. Artists who appear more than once in top5000
    3. Data contained within a range 
    4. look for a specific song in top 5000
*/

async function start() {
 
   const {choice} = await prompt([{
      name: "action",
      type: "list",
      message: "What would you like to do ?",
      choices:[{
        name : "View all employees ?",
        value : "VIEW_EMPLOYEES"
      },
      {
        name : "Add Role",
        value : "ADD_ROLE"
      },
      {
        name : "View all Departments ?",
        value : "VIEW_DEPARTMENTS"
      }
    ]
    }]);

    switch (choice) {
      case "VIEW_EMPLOYEES":
        return viewEmployee();
        break;
      case "VIEW_EMPLOYEES":
        return viewEmployee();
        break;
      case "VIEW_EMPLOYEES":
        return viewEmployee();
        break;
      default:
        break;
    }
    
}

start();

