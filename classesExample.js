"use strict";

// function Car(make) {
//   this.make = make;
//   this.ignition = function() {
//     console.log('vrooom');
//   }
// }

class Car {    
  constructor(make) {
    this.make = make; 
  }

  ignition() {
    console.log('vrooom');
  }
}

const sportsCar = new Car('Porsche');

sportsCar.ignition();


