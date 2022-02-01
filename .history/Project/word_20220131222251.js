const mysql = require('mysql');

var dictionary = function(word) {

  

    var sql = 'SELECT * FROM entries WHERE word = ' + mysql.escape(word);
    con.query( sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });

}

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