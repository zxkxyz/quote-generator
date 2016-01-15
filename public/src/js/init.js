$(function() {
  window.quotes = [];
  var info;
  $.get('http://127.0.0.1/quotes.txt', function(data) {
    var lines = data.split("\n");

    $.each(lines, function(n, elem) {
       $('#main').append('<div>' + elem + '</div>');
    });
  });
  var previousIndex = 0;
  function generateRandIndex() {
    var randIndex = Math.round(Math.random() * window.quotes.length);
    return randIndex;
  };
  $("#quote").text(window.quotes[generateRandIndex()]);
  $("#quote-count").text(window.quotes.length);
  $("#headshot").on('click',
     function() {
        $(this).rotate({ angle:0,animateTo:360,easing: $.easing.easeInOutExpo });
        randIndex = Math.floor(Math.random() * window.quotes.length);
        $("#quote").text(window.quotes[generateRandIndex()]);
      }
    );
});
