const mysql = require('mysql');

var dictionary = function(word) {

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


    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root"
      });
}

module.exports = dictionary;