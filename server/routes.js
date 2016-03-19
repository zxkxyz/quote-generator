'use strict';

let routesApplicator = app => {
  app.get('/', (req, res, next) => {
    res.render('index.ejs', {
      body: "YO WHAT UP FAM"
    });
  });
};

module.exports = routesApplicator;
