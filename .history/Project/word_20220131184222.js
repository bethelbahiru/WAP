const mysql = require('mysql');

var dictionary = function(word) {
    console.log(word);
    var sql = 'SELECT * FROM entries WHERE word = ' + mysql.escape(word);

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root"
      });
}

module.exports = dictionary;