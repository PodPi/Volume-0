var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // define the LED on pin #3
  //   (4th pin from the bottom)
  var led = new five.Led(3);

  // blink the LED with 1000 millisecond
  led.blink(1000);

});
