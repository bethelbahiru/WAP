const express = require('express');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/look', function(res, req) {
    console.log(req.body.word);
})


app.listen(3306, () => console.log('Server is running.....'));

