/**
 * adc0832 module
 */
var wpi = require('wiring-pi');

var CLK = 17;
var DIO = 27;
var CS  = 22;

module.exports.init = function() {
  wpi.setup('gpio');
};

module.exports.getValue = function() {
  wpi.pinMode(CLK, wpi.OUTPUT);
  wpi.pinMode(DIO, wpi.OUTPUT);
  wpi.pinMode(CS, wpi.OUTPUT);
  
  wpi.digitalWrite(CLK, wpi.LOW);
  wpi.digitalWrite(CS, wpi.LOW);
  
  wpi.digitalWrite(DIO, wpi.HIGH); // Start bit
  wpi.delay(10);
  wpi.digitalWrite(CLK, wpi.HIGH);
  wpi.delay(10);
  wpi.digitalWrite(CLK, wpi.LOW);
  wpi.delay(10);
  
  wpi.digitalWrite(DIO, wpi.HIGH); // SGL
  wpi.digitalWrite(CLK, wpi.HIGH);
  wpi.delay(10);
  wpi.digitalWrite(CLK, wpi.LOW);
  wpi.delay(10);
  
  wpi.digitalWrite(DIO, wpi.LOW); // Choose channel 0
  wpi.digitalWrite(CLK, wpi.HIGH);
  wpi.delay(10);
  wpi.pinMode(DIO, wpi.INPUT);
  wpi.digitalWrite(CLK, wpi.LOW);
  wpi.delay(10);
  
  wpi.digitalWrite(CLK, wpi.HIGH); // Skip a clock
  wpi.delay(10);
  wpi.digitalWrite(CLK, wpi.LOW);
  wpi.delay(10);
  
  var value = 0;
  for (var i=0; i<8; i++) {
    wpi.digitalWrite(CLK, wpi.HIGH);
    var bit = wpi.digitalRead(DIO);
    value = (value << 1) | bit;
    wpi.delay(10);
    wpi.digitalWrite(CLK, wpi.LOW);
    wpi.delay(10);
  }
  
  wpi.digitalWrite(CS, wpi.HIGH);
  return value;
}; // End of getValue()
