const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const url = require('url');
var mysql = require('mysql');
const con = require('../Project/word');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/look', function(req, res) {
    console.log(typeof(req.body.word));
    var sql = 'SELECT * FROM entries WHERE word = ' + mysql.escape(req.body.word);
    con.query( sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res,
    });
})


app.listen(8080, () => console.log('Server is running.....'));

