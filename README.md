# Object Oriented Programming Study

<br>

* [What is the Object Oriented Programming Study](#What-is-the-Object-Oriented-Programming-Study)
* [What is Object Oriented Programming?](#What-is-Object-Oriented-Programming)
* [What is an object?](#What-is-an-object)

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

**Objects are complex data types that bring together properties and elements into a single entity.** But before that, lets take a look at a basic object literal.

An **object literal** is a comma-seperated list of name value pairs wrapped in curly braces. Here's an example of an object literal:
```JavaScript
  const objName = {                // Defined variable with a name and assignment operator with curly braces.
    key: "value"                   // Colon seperates key and value within quotes.
  }
  ```
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
**Abstraction hides the internal implementation details of your object.** In essence, through the process of abstraction the programmer can hida all but the relevant data about an object in order to reduce complexity and increase efficientcy. In other words, abstraction makes interfacing with objects simpler and reduces the impact of change (i.e. changing inner properties and methods will not leak outside the object and cause problems). 

Take a look at how abstraction (and encapsulation) work in the following practical example. When we execute ```sportsCar.engine```, ```vrooom``` will print to the console. However, you do NOT have access to this ```engine``` variable outside the object. This is **closure** in JavaScript and it is how we implement encapsulation and abstraction. In effect, we are binding the ```engine ``` method and it's data (i.e. ```carSound```) and this is NOT available outside the constuctor function.

```JavaScript
  "use strict";

  const Car = function(carName, carSound) {
    const engine = function() {                  // Note engine INSIDE the object
      console.log(carSound);
    }
    return {
      carName, engine
    };
  }

  const sportsCar = Car('Ferrari', 'vrooom');      // { carName: 'Ferrari', engine: [Function: engine] }

  console.log(sportsCar.engine());                 // vrooom

```


<br>

### Inheritance
--------
**Inheritance enables an object to take on the properties and methods of another object.** This in turn makes it easier to reuse code  in different parts of an application and thus eliminate redundant code. For example, if you have a variety of buttons (i.e. click-buttons, drop-downs, checkboxes, etc) that all have a few properties in common (i.e. click, focus, hidden, etc.). Instead of redefining all the properties and methods for each button, you just define them once in a generic element like an object and then have other object "inherit" those properties and methods.

So suppose you have two objects, car and motorcycle. However, both need a method called ```engineStart```. Since ```startEngine``` has the exact same implementation for both objects, you dont need to do it twice. Also, if there is a big in the application, you would have to fix or improve the exact same method twice (or as many times as you use it in as many different objects you make). With inheritance, you could create a class object called "vehicle", put ```engineStart``` inside this "vehicle" object, and then have "car" and "motorcycle" inherit this method. The "vehicle" class that we created is called the *base/super/parent* class.  The "car" and "motorcycle" are reffered to as the *derived/sub/child* class. The inheritance relationship between the "vehicle" base class and the "car/motorcycle" derived class is referred to as the *is-a*, so "car" is-a "vehicle".

<br>

### Polymorphism
--------
**Polymorphism** is the ability of an object to perform a single action in different forms where you can call the same method of different JavaScript objects.



</dd>
</dl>
