const express = require('express');

const app = express();

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());





app.listen(8080, () => {console.log('Server is running.......')});