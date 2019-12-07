# Object Oriented Programming Study

<br>

* [What is the Object Oriented Programming Study](#What-is-the-Object-Oriented-Programming-Study)
* [What is Object Oriented Programming?](#What-is-Object-Oriented-Programming)
* [What is an object?](#What-is-an-object)
* [How do you add or remove properties to an object?](#How-do-you-add-or-remove-properties-to-an-object)
* [How do you enumerate over the properties of an object?](#How-do-you-enumerate-over-the-properties-of-an-object)
* [How do you create an object?](#How-do-you-create-an-object)
* [What is a factory object?](#What-is-a-factory-object)
* [What is a constructor function?](#What-is-a-constructor-function)
* [What are the four core concepts of Object Oriented Programming?](#What-are-the-four-core-concepts-of-Object-Oriented-Programming)
* [What are prototypes and prototypical inheritance?](#What-are-prototypes-and-prototypical-inheritance)
* [What are getters and setters?](#What-are-getters-and-setters)
* [How do you assign property descriptors?](#How-do-you-assign-property-descriptors)
* [](#)
* [](#)


<br>

## What is the Object Oriented Programming Study?


<br>

## What is Object Oriented Programming?
<dl>
<dd>

When you are writing out many lines of code that procedurally follow one from the the other, it can quickly become difficult and unorganized. In this case, it would be useful to have a means of organizing your code. One way to do this is with *procedural programming*. 

------
### Procedural programming is straightforward, but easily confusing in complex applications
------
**Procedural programming is where data was stored in a bunch of variables and functions that operate on the data.** This means procedural programming can be very simple and straight forward. In other words, when building an application with procedural programming, the entire process would be coded directly to the application with the main goal in mind (i.e. top-down approach). The benefit of procedural programming is that you can focus with the main goal in mind and then indetify and solve the smaller components that solve the main goal. 

**However, procedural programming can get messy very quickly.** Although procedural programming makes it easier to start coding the application since you would essentially plan your application in a story-board way, if changes or modifications need to be made, these functions will eventually break and functions may have duplicate lines of codes (i.e. spaghetti code). To avoid this, you need to make code efficiently resuable, which is where OOP comes in.

------
### Object oriented programming is a paradigm that helps orgainze code.
------
**Object oriented programming (OOP) is a programming paradigm** OOP helps organize, add/remove/render/etc. features and functionality, reliability, makes code reusable and maintainable as well as makes it easier for other developers to figure out the code, and be preformant (i.e. efficient in terms of memory). Additionally, debugging is also a benefit in OOP as it can be tracked to a single point of origin and save a lot of time in development. And lastly, the logical structure of OOP allows you to diagram out a lot of your code before you code whereas procedural programming will require you to go back and tweak parts of your code.

------
### The goal of OOP is to bundle relevant functionality with relevant data
------
**Think of writing code for OOP as saving data and applying functionality to that data.** For example, in a quiz application you have saved data (questions, answers, etc.) and have applied functionality to that data (change user score, render score, etc.). With OOP, you have the ability to bundle the approprate data (i.e. "Joe Smith" and "Score: 5") with all the functionality you could have applied to that data. When you do this, all the performance is in one convienent spot rather than spread out over the entire space of your app.js file. 

</dd>
</dl>

<br>

## What is an object?
<dl>
<dd>

**An object stores properties and functions with thier associated data.** In other words, objects are complex data types that bring together properties and elements into a single entity that helps organize code that belongs together as well as avoiding global variables. 

**A key benefit of objects is that they stay in memory.** When an object is created, memory is automatically allocated to memory in JavaScript (and we do not need to deallocate memory) as opposed to low level languages like C++ or C, in JavaScript you do not need to allocate or de-allocate memory because the language has something called a *garbage collector* which finds variables or constants that are no longer used and deallocates memory automatically.

So what are some of the key features of objects?

------
#### Objects are collections of key/value pairs.
------
First, lets take a look at a basic **object literal**, which is a comma-seperated list of name value pairs wrapped in curly braces. Here's an example:
```JavaScript
  const objName = {                // Defined variable with a name and assignment operator with curly braces.
    key: "value"                   // Colon seperates key and value within quotes.
  }
  ```

------
#### Objects properties can contain a number of value types.
------
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

------
#### Dot-notation is used to access members of an object.
------
**To access the members of an object, use dot-notation,** which simply means you chain the property to the object name. This is extremely powerful and much simpler that using procedural methods.
```JavaScript
  car.make                                       // honda
  car.wheels                                     // 4
  car.isWorking                                  // true
  car.startIgnition()                            // vroom
  car.options                                    // { airCon: true, sportExhaust: true, spareTire: false }
  car.seats;                                     // [ 'driver', 'passenger', 'rear' ]
```


<br>

## How do you add or remove properties to an object?
<dl>
<dd>

In real world applications, a client might add additional information to thier account or something like that.  We need the ability to add or even remove properties from that account object. 
**To add or subtract properties to an object, you can use either dot-notation or bracket notation.** Since objects in JavaScript are dynamic, you can freely add or remove properties from them. 

------
#### Use dot-notation or bracket notation to add a new property.
------
**To add properties to an object, you can use dot-notation (or bracket notation) and chain the new name of your property and then assign a value.** Dot-notation is better to use but bracket notation is good to use in certain circumstances, such as when you have improper identifiers like dashes 
```JavaScript
const superCar = {
  make: "Lamborghini",
  model: "Reventon"
};
                                    // Original object:
console.log(superCar);              // { make: 'Lamborghini', model: 'Reventon' }

superCar.year = { year: 2015 };     // Add property using dot-notation:
console.log(superCar);              // { make: 'Lamborghini', model: 'Reventon', year: { year: 2015 } }


superCar['year'] = { year: 2012 };  // Add property using bracket notation:
console.log(superCar);              // { make: 'Lamborghini', model: 'Reventon', year: { year: 2012 } }

```

------
#### Use the delete prefix and the object/key name to delete a property.
------
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

## How do you create an object?
**One of the easiest wats it to create an empty object and then add members to them.** For example, you would simply need to declare a variable with empty object brackets and then assign memebrs to them.
```JavaScript
  const car = {};                        // create an empty object.

  car.name = 'Mercedes';                 // add a member with a string value.
  car.startIgnition = function() {       // add a member which is a method.
    console.log('vrooooom') 
  };
```

**You can also use ```Object.create``` to create a new object.**
```JavaScript
  const car Object.create(null);         // create an object

  car.name = 'Mercedes';                 // add a member with a string value.
  car.startIgnition = function() {       // add a member which is a method.
    console.log('vrooooom') 
  };
```
You can also create objects using using *factory functions* and *constructor functions*, which will be examined more thoroughly in the next question section.

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

------
#### To create a new constructor, use the "new" operator
------
To create a car using a constructor function, it is also much the same as a factory function *except* for the inclusion of the "new" operator. When you use "new", a few things happen. First, it will create an empty object (i.e. {}). Second, it will set ```this``` to point to the new object (i.e. this.make ==> createCar). Third, it will return the object from the function.
```JavaScript
  const makePorsche = new createCar('Porsche', '718 GT4', 2019);

  console.log(makePorsche);   // createCar {
                              //   make: 'Porsche',
                              //   model: '718 GT4',
                              //   year: 2019,
                              //   startIgnition: [Function] 
                              // }
```

------
#### New constructors will inherit the attributes of the parent prototype.
------
It is important to note that when you create an object using a given constructor like the one above, this will have the same prototype as the parent and all the way to the root object.


</dd>
</dl>


<br>

## What are the four core concepts of Object Oriented Programming?
The four key concepts of OOP are: **Encapsulation**, **Abstraction**, **Inheritance**, and **Polymorphism**.

<dl>
<dd>

------
#### Encapsulation.
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

  console.log(car.getCarInfo());             // My Honda Civic has 23000 miles.
```

Note that in the case of the ```getCarInfo``` procedural example requires parameters passed into the function whereas the OOP ```getCarInfo``` example does NOT need parameters because the parameters are modeled as properties of the object. So because the properties of the object are part of one unit, it is much more efficient.

<br>

------
#### Abstraction.
------
**The goal of abstraction is to hide details (i.e. certain members such as local variables) from the outside.** Abstraction hides all but the relevant data about an object and makes interfacing with objects simpler and reduces the impact of change (i.e. changing inner properties and methods will not leak outside the object and cause problems). 

<dl>
<dd>

------
#### Scope and closure play important parts in abstraction.
------
For example, when we create **private properties and methods** (i.e. ```engine```), you are creating local variables which are defined *inside* the object. From an object-oriented point of view, these private properties and methods are refered to as **private members** of an object. 

------
#### Scope limits the availability of members.
------
The **scope** of those private members are limited to the containing function, object, etc. So in the example below, if there were any variables in the ```engine``` method below and the function finished executing, those variables will go out of scope (i.e. die). Then when the method is called again, it will reinitialize, be of use, then die again. The scope of these variables is *temporary*.

------
#### Closure has access to parent functions and variables.
------
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

------
#### Inheritance.
------
**Inheritance enables an object to take on the properties and methods of another object.** This in turn makes it easier to reuse code in different parts of an application and thus eliminate redundant code. 

For example, if you have a variety of buttons (i.e. click-buttons, drop-downs, checkboxes, etc) that all have a few properties in common (i.e. click, focus, hidden, etc.). Instead of redefining all the properties and methods for each button, you just define them once in a generic element like an object and then have other object "inherit" those properties and methods.

So suppose you have two objects, car and motorcycle. However, both need a method called ```engineStart```. Since ```startEngine``` has the exact same implementation for both objects, you dont need to do it twice. Also, if there is a big in the application, you would have to fix or improve the exact same method twice (or as many times as you use it in as many different objects you make). 


<br>

------
#### Polymorphism.
------
**Polymorphism** (meaning "many forms") is the ability of an object to perform a single action in different forms where you can call the same method of different JavaScript objects.

</dd>
</dl>

<br>

## What are prototypes and prototypical inheritance?
<dl>
<dd>

With inheritance, you could create an object called "vehicle", put ```engineStart``` inside this "vehicle" object, and then have "car" and "motorcycle" inherit this method. The "vehicle" object that we created is called the *base/super/parent*.  The "car" and "motorcycle" are reffered to as the *derived/sub/child*. The inheritance relationship between the "vehicle" base object and the "car/motorcycle" derived class is referred to as the *is-a*, so "car" *is-a* "vehicle". 

------
#### Prototypes are the parents of an object.
------
Think of prototypes as the parents of a given object. When implementing inheritance using objects (since JavaScript only has objects rather than classes), we need to *link* the **base** to the **child**. When you do this, the base becomes the **prototype**. **The prototype is the parent of another object (i.e. the object "vehicle" is the prototype of the child "car").** Every object in JavaScript (with some exceptions) has a prototype (i.e. parent). Those objects will inherit all the members from the prototype. 

It is important to note that all objects in JavaScript have a parent that inherits it's parents members EXCEPT for the root object. This root object doesnt have a parent of its own. This will be important to know for prototypical inheritance.

------
#### Prototypical inheritance looks up the scope chain for parent members.
------
**With prototypical inheritance, when you look for a property or a method in a method, the JavaScript engine will first try to look that property or method in the object first.** If it does not exist there, it will look up the scope chain to the prototype of that object. And if it is not there, it will continue looking up and up the chain until it gets to the root object.

------
#### Objects ceated by a given constructor will have the same prototype members.
------
**Multi-level inheritance essentially means that there is a continued inheritance of members that goes on and on until you get to the root object.** So if you create an object using a custom constructor (i.e. ``` const sportsCar = Car('Ferrari', 'vrooom'); ```), if you inspect the object you will see the prototype of the parent and so on until you get to the root object.

</dd>
</dl>


<br>

## What are getters and setters?
<dl>
<dd>
There may be some instances where you want to *get* something like a local variable inside an object or even *set* a variable to another value. This is where *getters and setters* come in. In the example below, we have the private property ```isAutomobile``` which cannot be accessed from the outside. In other words, when you run ```console.log(isAutomobile)```, the response will be unsuccessful. 

```JavaScript
  function Car(make, model) {
    let isAutomobile = true;             // "isAutomobile" is a private member, so not accesible outside.
    this.make = make;
    this.model = model;        
  }

  const sedan = new Car("BMW", "M5");    

  console.log(sedan.isAutomobile());     // undefined
```
------
#### Define a method and return a private member to use it elsewhere in your code. 
------
However, if you do want a way to display a private member elsewhere in your code, there are a few ways to do this. The first is to define a method and return the private member.  
```JavaScript
  function Car(make, model) {
    let isAutomobile = true;

    this.make = make;
    this.model = model;

    this.isAutomobile = function() {     // method that returns a private member.
      return isAutomobile
    };         
  }

  const sedan = new Car("BMW", "M5");

  console.log(sedan.isAutomobile());     // true
```
Note that the closure of the function of ```this.isAutomobile``` includes all the variables inside the code block (i.e. isAutomobile)as well as all the variables in the parent functions. However, this is a read-only way of doing this. A better way to do this is to use a *getter*.

------
#### Use Object.defineProperty to define getters and/or setters.
------
This method takes three arguments:
1. The object you want to add the new property to. In this case, its the current object, so ```this```.
2. The name of the property.
3. An object with a key/value pair. 

------
#### Getters allow you to read a private property.
------
**A getter is a function that is used to read a private property inside an object.** So we first need to use the ```get``` key and set the value as a function. Since any variables are part of the closure of the function, you will be able to access it.

```JavaScript
  let privateMember = "I ama private member"
  
  Object.defineProperty(this, 'propertyName', {
    get: function() {
      return privateMember;
    }
  });
```

And if you were to see this in action with the running example of the Car object, when you try to access the ```isAutomobile``` property, you will be successful because you are getting the private member specified within the function
```JavaScript
  function Car(make, model) {
    let isAutomobile = true;

    this.make = make;
    this.model = model;
    this.isAutomobile = function() {
      return isAutomobile
    } 
 
    Object.defineProperty(this, 'isAutomobile', {  
      get: function() {                                 // getter
        return isAutomobile; 
      }
    }); 
  }

  const coupe = new Car("porsche", 911);

  console.log(coupe.isAutomobile);                      // true

```
------
#### A setter will allow you to define a property from outside the object.
------
**A setter allows you to set the value of the private member from OUTSIDE the object.** To do this, you simply need to add another key/value pair, this time with the key ```set``` and pass the parameter "value" to the function. Then, inside the function you 
```JavaScript
  function Car(make, model) {
    let isAutomobile = true;

    this.make = make;
    this.model = model;
    this.isAutomobile = function() {
      return isAutomobile
    } 
 
    Object.defineProperty(this, 'isAutomobile', {  
      get: function() { 
        return isAutomobile; 
      },
      set: function(value) {                             // setter
        isAutomobile = value;
      }
    }); 
  }

  const coupe = new Car("porsche", 911);

console.log(coupe.isAutomobile);                       // true (original boolean value)

coupe.isAutomobile = false;                            // set the private member to "false"

console.log(coupe.isAutomobile);                       // flase (updated boolean value)

```

</dd>
</dl>


<br>

## How do you assign property descriptors?
<dd>
<dl>

In JavaScript, there are times when the properties in objects have attributes attached to them. Most of the attributes by default are true (i.e. writable, enumerable, and configurable). There are also sometimes the properties have attributes that previent a property from being enumerated. For example:

------
#### Use Object.defineProperty to set attributes for your properties
------
To set the attributes for your object properties, you use ```Object.defineProperty```, which is much like the method we used for getters and setters. As parameters, you first pass in the property (i.e. variable, etc.), then the name of the target property (i.e. what you want to set the property decriptor to), and then an object with any property descriptors in it which will be where the attributes of the property are.

So in the example below, we can change the ability of the property to be overwritten. We can also specifify whether or not the object is enumerable.
```JavaScript
let car = {make: 'Porsche'};

Object.defineProperty(car, 'make', {
  writable: false                     // property descriptor will not allow overwrite.
}) 

car.make = 'Ferrari';

console.log(car);                     // { make: 'Porsche' }
```


</dd>
</dl>







<br>




