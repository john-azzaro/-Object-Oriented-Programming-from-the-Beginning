"use strict";

//

function Car(make) {
  this.make = make;
}

Car.prototype.ignition = function() {
  console.log("vroooom");
};

const sportsCar = new Car('Porsche');

console.log(sportsCar.ignition);