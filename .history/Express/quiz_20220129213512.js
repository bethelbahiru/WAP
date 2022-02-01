const express = require('express');
const path = require('path');

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine","pug");

let quizNum = 0;
let score;
let questions = [
  "3, 1, 4, 1, 5",
  "1, 1, 2, 3, 5",
  "1, 4, 9, 16, 25",
  "2, 3, 5, 7, 11",
  "1, 2, 4, 8, 16",
];
let answers = [9, 8, 36, 13, 32];
let i;


app.get('/', function (req, res) {
    res.render('quiz', {
        question: questions[0],
        score,
        quiz
    });
});

app.get('/calculate', function (req, res) {
    res.render('quiz');
});




app.listen(8080, () => {console.log('Server is runinng.....')});