const mysql = require('mysql');

  /* Database Connection*/
var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: 'entries'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = dictionary;