const express = require('express');


const app = express();

app.set("view engine","jade");


app.get('/', function (req, res) {
res.render('sample’); 
});




app.listen(8080, () => {console.log('Server is runinng.....')});