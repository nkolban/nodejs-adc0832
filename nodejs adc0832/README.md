
# nodejs adc0832
The adc0832 is an Integrated Circuit (IC) that performs analog to digital conversion.  This module
provides an encapsulation of those capabilities for the Raspberry Pi environment.


## Usage
In order to use the module, we must require `adc0832`.  For example:

```
var adc0832 = require("adc0832");

```

We must also initialize the module by explicitly calling init:

```
adc0832.init();
```

To retrieve a value from the IC, we can call `adc0832.getValue()`.  Since the adc0832 is an 8 bit adc coonverter, the
value returned will be between 0 and 255.

By default, the pin usage is:

|Function|Pin|
|--------|---|
|CLK     |17 |
|DIO     |27 |
|CS      |22 |


## Developing



### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
