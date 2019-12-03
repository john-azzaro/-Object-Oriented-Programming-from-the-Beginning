"use strict";

const superCar = {
  entry: 'Honda',
  middle: 'Mercedes',
  luxury: 'Rolls Royce'
};



                                     // Basic example that loops through all the properties of an object:
for (let key in superCar) {
                                     // To get the keys of the object:
  console.log(key);                  // entry middle luxry
  
                                     // To get the values of the object:
  console.log(superCar[key]);        // Mercedes luxury Rolls Royce
  
                                     // To get the key and values of the object:
  console.log(key, superCar[key]);   // entry Honda middle Mercedes luxury Rolls Royce
}





                                     // IF you want to loop through an object BUT omit a key if it contains a feature (i.e. the string "luxury")
for (let key in superCar) {
  if (key !== 'luxury') {
    console.log(key)                 // entry middle
  }
}




                                   // Variation of the example above... if you want to loop through an object and find instance that have the key "luxury" 
                                   // and then print out the properties of that match that key:P
for (let key in superCar) {
  if (key === 'luxury') {
    console.log(superCar[key]);    // Rolls Royce
  }
}





                                                      // IF you want to loop through an object and filter out all the methods
for (let key in superCar) {
  if (typeof superCar[key] !== 'function') {
    console.log(key, superCar[key]);                  // entry Honda  middle Mercedes  luxury Rolls Royce
  }
}



function iterateKeysOnly(obj) {
  const keys = Object.keys(obj);                 // If you want to use object.keys, you can iterate the keys of the object into an array.
  console.log(keys);
}
iterateKeysOnly(superCar);                                            // [ 'entry', 'middle', 'luxury' ]





function iterate(obj) {
  const keys = Object.keys(superCar).forEach(function(key) {
    console.log(`the key is ${key} and the value is ${obj[key]}`);
  });
  console.log(keys);
}

iterate2(superCar);                 // the key is entry and the value is Honda
                                    // the key is middle and the value is Mercedes
                                    // the key is luxury and the value is Rolls Royce