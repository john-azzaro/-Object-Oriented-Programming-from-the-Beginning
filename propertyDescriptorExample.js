"use strict";

let car = {make: 'Porsche'};

Object.defineProperty(car, 'make', {
  writable: false
})

car.make = 'Ferrari';

console.log(car);                         // { make: 'Porsche' }