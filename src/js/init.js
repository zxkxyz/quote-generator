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
    "You'll go back to your desk and nope... you don't gots it...",
    "we're not changing the laws of thermodynamics here",
    "this sprint has nothing to do with anything",
    "im a proramming god, i made fire",
    "no more crazy chris quotes",
    "it's jquery on steroids",
    "i had 4 bodies but 3 souls to pass around",
    "no but... no",
    "reasonably clear as mud?",
    "where are my zombies"
  ];

  var randIndex = Math.floor(Math.random() * quotes.length);
  $("#quote").text('"' + quotes[randIndex] + '"');
  $("#quote-count").text(quotes.length);
  $("#headshot").on('click',
     function() {
        $(this).rotate({ angle:0,animateTo:360,easing: $.easing.easeInOutExpo });
        randIndex = Math.floor(Math.random() * quotes.length);
        $("#quote").text('"' + quotes[randIndex] + '"');
      }
    );
});
