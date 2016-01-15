var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var routes = require('./routes/index');

app.use('/', routes);

app.listen(1337, function () {
  console.log('Chris Quotes listening on port 1337!');
});

module.exports = app;