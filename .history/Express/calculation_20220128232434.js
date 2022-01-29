const express = require('express');
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const app = express();





app.listen(8080, () => {console.log('Server is running.......')});