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


console.log(Object.keys(germanCar));            // [ 'make', 'model' ]  Note that this does NOT return instance methods.

for (let keys in germanCar) {
  console.log(keys);                           // make
}                                              // model
                                               // ignition   <= using a for-in loop will return an instance method

