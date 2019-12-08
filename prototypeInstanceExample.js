"use strict";

// function Car(make, model) {               // before
//   this.make = make;
//   this.model = model;
//   this.ignition = function() {
//     console.log('vrooom');
//   }
// }

function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.ignition = function() {
  console.log('vrooom');
}

const germanCar = new Car('Porsche', '911 Carrera');
const italianCar = new Car('Ferrari', '458 italia');

console.log(germanCar);       // Car { make: 'Porsche', model: '911 Carrera', ignition: [Function] }
console.log(italianCar);      // Car { make: 'Ferrari', model: '458 italia', ignition: [Function] }

console.log(germanCar.ignition());       // vrooom