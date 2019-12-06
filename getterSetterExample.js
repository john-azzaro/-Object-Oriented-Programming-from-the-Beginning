"use strict";

function Car(make, model) {
  let isAutomobile = true;

  this.make = make;
  this.model = model;
  // this.isAutomobile = function() {                  // method that returns a private member.
  //   return isAutomobile
  // } 
   
  Object.defineProperty(this, 'isAutomobile', {  
    get: function() {                                  // getter
      return isAutomobile;  
    },
    set: function(value) {                             // setter
      isAutomobile = value;
    }
  });            
}

const coupe = new Car("porsche", 911);


console.log(coupe.isAutomobile);

coupe.isAutomobile = false;

console.log(coupe.isAutomobile);










