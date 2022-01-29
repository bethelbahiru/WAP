const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/calculation.js', function(req, res) {

    // Access the provided 'page' and 'limt' query parameters
    let first = req.query.first;
    let second = req.query.second;
    let operation = req.query.operation;

    cons

});




app.listen(8080, () => {console.log('Server is running.......')});