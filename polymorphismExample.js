"use strict";

function extend(Child, Parent) {   
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Automobile() {  
}

Automobile.prototype.ignition = function() { 
  console.log('vrooom')
}

function Car() { 
}

extend(Car, Automobile); 

Car.prototype.ignition = function() { 
  console.log('vrooom goes the car')
}

function ElectricCar() {
}

extend(ElectricCar, Automobile);

ElectricCar.prototype.ignition = function() {
  console.log('beep boop beep');
}


const sportsCar = new Car(); 
const tesla = new ElectricCar();


// console.log(sportsCar.ignition());          // vrooom goes the car
// console.log(tesla.ignition());              // beep boop beep



// To iterate over an array of new objects

const carCollection = [
  new Car(),
  new ElectricCar()
]

for (let car of carCollection) {
    car.ignition();
}




 


