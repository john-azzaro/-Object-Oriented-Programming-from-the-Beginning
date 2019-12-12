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

Automobile.prototype.ignition = function() { 
  console.log('vrooom goes the car')
}

const sportsCar = new Car(); 

console.log(sportsCar.ignition());






// function ElectricCar() {   
// }

// extend(ElectricCar, Automobile); 

// ElectricCar.prototype.ignition = function() {  
//   console.log('beep boop beep')
// }

// const electricCar = new Car(); 

 


