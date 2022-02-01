const mysql = require('mysql');

var dictionary = function(word) {

    var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root"
      });
    
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });



}