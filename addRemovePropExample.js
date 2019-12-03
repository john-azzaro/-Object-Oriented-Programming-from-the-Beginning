"use strict";

const superCar = {
  make: "Lamborghini",
  model: "Reventon"
};

console.log(superCar);                  // { make: 'Lamborghini', model: 'Reventon' }

// Add property using dot-notation:
superCar.year = { year: 2015 };
console.log(superCar);                  // { make: 'Lamborghini', model: 'Reventon', year: { year: 2015 } }

// Add property using bracket notation:
superCar['year'] = { year: 2012 };
console.log(superCar);                 // { make: 'Lamborghini', model: 'Reventon', year: { year: 2012 } }

// Delete property using "delete" operator:
delete superCar.model;
console.log(superCar);                 // { make: 'Lamborghini', year: { year: 2012 } }
