const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/cla', async function(req, res) {

    // Access the provided 'page' and 'limt' query parameters
    let page = req.query.page;
    let limit = req.query.limit;

    let articles = await Article.findAll().paginate({page: page, limit: limit}).exec();

    // Return the articles to the rendering engine
    res.render('index', {
        articles: articles
    });
});




app.listen(8080, () => {console.log('Server is running.......')});