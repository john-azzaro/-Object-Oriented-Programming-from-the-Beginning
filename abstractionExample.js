"use strict";

const Car = function(carName, carSound) {
  const engine = function() {
    console.log(carSound);
  }
  return {
    carName, engine
  };
}

const sportsCar = Car('Ferrari', 'vrooom');      // { carName: 'Ferrari', engine: [Function: engine] }

console.log(sportsCar.engine());                 // vrooom
