"use strict";

const car = {
  make: "honda",
  wheels: 4,
  isWorking: true,
  startIgnition: function() {
    console.log("vroom")
  },
  options: {
    airCon: true,
    sportExhaust: true,
    spareTire: false,
  },
  seats: ["driver", "passenger", "rear"]
};


console.log(car.make);                        // honda
console.log(car.wheels);                      // 4
console.log(car.isWorking);                   // true
console.log(car.startIgnition());             // vroom
console.log(car.options);                     // { airCon: true, sportExhaust: true, spareTire: false }
console.log(car.seats);                       // [ 'driver', 'passenger', 'rear' ]