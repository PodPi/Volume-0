// Load the Johnny-Five Library
var five = require("johnny-five");
var board = new five.Board();

// Connect to the Arduino board and
// wait for it to be ready
board.on("ready", function() {

  // define an LED connected on digital port 2
  var led = new five.Led(2);

  // define a button connected on analog port A0
  var button = new five.Button('A0');

  // execute the function for a 'press' event
  button.on('press', function() {
    // turn the led on
    led.on();
    console.log('The LED is ON');
  });

  // execute the function for a 'press' event
  button.on('release', function() {
    // turn the led off
    led.off();
    console.log('The LED is OFF');
  });

});
