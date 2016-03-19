let mongoose = require('mongoose');

let QuoteSchema = mongoose.Schema({
  quote: { type: String, required: true, index: { unique: true } },
  context: { type: String },
  madeAt: { type: Date, default: Date.now }
});

let Quote = mongoose.model('Quote', QuoteSchema);

module.exports = Quote;
