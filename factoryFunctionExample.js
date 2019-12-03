"use strict";

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

const makeFerrari = createCar('Ferrari', '458 spider', 2015);
const makePorsche = createCar('Porsche', '718 GT4', 2019);




console.log(makeFerrari);


console.log(makeFerrari.startIgnition());