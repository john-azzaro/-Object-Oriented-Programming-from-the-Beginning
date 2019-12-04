# Object Oriented Programming Study

<br>

* [What is the Object Oriented Programming Study](#What-is-the-Object-Oriented-Programming-Study)
* [What is Object Oriented Programming?](#What-is-Object-Oriented-Programming)
* [What is an object?](#What-is-an-object)
* [How do you add or remove properties to an object?](#How-do-you-add-or-remove-properties-to-an-object)
* [How do you enumerate over the properties of an object?](#How-do-you-enumerate-over-the-properties-of-an-object)
* [What are the four core concepts of Object Oriented Programming?](#What-are-the-four-core-concepts-of-Object-Oriented-Programming)
* [What is a factory object?](#What-is-a-factory-object)
* [What is a constructor function?](#What-is-a-constructor-function)
* [](#)
* [](#)


<br>

## What is the Object Oriented Programming Study?


<br>

## What is Object Oriented Programming?
<dl>
<dd>

**Object oriented programming is is not a language or tool but a programming paradigm that centers around objects rather than functions.** With object-oriented programming (OOP), you combine a group of related variables and functions into a unit. That unit is called an "Object", variables are called "properties", and functions are called "methods". Object oriented programming problems are modelled as a collection of collaborating objects that send messages to each other. Object oriented programming is used in languages such as C#, Java, Ruby, Python, JavaScript, etc. as well frameworks like Anugular as well. 

Before object oriented programming there was something called "procedural programming" where data was stored in a bunch of variables and function that operate on the data, which was very simple and straight forward. But eventually these functions will break and function will have duplicate lines of codes (i.e. spaghetti code). With object-oriented programming (OOP), you combine a group of related variables and functions into a unit... an object.
 
</dd>
</dl>

<br>

## What is an object?
<dl>
<dd>

**Objects are complex data types that bring together properties and elements into a single entity** In addition to allowing us to represent instances of a given model, objects provide an excellent way of organizing code that belongs together as well as avoiding global variables.

#### Objects are persitent
When an object is created, memory is automatically allocated to memory in JavaScript (and we do not need to deallocate memory) as opposed to low level languages like C++ or C, in JavaScript you do not need to allocate or de-allocate memory because the language has something called a *garbage collector* which finds variables or constants that are no longer used and deallocates memory automatically.

#### Objects are collections of key/value pairs
First, lets take a look at a basic **object literal**, which is a comma-seperated list of name value pairs wrapped in curly braces. Here's an example:
```JavaScript
  const objName = {                // Defined variable with a name and assignment operator with curly braces.
    key: "value"                   // Colon seperates key and value within quotes.
  }
  ```

#### Objects properties can contain a number of value types
**Inside the object, you can include values** such as: *strings, numbers, booleans, functions, other objects, or arrays.* In the example below, we have an object literal "car" with a number of key values pairs about that car, including its name, options, etc. 
```JavaScript
  const car = {
    make: "honda",                               // string
    wheels: 4,                                   // number
    isWorking: true,                             // boolean
    startIgnition: function() {                  // "method" or function
      console.log("vroom")
    },
    options: {                                   // object
      airCon: true,
      sportExhaust: true,
      spareTire: false,
    },
    seats: ["driver", "passenger", "rear"]       // array
  };
```

#### Use dot-notation to access members of an object
**To access the members of an object, use dot-notation,** which simply means you chain the property to the object name.
```JavaScript
  car.make                                       // honda
  car.wheels                                     // 4
  car.isWorking                                  // true
  car.startIgnition()                            // vroom
  car.options                                    // { airCon: true, sportExhaust: true, spareTire: false }
  car.seats;                                     // [ 'driver', 'passenger', 'rear' ]
```

</dd>
</dl>

<br>

## How do you add or remove properties to an object?
<dl>
<dd>

In real world applications, a client might add additional information to thier account or something like that.  We need the ability to add or even remove properties from that account object. 
**To add or subtract properties to an object, you can use either dot-notation or bracket notation.** Since objects in JavaScript are dynamic, you can freely add or remove properties from them. 

**To add properties to an object, you can use dot-notation or bracket notation.** Dot-notation is better to use but bracket notation is good to use in certain circumstances, such as when you have improper identifiers like dashes 
```JavaScript
const superCar = {
  make: "Lamborghini",
  model: "Reventon"
};
                                        // Original object:
console.log(superCar);                  // { make: 'Lamborghini', model: 'Reventon' }

superCar.year = { year: 2015 };         // Add property using dot-notation:
console.log(superCar);                  // { make: 'Lamborghini', model: 'Reventon', year: { year: 2015 } }


superCar['year'] = { year: 2012 };      // Add property using bracket notation:
console.log(superCar);                  // { make: 'Lamborghini', model: 'Reventon', year: { year: 2012 } }

```
**To delete properties from an object, you use the "delete" operator**.
```JavaScript
  delete superCar.coupe;                // { make: 'Lamborghini', year: { year: 2012 } }
  delete superCar[coupe] ;              // { make: 'Lamborghini', year: { year: 2012 } }
```

</dd>
</dl>

<br>

## How do you enumerate over the properties of an object?
<dl>
<dd>

**To enumerate over the properties of an object, the best way is to use either a "for-in" loop or a "for-each" loop.** In the case of the "for-in" loop, you simply need to specif the object in your loop and either the key (e.g. ```key```) or the value (e.g. ```objectName[]```). For example:

```JavaScript
  const superCar = {
    entry: 'Honda',
    middle: 'Mercedes',
    luxury: 'Rolls Royce'
  };

  for (let key in superCar) {
                                       // To get the keys of the object:
    console.log(key);                  // entry middle luxry
    
                                       // To get the values of the object:
    console.log(superCar[key]);        // Mercedes luxury Rolls Royce
    
                                       // To get the key and values of the object:
    console.log(key, superCar[key]);   // entry Honda middle Mercedes luxury Rolls Royce
  }

```
**As an reminder you can use IF statements to filter your iteration.** For example, if you would like to omit certain properties from your iteration, you can use an if-statement to print out only that which you want to print:
```JavaScript
  const superCar = {
    entry: 'Honda',
    middle: 'Mercedes',
    luxury: 'Rolls Royce'
  };
    
  for (let key in superCar) {
    if (key === 'luxury') {            // To get all keys that match "luxury" and print the values:
      console.log(superCar[key]);      // Rolls Royce
    }
  }

  for (let key in superCar) {
    if (key !== 'luxury') {            // To get all keys are NOT luxury
    console.log(key)                   // entry middle
  } 
}
```
You can also use **Object.keys** where the method "keys" will return all the keys in the object we pass to it:
```JavaScript
  const superCar = {
    entry: 'Honda',
    middle: 'Mercedes',
    luxury: 'Rolls Royce'
  };

  function findKeysAndValues(obj) {
    const keys = Object.keys(obj).forEach(function(key) {
      console.log(`the key is ${key} and the value is ${obj[key]}`);
    });
    console.log(keys);
  }

  findKeysAndValues(superCar);        // the key is entry and the value is Honda
                                      // the key is middle and the value is Mercedes
                                      // the key is luxury and the value is Rolls Royce
```

</dd>
</dl>


<br>

## What are the four core concepts of Object Oriented Programming?
The four key concepts of OOP are: **Encapsulation**, **Abstraction**, **Inheritance**, and **Polymorphism**.

<dl>
<dd>

### Encapsulation
------
**Encapsulation groups variables and functions into objects.**

For example, take a look at the following example as a *procedural* implementation. 
```JavaScript
  let carName = 'Honda';    
  let carMake = 'Civic';
  let carMilage = 23000;

  function getCarInfo(carName, carMake, carMilage) {
    return `My ${car} ${carMake} has ${carMilage} miles.`;
  }

  console.log(getCarInfo());                 // My Honda Civic has 23000 miles.
```

The OOP way to solve this problem would look something like this:
```JavaScript
  const car = {
    carName: 'Honda',
    carMake: 'Civic',
    carMilage: 23000,
    getCarInfo: function() {
      return `My ${this.carName} ${this.carMake} has ${this.carMilage} miles`;
    }
  }

  console.log(car.getCarInfo());            // // My Honda Civic has 23000 miles.
```

Note that in the case of the ```getCarInfo``` procedural example requires parameters passed into the function whereas the OOP ```getCarInfo``` example does NOT need parameters because the parameters are modeled as properties of the object. So because the properties of the object are part of one unit, it is much more efficient.

<br>

### Abstraction
-------
**The goal of abstraction is to hide details (i.e. certain members such as local variables) from the outside.** Abstraction hides all but the relevant data about an object and makes interfacing with objects simpler and reduces the impact of change (i.e. changing inner properties and methods will not leak outside the object and cause problems). 

### Scope and Closure
<dl>
<dd>

Scope and closure play important parts in abstraction. For example, when we create **private properties and methods** (i.e. ```engine```), you are creating local variables which are defined *inside* the object. From an object-oriented point of view, these private properties and methods are refered to as **private members** of an object. 

The **scope** of those private members are limited to the containing function, object, etc. So in the example below, if there were any variables in the ```engine``` method below and the function finished executing, those variables will go out of scope (i.e. die). Then when the method is called again, it will reinitialize, be of use, then die again. The scope of these variables is *temporary*.

In contrast to scope, **closure** determines what variables will be accessible to an inner function AND the variables defined in its parent function. For example, in the example below you have the variable ```engine```. If there were other variables inside the parent function ```Car```, they will be sustained in memory because they are part of the *closure* of the ```Car``` function.

</dd>
</dl>

To see how abstraction (and encapsulation) work, take a look at the following practical example. 

```JavaScript
  "use strict";

  const Car = function(carName, carSound) {
    const engine = function() {                    // the "engine" the local variable is a private member.
      console.log(carSound);
    }
    return {
      carName, engine
    };
  }

  const sportsCar = Car('Ferrari', 'vrooom');      // { carName: 'Ferrari', engine: [Function: engine] }

  console.log(sportsCar.engine());                 // vrooom

```
When we execute ```sportsCar.engine```, ```vrooom``` will print to the console. However, you do NOT have access to this ```engine``` variable outside the object. This is **closure** in JavaScript and it is how we implement encapsulation and abstraction. In effect, we are binding the ```engine ``` method and it's data (i.e. ```carSound```) and this is NOT available outside the constuctor function.

However, the key part of abstraction is that *private members* such as the local variable ```engine``` are not accessible outside the object.
```JavaScript
  console.log (engine())             // error -- cannot acces because it is outside the scope of the object.
```


<br>

### Inheritance
--------
**Inheritance enables an object to take on the properties and methods of another object.** This in turn makes it easier to reuse code  in different parts of an application and thus eliminate redundant code. For example, if you have a variety of buttons (i.e. click-buttons, drop-downs, checkboxes, etc) that all have a few properties in common (i.e. click, focus, hidden, etc.). Instead of redefining all the properties and methods for each button, you just define them once in a generic element like an object and then have other object "inherit" those properties and methods.

So suppose you have two objects, car and motorcycle. However, both need a method called ```engineStart```. Since ```startEngine``` has the exact same implementation for both objects, you dont need to do it twice. Also, if there is a big in the application, you would have to fix or improve the exact same method twice (or as many times as you use it in as many different objects you make). 

With inheritance, you could create an object called "vehicle", put ```engineStart``` inside this "vehicle" object, and then have "car" and "motorcycle" inherit this method. The "vehicle" object that we created is called the *base/super/parent* object.  The "car" and "motorcycle" are reffered to as the *derived/sub/child* object. The inheritance relationship between the "vehicle" base object and the "car/motorcycle" derived class is referred to as the *is-a*, so "car" is-a "vehicle".

<br>

### Polymorphism
--------
**Polymorphism** (meaning "many forms") is the ability of an object to perform a single action in different forms where you can call the same method of different JavaScript objects.

</dd>
</dl>


<br>


## What is a factory object?
<dl>
<dd>

**A factory functions create an individual instance of some model.** The reason we use factory functions is because if we are duplicating an object with one or more methods (has a "behavior"), it can be problematic if there become more duplicate of the same object. To avoid that issue, we use a function to create an object and return the object.
```JavaScript

  function createCar(make, model, year) {
    return {
      make: make,
      model: model,
      year: year,
      isWorking: true,
      startIgnition: function() {
        console.log('vrooom vrooom');
      }
    };
  }
```
Once you have a factory function, you can create a new car with the parameters you wish:
``` JavaScript
  const makeFerrari = createCar('Ferrari', '458 spider', 2015);
```
Then you can call your factory function using the assigned variable:
```JavaScript
  console.log(makeFerrari);  // { make: 'Ferrari',
                             //   model: '458 spider',
                             //   year: 2015,
                             //   isWorking: true,
                             //   startIgnition: [Function: startIgnition] 
                             //  }

  console.log(makeFerrari.startIgnition());    // vrooom vrooom
```

</dd>
</dl>


<br>


## What is a constructor function?
<dl>
<dd>

**A constructor function operates much like a factory function and creates an individual instance of some model.** However, when using the contructor function method if you forget to use 'new', it will define the 'this' property on the GLOBAL object (i.e. the window object). By convention, *the first letter of a constructor function name should be upper case*. Additionally, *we use 'this' to reference the object executing a particular peice of code.*
```JavaScript
  function createCar(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.startIgnition = function() {
      console.log('vrooom vrooom');
    }
  }
```
To create a car using a constructor function, it is also much the same as a factory function *except* for the inclusion of the "new" operator. When you use "new", a few things happen. First, it will create an empty object (i.e. {}). Second, it will set ```this``` to point to the new object (i.e. this.make ==> createCar). Third, it will return the object from the function.
```JavaScript
  const makePorsche = new createCar('Porsche', '718 GT4', 2019);
```
Then when you call the constructor function, you will get the following. 
```JavaScript
  console.log(makePorsche);   // createCar {
                              //   make: 'Porsche',
                              //   model: '718 GT4',
                              //   year: 2019,
                              //   startIgnition: [Function] 
                              // }
```

</dd>
</dl>

