const express = require('express');


const app = express();


app.set("views", path.join(__dirname, "views"));
app.set("view engine","jade");


app.get('/', function (req, res) {


});




app.listen(8080, () => {console.log('Server is runinng.....')});