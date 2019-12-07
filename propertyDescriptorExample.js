// "use strict";
// let car = { make: 'Honda' };

// // for (let key in car) {
// //   console.log(key)
// // }



// // car.make = 'acura';

// console.log(car);



// Object.defineProperty(car, 'make', {
//   writable: false
// })

let car = {make: 'Porsche'};

Object.defineProperty(car, 'make', {
  writable: false
})

car.make = 'Ferrari';

console.log(car);