"use strict";

const isWorking = {
  engineRuns: function() {
    console.log('engine is running');
  }
}

const isLegal = {
  paperWork: function() {
    console.log('paperwork checks out!')
  }
}

const hondaAccord = Object.assign({}, isWorking, isLegal);

console.log(hondaAccord);