# PodPi Volume 0 - Getting Started
This repository contains the code for all lessons in PodPi Volume 0.
Download these files if you have issues running your own code.

**Note:** The code in this repository may include additional comments
that JavaScript and Johnny-Five ignore. However, we have added these
comments to provide more details on what the code is doing.
Commenting your code is key task in any sotwware development project.

### Lesson 1 - First LED
`led.js`: First lesson to blink an LED.
Once you get this first lesson to run, experiment firther with it. Here
are some ideas:
- Change the blinking rate with small values and larger values
- Change the port number and move the resistor to the correct port

### Lesson 2 - Three LEDs
`led3.js`: Add two more LEDs from your previous lesson.  Notice the pattern
in how each LED is defined and then refered to in the code.  Keep on 
experimenting, by changing the blinking rate and the ports.

### Lesson 3 - RGB LEDs
`rgb.js`: This lesson is similar to the previous one, except that we are using
a single RGB LED instead of 3 separate LEDs. A RGB LED contains three distinct
LEDs into a single package with a red one, green one and blue one.  By mixing these
three colors, you can make new colors.  Use a piece of white printer paper to diffuse
the light to see additional colors, like yellow, purple or teal.

### Experiment - The pulse() method
`rgb_pulse.js`: Experiment with this additional script. Thepulse method will blink an
LED with a fade in and fade out effect.  Note, that you are restricted on which pins
you can use for this experiment.  Only PWM pins (more on PWM in PodPi Volume 9) can 
be used with the `pulse()` method.  Connect your RGB LED to either pin 3, 5, 6, 9, 10 or 11.

### Lesson 4 - The Button
`button.js`: In this lesson, we are learning how to trap a `press` or `release` event and
turn an LED on or off.
**Note:** you will need to use a 100K resistor for the button and a 330 resistor for the LED.
