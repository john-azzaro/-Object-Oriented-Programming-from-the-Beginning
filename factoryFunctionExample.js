"use strict";

// factory function
function createCar(make, model, year) {
  return {
    make: make,
    model: model,
    year: year,
    isWorking: true,
    startIgnition: function() {
      console.log('vrooom vrooom');
    }
  };
}

// create a new object using factory function
const makeFerrari = createCar('Ferrari', '458 spider', 2015);
const makePorsche = createCar('Porsche', '718 GT4', 2019);

// call new object
console.log(makeFerrari);
console.log(makeFerrari.startIgnition());