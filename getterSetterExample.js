"use strict";

function Car(make, model) {
  let isAutomobile = true;

  this.make = make;
  this.model = model;
  this.isAutomobile = function() {
    return isAutomobile
  } 
                                                 // Object.defineProperty is used to define getters or setters
  Object.defineProperty(this, 'isAutomobile', {      // first argument in the method is the object you want a new property to (i.e. this), second is the name of the READ-ONLY property, third is an object with the key of "get" and the value iss a function.
    get: function() {                               // and when you call the coupe.isAutomobile, it will return whatever is in this function... in this case, it returns isAutomobile.
      return isAutomobile;                          // "isAutomobile" is part of the closure of the function
    },
    set: function(value) {                          // if you want to set the value of this function from outside the object, 
      isAutomobile = value;
    }
  });            
}

const coupe = new Car("porsche", 911);


console.log(coupe.isAutomobile);

coupe.isAutomobile = false;

console.log(coupe.isAutomobile);










