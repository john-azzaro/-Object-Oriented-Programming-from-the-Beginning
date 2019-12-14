"use strict";

function mixin(target, ...sources) {  
  Object.assign(target, ...sources);
}

const isWorking = {
  engineRuns: function() {
    console.log('engine is running');
  }
}

const isRegistered = {
  paperWork: function() {
    console.log('paperwork checks out!')
  }
}

function Vehicle() {   
}

mixin(Vehicle.prototype, isWorking, isRegistered);  

const porsche = new Vehicle();    

console.log(porsche);    