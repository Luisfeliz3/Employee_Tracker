const mysql = require("mysql");
const util = require("utils");

const connection = mysql.createConnection({
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

connection.query = util.promisify(connection.query);



module.exports = connection;