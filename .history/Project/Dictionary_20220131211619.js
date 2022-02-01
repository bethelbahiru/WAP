const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const url = require('url');
var mysql = require('mysql');
const word = require('../Project/word');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/look', function(req, res) {
    console.log(typeof(req.body.word));
    word(req.body.word);
})


app.listen(8080, () => console.log('Server is running.....'));

