const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const url = require('url');
var mysql = require('mysql');
const word = require('../Project/word');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Database Connection*/
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"
  });

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


app.post('/look', function(req, res) {
    console.log(req.body.word);
  //  word(req.body.word)
    con.query("SELECT * FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });


})


app.listen(8080, () => console.log('Server is running.....'));

