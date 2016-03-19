'use strict';

const express = require('express');
const routes = require('./routes.js');
const bodyParser = require('body-parser');
const path = require('path');

let port = process.env.PORT || 3000;
let app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

routes(app);

app.listen(port, function() {
  console.log(`Server started on port ${port}.`);
});
