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

console.log(engine());                          // error -- Cannot access outside the limits of the object which is the correct implementation
                                                //          of abstraction.
