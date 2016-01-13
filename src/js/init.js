$(function() {
  var quotes = [
    "juh-queer-ee",
    "It'll tell me tiddlywinks... if I set it to tiddlywinks.",
    "Your eyes are going to deceive you - you need to turn off your brain.",
    "lexical is a 50 cent word",
    "arr... arr arr... arr arr arr..."",
    "language is important",
    "recursion is not real in some ways",
    "let me pull up our heiristic for determining the future"
  ];

  var randIndex = Math.floor(Math.random() * quotes.length);
  $("#quote").text('"' + quotes[randIndex] + '"');
});
