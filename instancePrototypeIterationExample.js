"use strict";

function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.ignition = function() {
  console.log("vrooom");
};

const germanCar = new Car("Porsche", "911 Carrera");
const italianCar = new Car("Ferrari", "458 italia");

console.log(germanCar.ignition()); // vrooom'
