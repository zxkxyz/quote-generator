$(function() {

  // $.ajax({
  //   url: 'http://127.0.0.1:1337/quotes.txt'
  // }).done(function(content) {

  //   // normalize the line breaks, then split into lines
  //   lines = content.replace(/\r\n|\r/g, '\n').trim().split('\n');

  //   // only set up the click handler if there were lines found
  //   if (lines && lines.length) {
  //     $('#showLine').on('click', function () {
  //       // loop to prevent repeating the last random number
  //       while (randomNumber === lastRandomNumber) {
  //         randomNumber = parseInt(Math.random() * lines.length);
  //         // check to prevent infinite loop
  //         if (lines.length === 1) { break; }
  //       }
  //       // keep track of the last random number
  //       lastRandomNumber = randomNumber;

  //       // show the corresponding line
  //       $('#trivia').text(lines[randomNumber]);
  //     });
  //   }
  // });

  $.get('http://127.0.0.1:1337/quotes.txt', function(data) {
    var lines = data.split("\n");
    $.each(lines, function(n, elem) {
       $('#quotes').append('<div>' + elem + '</div>');
    });
  })
});