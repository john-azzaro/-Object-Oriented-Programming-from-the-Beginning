"use strict";

function Car(make, model) {
  this.make = make;
  this.model = model;
  this.startEngine = function() {
    console.log("vrooom vrooom");
  };
}

const coupe = new Car("porsche", 911);

console.log(coupe.make);

for (let key in coupe) {
  return [key];
}
