let mysql = require("mysql2");
let config = require("./config.js");
let connection = mysql.createConnection(config);

function insertContract(contract) {
  let sql = `INSERT INTO contracts(contract)
      VALUES(?)`;

  let data = [contract];

  connection.query(sql, data);

  //connection.end();
}

module.exports = { insertContract };
