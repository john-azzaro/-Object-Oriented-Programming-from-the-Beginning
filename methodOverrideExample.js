"use strict";

function extend(Child, Parent) {                           // extend function
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Automobile() {                                     // constructor
}

Automobile.prototype.ignition = function() {                // method on Automobile prototype
  console.log('vrooom')
}

function Car() {                                            // Car constructor
}

extend(Car, Automobile);                                    // Car inherits from Automobile