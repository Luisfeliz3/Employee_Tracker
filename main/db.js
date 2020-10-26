

class DB {

constructor() {
this.connection = connection;
}

findAllEmployees() {
    return this.connection.query(`SELECT * FROM employees`)
}

}


module.exports = new DB(connection);