const mysql = require("mysql");
const util = require('util');

if (process.env.JAWSDB_URL){
  connection= mysql.createConnection(process.env.JAWSDB_URL);

} else {
  connection = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "12345678",
    database: "tdtbxto38rzxt9ua"

  })
}
connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;