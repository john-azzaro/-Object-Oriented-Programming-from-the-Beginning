"use strict";

function Car(make, model) {
  let isAutomobile = true;
  this.isAutomobile = function() {
    return isAutomobile
  }
    
  this.make = make;
  this.model = model;
  this.startEngine = function() {
    console.log("vrooom vrooom");
  };
  
  Object.defineProperties(this, 'isAutomobile', {   // first argument in the method is the object you want a new property to (i.e. this), second is the name of the property, third is an object with the key of "get" and the value iss a function.
    get: function() {                               // and when you call the coupe.isAutomobile, it will return whatever is in this function... in this case, it returns isAutomobile
      return isAutomobile;
    }
  });            
}

const coupe = new Car("porsche", 911);

// console.log(coupe.isAutomobile());

