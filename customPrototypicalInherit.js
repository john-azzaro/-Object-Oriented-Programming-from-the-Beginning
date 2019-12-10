"use strict";

function Motorcycle(make) {
  this.make = make;
  this.wheels = 2;
}

function Car(make) {
  this.make = make;
  this.wheels = 4;
}

Car.prototype.ignition = function() {
  console.log("vroooom");
};

const sportsCar = new Car('Porsche');

console.log(sportsCar.ignition);