const mysql = require('mysql');

var dictionary = function(word) {

  

    var sql = 'SELECT * FROM entries WHERE word = ' + mysql.escape(word);
    con.query( sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });

}

module.exports = dictionary;