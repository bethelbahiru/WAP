const mysql = require('mysql');

var dictionary = function(word) {
    c
    var sql = 'SELECT * FROM entries WHERE word = ' + mysql.escape(word);

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root"
      });
    
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
      });
}

module.exports = dictionary;