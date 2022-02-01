var dictionary = function(word) {

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root"
      });
    
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });

    var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);

}