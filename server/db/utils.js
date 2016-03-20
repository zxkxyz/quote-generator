'use strict';

const Quote = require('./models/quote.js');
const db = require('./db.js');
// const Quotes = require('./collections/quotes.js');

let getQuote = (req, res) => {
  Quote.find({}).then((found) => {
    console.log("Found:", found);
    res.status(200).send(found);
  });
};

let addQuote = (req, res) => {
  let quoteText = req.body.quote;
  console.log("req.body.quote:", quoteText);
  if(quoteText.length <= 0) {
    console.log("Quote is too short.");
    res.status(403).send({status: "Error", message: "Message must not be 0 characters in length!"});
  }

  if(quoteText.length >= 64) {
    console.log("Quote is too long.");
    res.status(403).send({status: "Error", message: "Message must be under 64 characters in length!"});
  } else {

    Quote.find({quote: quoteText}).then((found) => {
      console.log("Found:", found);
      if(found.length) {
        console.log("That quote already exists.");
        res.status(403).send({status: "Error", message: "That quote already exists!"});
      } else {
        let quote = new Quote({quote: quoteText});
        console.log("Made quote:", quote);
        quote.save().then((newQuote) => {
          console.log("Quote added.");
          res.status(200).send({status: "Added", message: "Quote added!"});
        });
      }
    });
  }
};

module.exports = {
  getQuote: getQuote,
  addQuote: addQuote
};
