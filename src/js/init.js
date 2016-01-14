$(function() {
  var quotes = [
    "juh-queer-ee",
    "It'll tell me tiddlywinks... if I set it to tiddlywinks.",
    "Your eyes are going to deceive you - you need to turn off your brain."
  ];

  var randIndex = Math.floor(Math.random() * quotes.length);
  $("#quote").text('"' + quotes[randIndex] + '"');
  $("#quote-count").text(quotes.length);
});