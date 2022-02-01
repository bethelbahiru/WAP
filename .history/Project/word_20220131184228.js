const mysql = require('mysql');

var dictionary = function(word) {

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root"
      });
}

module.exports = dictionary;