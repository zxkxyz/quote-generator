$(function() {
  var quotes = [
    "juh-queer-ee",
    "It'll tell me tiddlywinks... if I set it to tiddlywinks.",
    "Your eyes are going to deceive you - you need to turn off your brain.",
    "lexical is a 50 cent word",
    "arr... arr arr... arr arr arr...",
    "language is important",
    "recursion is not real in some ways",
    "let me pull up our heuristic for determining the future",
    "The minotaur could be anywhere.",
    "You're gonna think I gots it, I gots it, I gots it!",
    "You'll go back to your desk and nope... you don't gots it..."
  ];

  var randIndex = Math.floor(Math.random() * quotes.length);
  $("#quote").text('"' + quotes[randIndex] + '"');
  $("#quote-count").text(quotes.length);
});
