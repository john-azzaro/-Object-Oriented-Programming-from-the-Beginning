"use strict";

//constructor function
function createCar(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.startIgnition = function() {
    console.log('vrooom vrooom');
  }
}

// create new object via constructor function.
const makePorsche = new createCar('Porsche', '718 GT4', 2019);

// call the new object.
console.log(makePorsche);

