"use strict";

function Automobile() {                            // automobile constructor (the new parent constructor)        
}

Automobile.prototype.ignition = function() {       // ignititon attributed to the parent object
  console.log('vroooom');
}

function Motorcycle(make) {                        // "Motorcycle" constructor function.
  this.make = make;
  this.wheels = 2;
}

function Car(make) {                               // "Car" constructor function. 
  this.make = make;
  this.wheels = 4;
}

Car.prototype = Object.create(Automobile.prototype);             // set the prototype of Car to the new parent prototype
Motorcycle.prototype = Object.create(Automobile.prototype);      // set the prototype of Motorcycle to the new parent prototype


const sportsCar = new Car('Porsche');              // new "Porsche" car object.
const sportsBike = new Motorcycle('Ducati');       // new "Ducati" motorcycle object.

console.log(sportsCar);                            // Car { make: 'Porsche', wheels: 4 }
console.log(sportsBike);                           // Motorcycle { make: 'Ducati', wheels: 2 }



