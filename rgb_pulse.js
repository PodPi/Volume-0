var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {

  var green = new five.Led(9);
  var red   = new five.Led(10);
  var blue  = new five.Led(11);

  red.pulse(6000);
  green.pulse(7000);
  blue.pulse(8000);

});
