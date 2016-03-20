const Quote = require('./models/quote.js');
const Quotes = require('./collections/quotes.js');

let getQuote = (req, res) => {
  Quotes.count({}, (err, result) => {
    if(err) {
      res.send(500, {status: "Error", message: "Error counting "});
    } else {
      res.send(200, {status: "Successful", message: result});
    }
  });
};

let addQuote = (req, res) => {
  let quote = req.body.quote;

  if(quote.length <= 0) {
    console.log("Quote is too short.");
    res.send(403, {status: "Error", message: "Message must not be 0 characters in length!"});
  }

  if(quote.length >= 64) {
    console.log("Quote is too long.");
    res.send(403, {status: "Error", message: "Message must be under 64 characters in length!"});
  } else {

    new Quote({quote}).fetch().then(function(found) {
      if(found) {
        console.log("That quote already exists.");
        res.send(403, {status: "Error", message: "That quote already exists!"});
      } else {
        var quote = new Quote({quote});
        quote.save().then((newQuote) => {
          Quotes.add(newQuote);
          res.send(200, {status: "Added", message: "Quote added!"});
        });
      }
    });
  }
};

module.exports = {
  getQuote: getQuote,
  addQuote: addQuote
};
