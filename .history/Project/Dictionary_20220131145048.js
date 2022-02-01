const express = require('express');

const app = express();

app.post('/look', function(res, req) {
    console.log(req.body.word)
})


app.listen(3306, () => console.log('Server is running.....'));

