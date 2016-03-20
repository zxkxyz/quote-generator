'use strict';

const utils = require('./db/utils.js');

let routesApplicator = app => {
  app.get('/', (req, res, next) => {
    res.render('index.ejs', {
      body: "YO WHAT UP FAM"
    });
  });

  app.post('/addquote', utils.addQuote);

  app.get('/quote', utils.getQuote);
};

module.exports = routesApplicator;
