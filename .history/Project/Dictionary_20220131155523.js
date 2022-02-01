const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const url = require('url');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/look', function(req, res) {
    res.end('');
})


app.listen(8080, () => console.log('Server is running.....'));

