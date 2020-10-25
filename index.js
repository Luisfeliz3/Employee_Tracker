var mysql = require("mysql");
const inquirer = require("inquirer");


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "12345678",
  database: "top_songsDB"
});


const mysql = require("mysql");
const inquirer = require("inquirer");
var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "password",
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
function start() {}
function getSongsByArtist() {
  inquirer
    .prompt({
      name: "artist",
      type: "input",
      message: "Enter an artist",
    })
    .then((result) => {
      const { artist } = result;
      connection.query(
        "SELECT * FROM top5000 WHERE artist = ?",
        [artist],
        function (err, result) {
          if (err) throw err;
          console.table(result);
          start();
        }
      );
    })
    .catch((err) => {
      console.log(err);
    });
}

start();