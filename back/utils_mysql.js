let mysql = require("mysql2");
let config = require("./config.js");
let connection = mysql.createConnection(config);

function insertToMySql(contract, symbol, purchase_rate, quantity) {
  let sql = `INSERT INTO contracts_stocks(contract,symbol,purchase_rate,quantity)
    VALUES(?,?,?,?)`;

  let data = [contract, symbol, purchase_rate, quantity];

  // execute the insert statment
  connection.query(sql, data);

 // connection.end();
}

function updateQuantityMySql(quantity, contract, symbol) {
  let sql = `UPDATE contracts_stocks
           SET quantity = quantity + ? 
           WHERE contract = ?
            AND symbol= ?`;
  let data = [quantity, contract, symbol];

  connection.query(sql, data, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log("Rows affected:", results.affectedRows);
  });
}

function deleteContractfromMySql(contract, symbol) {
  let sql = `DELETE FROM contracts_stocks WHERE contract = ? AND symbol= ?`;

  let data = [contract, symbol];

  connection.query(sql, data, (error, results, fields) => {
    if (error) return console.error(error.message);

    console.log("Deleted Row(s):", results.affectedRows);
  });
}

function insertContract(contract) {
  let sql = `INSERT INTO contracts(contract)
    VALUES(?)`;

  let data = [contract];

  connection.query(sql, data);

 // connection.end();
}

function getAllContracts() {
  let sql = `SELECT * FROM contracts`;
  

  connection.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(results);
    
  });

 // connection.end();
}

function checkIfContractHasStocksSymbol(contract,symbol){
    let sql = `SELECT EXISTS(SELECT * from contracts_stocks WHERE contract=? AND symbol= ?)`;

    let data = [contract,symbol];


}
// async function (){

// }

module.exports = {
  insertToMySql,
  updateQuantityMySql,
  deleteContractfromMySql,
  insertContract,
  getAllContracts
};
