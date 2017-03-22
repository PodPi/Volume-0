var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {

  var green = new five.Led(3);
  var red   = new five.Led(4);
  var blue  = new five.Led(5);

  red.blink(1555);
  green.blink(2321);
  blue.blink(1111);

});
