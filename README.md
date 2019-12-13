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
* [What are instance members and prototype members?](#What-are-instance-members-and-prototype-members)
* [How do you customize prototypical inheritance?](#How-do-you-customize-prototypical-inheritance)
* [What is a "Super Constructor" and how do you call it?](#What-is-a-Super-Constructor-and-how-do-you-call-it)
* [How do you iterate over prototype and instance members?](#How-do-you-iterate-over-prototype-and-instance-members)
* [What are getters and setters?](#What-are-getters-and-setters)
* [How do you assign property descriptors?](#How-do-you-assign-property-descriptors)
* [](#)
* [](#)


<br>

# What is the Object Oriented Programming Study?


<br>
<br>
<br>
<br>

# What is Object Oriented Programming?
<dl>
<dd>

When you are writing out many lines of code that procedurally follow one from the the other, it can quickly become difficult and unorganized. In this case, it would be useful to have a means of organizing your code. One way to do this is with *procedural programming*. 

------
### Procedural programming is initially intuitive, but easily confusing in complex applications.
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
<br>
<br>
<br>

# What is an object?
<dl>
<dd>

**An object stores properties and functions with thier associated data.** In other words, objects are complex data types that bring together properties and elements into a single entity that helps organize code that belongs together as well as avoiding global variables. 

**A key benefit of objects is that they stay in memory.** When an object is created, memory is automatically allocated to memory in JavaScript (and we do not need to deallocate memory) as opposed to low level languages like C++ or C, in JavaScript you do not need to allocate or de-allocate memory because the language has something called a *garbage collector* which finds variables or constants that are no longer used and deallocates memory automatically.

So what are some of the key features of objects?

------
### Objects are collections of key/value pairs.
------
First, lets take a look at a basic **object literal**, which is a comma-seperated list of name value pairs wrapped in curly braces. Here's an example:
```JavaScript
  const objName = {                // Defined variable with a name and assignment operator with curly braces.
    key: "value"                   // Colon seperates key and value within quotes.
  }
  ```

------
### Objects properties can contain a number of value types.
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
### Dot-notation is used to access members of an object.
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
<br>
<br>
<br>

# How do you add or remove properties to an object?
<dl>
<dd>

In real world applications, a client might add additional information to thier account or something like that.  We need the ability to add or even remove properties from that account object. 
**To add or subtract properties to an object, you can use either dot-notation or bracket notation.** Since objects in JavaScript are dynamic, you can freely add or remove properties from them. 

------
### Use dot-notation or bracket notation to add a new property.
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
### Use the delete prefix and the object/key name to delete a property.
------
**To delete properties from an object, you use the "delete" operator**.
```JavaScript
  delete superCar.coupe;                // { make: 'Lamborghini', year: { year: 2012 } }
  delete superCar[coupe] ;              // { make: 'Lamborghini', year: { year: 2012 } }
```

</dd>
</dl>

<br>
<br>
<br>
<br>

# How do you enumerate over the properties of an object?
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
<br>
<br>
<br>

# How do you create an object?
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
<br>
<br>
<br>

# What is a factory object?
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
<br>
<br>
<br>

# What is a constructor function?
<dl>
<dd>

**A constructor function operates much like a factory function and creates an individual instance of some model.** Every object in JavaScript has a constrcutor property that returns the function that was used to construct or create that object.

However, when using the contructor function method if you forget to use 'new', it will define the 'this' property on the GLOBAL object (i.e. the window object). By convention, *the first letter of a constructor function name should be upper case*. Additionally, *we use 'this' to reference the object executing a particular peice of code.*
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
### To create a new constructor, use the "new" operator
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
### New constructors will inherit the attributes of the parent prototype.
------
It is important to note that when you create an object using a given constructor like the one above, this will have the same prototype as the parent and all the way to the root object.


</dd>
</dl>

<br>
<br>
<br>
<br>

# What are the four core concepts of OOP?
The four key concepts of OOP are: **Encapsulation**, **Abstraction**, **Inheritance**, and **Polymorphism**.

<dl>
<dd>


# Encapsulation.
**Encapsulation groups variables and functions into objects.** In a sense, the idea of encapsulation is to bundle the data and methods that work on the data within that object inside a single unit (i.e. object). This also provides an *abstraction* benefit where the details of that object are hidden from the rest of the outside as we'll see in the next concept.

<dl>
<dd>

Take a look at the following implementation of a *procedural* example and what encapsulation is NOT: 
```JavaScript
  let carName = 'Honda';                                    // outside details accessible everywhere
  let carMake = 'Civic';
  let carMilage = 23000;

  function getCarInfo(carName, carMake, carMilage) {        // parameters passed into function
    return `My ${car} ${carMake} has ${carMilage} miles.`;
  }

  console.log(getCarInfo());                                // My Honda Civic has 23000 miles.
```

------
### With encapsulation, properties are "encapsulated" in the object.
------
**The OOP way to solve this problem would be to take those outside details and "encapsulate" them inside the object.** And because these details are inside the object, there is no need to pass in any parameters. So in the case of the procedural, the ```getCarInfo``` example requires parameters passed into the function. However, the OOP ```getCarInfo``` example does NOT need parameters because the parameters are modeled as properties of the object. And because the properties of the object are part of one unit, it is much more efficient.:
```JavaScript
  const car = {
    carName: 'Honda',
    carMake: 'Civic',
    carMilage: 23000,
    getCarInfo: function() {
      return `My ${this.carName} ${this.carMake} has ${this.carMilage} miles`;
    }
  }

  console.log(car.getCarInfo());                            // My Honda Civic has 23000 miles.
```
</dd>
</dl>

<br>
<br>


# Abstraction.
**The goal of abstraction is to hide details (i.e. certain members such as local variables) from the outside.** Abstraction hides all but the relevant data about an object and makes interfacing with objects simpler and reduces the impact of change (i.e. changing inner properties and methods will not leak outside the object and cause problems). 

<dl>
<dd>

------
### Scope and closure play important parts in abstraction.
------
For example, when we create **private properties and methods** (i.e. ```engine```), you are creating local variables which are defined *inside* the object. From an object-oriented point of view, these private properties and methods are refered to as **private members** of an object. 

------
### Scope limits the availability of members.
------
The **scope** of those private members are limited to the containing function, object, etc. So in the example below, if there were any variables in the ```engine``` method below and the function finished executing, those variables will go out of scope (i.e. die). Then when the method is called again, it will reinitialize, be of use, then die again. The scope of these variables is *temporary*.

------
### Closure has access to parent functions and variables.
------
In contrast to scope, **closure** determines what variables will be accessible to an inner function AND the variables defined in its parent function. For example, in the example below you have the variable ```engine```. If there were other variables inside the parent function ```Car```, they will be sustained in memory because they are part of the *closure* of the ```Car``` function.



To see how abstraction (and encapsulation) work, take a look at the following practical example. 

```JavaScript
  const Car = function(carName, carSound) {
    const engine = function() {                // the "engine" the local variable is a private member.
      console.log(carSound);
    }
    return {
      carName, engine
    };
  }

  const sportsCar = Car('Ferrari', 'vrooom');  // { carName: 'Ferrari', engine: [Function: engine] }

  console.log(sportsCar.engine());             // vrooom

```
When we execute ```sportsCar.engine```, ```vrooom``` will print to the console. However, you do NOT have access to this ```engine``` variable outside the object. This is **closure** in JavaScript and it is how we implement encapsulation and abstraction. In effect, we are binding the ```engine ``` method and it's data (i.e. ```carSound```) and this is NOT available outside the constuctor function.

However, the key part of abstraction is that *private members* such as the local variable ```engine``` are not accessible outside the object.
```JavaScript
  console.log (engine())                      // error -- outside the scope of the object.
```

</dd>
</dl>

<br>
<br>


# Inheritance.
**Inheritance enables an object to take on the properties and methods of another object,** making it easier to reuse code in different parts of an application and thus eliminate redundant code.

<dl>
<dd>

------
### Inheritance allows an object to "inherit" the properties of a parent.
------
Inheritance comes in handy when we consider that although some objects can be similar (think Automobile and Car), they may not be exactly the same (think of the property wheels which could be different depending on the type of automobile). 

**Inheritance means that you can create a "child" that derives from another "parent" object.** The child object resuses all the fields and methods of the parent object *but can also implement its own unique properties and methods*. In other words, instead of redefining all the properties and methods for each new "Car" object, you just define them once in a generic element like an object and then have other object "inherit" those properties and methods.

So suppose you have two objects, car and motorcycle. However, both need a method called ```engineStart```. Since ```startEngine``` has the exact same implementation for both objects, you dont need to do it twice. Also, if there is a big in the application, you would have to fix or improve the exact same method twice (or as many times as you use it in as many different objects you make). 

------
### But avoid creating inheritance hierarchies
------
Although inheritance is useful, you should only use it when necessary. Encapsulation should follow an organic approach and used when you predict or start to notice common features that need to be encapsulated. An issue that might arise is if you have have a heirarchy where one object may be one thing (a fish is an animal) but does NOT have a similar feature (a fish cannot walk). To solve this, you would need to add sub-classes to account. This can be easily achieved by using *mixins*.


</dd>
</dl>

<br>
<br>


# Polymorphism.
**Polymorphism** (meaning "many forms") is a powerful concept in OOP in that it allows an object to perform a single action in different forms and allows you to call the same method of different JavaScript objects. 

<dl>
<dd>

------
###  Polymorphism allows you to have mutltiple uses of the same function.
------
For example, suppose you have a three objects, "Car", "Motorcycle", "ElectricCar". Now lets say that each of these vehicles have a common feature, which is they have an "ignition" method. Because OOP allows us the ability to configure our objects efficiently, instead of having seperate "ignition" methods, we can create a *parent* object called "Automobile" that contains the shared characteristics of the three vehicles, specifically the "ignition" method. 

But "ignition" is not the same for all the three objects. "Car" and "Motorcycle" share the same "ignition" method but the ElectricCar doesnt have the same ignition as the others. 

OOP has a solution to this issue wherein you can override the "ignition" method (see How do I override a method question). Essentially, with the override method you can change the value of a certain method like "ignitiion" to fit the use of ElectricCar. In this way, there are *many forms* of the same method and the "ignition" method is **polymorphic**.


</dd>
</dl>

<br>
<br>
<br>
<br>

# What are prototypes and prototypical inheritance?

<dl>
<dd>

**Every object in JavaScript has a prototype (i.e. parent).** Think of prototypes as the parents of a given object. When implementing inheritance using objects (since JavaScript only has objects rather than classes), we need to *link* the **base** to the **child**. When you do this, the base becomes the **prototype**. **The prototype is the parent of another object (i.e. the object "vehicle" is the prototype of the child "car").** Every object in JavaScript (with some exceptions) has a prototype (i.e. parent). Those objects will inherit all the members from the prototype. 

For example, you could create an object called "vehicle", put ```engineStart``` inside this "vehicle" object, and then have "car" and "motorcycle" inherit this method. The "vehicle" object that we created is called the *base/super/parent*.  The "car" and "motorcycle" are reffered to as the *derived/sub/child*. The inheritance relationship between the "vehicle" base object and the "car/motorcycle" derived class is referred to as the *is-a*, so "car" *is-a* "vehicle". 

It is important to note that all objects in JavaScript have a parent that inherits it's parents members EXCEPT for the root object. This root object doesnt have a parent of its own. This will be important to know for prototypical inheritance.

------
### Prototypical inheritance looks up the scope chain for parent members.
------
**With prototypical inheritance, when you look for a property or a method in a method, the JavaScript engine will first try to look that property or method in the object first.** If it does not exist there, it will look up the scope chain to the prototype of that object. And if it is not there, it will continue looking up and up the chain until it gets to the root object.

------
### Objects created by a given constructor will have the same prototype members.
------
**Multi-level inheritance essentially means that there is a continued inheritance of members that goes on and on until you get to the root object.** So if you create an object using a custom constructor (i.e. ``` const sportsCar = Car('Ferrari', 'vrooom'); ```), if you inspect the object you will see the prototype of the parent and so on until you get to the root object.

------
### To get the prototype of an object, use Object.getPrototypeOf()
------
Since all objects have prototypes (or more specifically parents) until you get to the root element, if you would like to GET the prototype of an object you need to use ```Object.getPrototypeOf()``` and then pass in the name of the object. When you create an object (or array for that matter), it will have a prototype (i.e. parent) ```__proto__``` that is the root object and lists all its associated properites and methods. 
```JavaScript
  Object.getPrototypeOf(mySportsCar);
```

</dd>
</dl>


<br>
<br>
<br>
<br>


# What are instance members and prototype members?
<dl>
<dd>

**An instance member is one a property or method inside the the object** whereas **a prototype member is one that is a parent of that object**

In some cases, you may be using your constructor function to create hundreds or even thousands of objects. For each of those object, you will have the same information copied over and over again. For example, in the Car constructor function below, you could have potentially thousands of copies of the ```ignition``` method. This will waste a LOT of memory.
```JavaScript
  function Car(make, model) {
    this.make = make;
    this.model = model;
    this.ignition = function() {
      console.log('vrooom');
    }
  }

  const germanCar = new Car('Porsche', '911 Carrera');
  const italianCar = new Car('Ferrari', '458 italia');
  ...
  ...
  ...

  console.log(germanCar);       // Car { make: 'Porsche', model: '911 Carrera', ignition: [Function] }
```
However, with prototypical inheritance, when you try to access a propety or method the JavaScript engine first looks at the object itself. If that property or method is not there, it will look at the prototype (i.e. parent) of that object on and on until you get to the root object. Understanding this, you have the ability to take a property or method OUT of the constructor function and create a SINGLE instance of something like the ignition method. This way, you have a single instance of the Car constructor and the function.

------
### Use .prototype to create a single instance of a property or method 
------
Using ```.prototype``` you can create a single instance to the prototype object. For example, to create a single instance of a property or method and conserve valuable memory, you use the ```.prototype``` method. To do this, you would of course need to have your constructor function and the property or method you want to convert into a single method. Then, you create a prototype method and add the the property or method to that! You can even reference other members.
```JavaScript
  function Car(make, model) {
    this.make = make;
    this.model = model;
  }

  Car.prototype.ignition = function() {
    console.log('vrooom');
  }

  const germanCar = new Car('Porsche', '911 Carrera');
  const italianCar = new Car('Ferrari', '458 italia');

  console.log(germanCar.ignition());       // vrooom
```

------
### However, avoid modifying the prototype built-in objects
------
Although you can also modify the built-in objects of a prototypes, you should be avoid doing this because if you eventually use a library or something else that modifies that built-in object, it could cause conflicts in your code.

</dd>
</dl>

<br>
<br>
<br>
<br>

# How do you customize prototypical inheritance?
<dl>
<dd>

Suppose you had an object with certain properties. Additionally, you have a method that is defined on its prototype (see previous question if you are not sure). Remember that we do this to keep object lighter in the event that there are multiple instances of the Car object. Anyway, it would look something like this:
```JavaScript
  function Car(make) {                            // "Car "constructor object.
    this.make = make;
    this.wheels = 4;
  }

  Car.prototype.ignitition = function() {         // method defined to "Car" prototype.
    console.log('vroooom');
  }

  const sportsCar = new Car('Porsche');           // Create "sportsCar" object.
```

------
### Create a new parent object for properties and methods to be used for of multiple objects.
------
Now suppose that later on you want to create a "Motorcycle" object and that object would also have an ```ignition``` method with the exact same implementation. Instead of duplicating the same method, you can use inheritance to create an "automobile" parent object and then have "Car" and "Motorcycle" inherit that parent constructor method.
```JavaScript
  
  function Automobile() {                         // automobile constructor (the new parent constructor)
  }

  Automobile.prototype.ignition = function() {    // ignititon attributed to the parent object
    console.log('vroooom');
  }  
```

------
### Use Object.create() to essentially reset the parent prototype.
------
**To customize prototypical inheritance, you create a object with a given prototype by using a special method ```Object.create``` and pass in the parent object by setting the existing constructor object's prototype.** In essence, this is reformatting the prototype of an object like "Car" to also include the "Automobile" prototype as well. When you do this, ```sportsCar``` will inherit from ```Automobile``` which will inherit from the root object!
```JavaScript
  Car.prototype = Object.create(Automobile.prototype);     // Car = child, Automobile = parent.
```

------
### But as a best practice, remember to RESET the constructor.
------
However, when you do this you might run into the issue of accessing prototype properties. For example, if you try to access a property such as ```Car.prototype.ignition```, you will not get this but in fact the new parent constructor (i.e. "Automobile"). This is because we reset the prototype of ```Car``` to ```Automobile```.
```JavaScript
  Car.prototype = Object.create(Automobile.prototype);
  Car.prototype.constructor = Car;                          // Reset the constructor.  
```

------
### And refactor to reduce duplication with Intermediate function inheritance.
------
Once you have your inheritance chain setup correctly, you can now create multiple objects that will have a working inheritance chain. However, when you reset the constructor for each object you create, this creates a bit of clutter than can be reduced with a "extend"-ing intermediate function. To do this, you simply need to create a new function and encapsulate the logic from the previous steps into this new function. This function is called *intermediate function inheritance*.
```JavaScript
  function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
  }
```
And then following the object constructor, you call ```extend ``` and pass the Child and Parent as arguments. In the case of our working example, this would be "Car" and "Automobile". For every additional object, you would simply need to call ```extend(Child, Parent)```
```JavaScript
  function extend(Child, Parent) {                        // extend function
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
  }

  function Automobile() {                                // Parent Constructor        
    this.isWorking: true;
  }

  function Car(make) {                                   // Child Constructor
    this.make = make;
    this.wheels = 4;
  }

  extend(Car, Automobile);                               // exend Car with Automobile
  
  function Tricycle(make) {                              // Another Child constrcutor
    this.make = make;
    this.wheels = 3;
  }

  extend(Tricycle, Automobile);                          // exend Tricycle with Automobile
  
```


</dd>
</dl>




<br>
<br>
<br>
<br>



# What is a "Super Constructor" and how do you call it?
<dl>
<dd>

What if you want to modify a prototype by adding a property or method which will be included with the object created (i.e. Car)? For example, in the example below you have the property ```isWorking``` in ```Automobile```. What if we want to have ```isWorking``` included in each ```Car``` object created. To do this, you simply need to call the prototype ```Automobile``` in the ```Car``` constructor with the ```call``` method. As parameters, you pass in "this" which references the Car object and then the property from Automobile.
```JavaScript
  function Automobile(isWorking) { 
    this.isWorking = true;                // Add a new property
  }

  function Car(make) {          
    Automobile.call(this, isWorking)      // and call Automobile, passing this (Car object) and property.
    this.make = make;
    this.wheels = 4;
  }
```
Then when you call a new object (i.e. sportsCar), you will see the inherited property that became available via calling the super constructor.

</dd>
</dl>



<br>
<br>
<br>
<br>



# How do you override a method?
<dl>
<dd>

**Method override is reimplementing a method in a child object.**  For example, if you have a method on a prototype that might fit with general uses but you may not want to include them in something else, you can override the method which overrides a method defined in the root method. So take this for example:
```JavaScript
  function extend(Child, Parent) {                          // extend function
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
  }

  function Automobile() {                                   // constructor
  }

  Automobile.prototype.ignition = function() {              // method on Automobile prototype
    console.log('vrooom')
  }

  function Car() {                                          // Car constructor
  }

  extend(Car, Automobile);                                  // Car inherits from Automobile

  const sportsCar = new Car();                              // Create a new object (i.e. "sportsCar").
```  
------ 
### To override a CHILD, redefine the method after extending it.
------ 
**So how do you override a method?** So suppose you want the ignition method to work differently for a specific object. In the example below, lets say we want to override the method for ignition such that for a Car, the ignition will go "vroom vroom". To override a method, you simply need to redefine the method (i.e. ignition) after the ```extend``` (i.e. extending the Car to the Automobile). This is important because we are restting the prototype and overriding it. As a result, when you call ```Car.ignition()```, you will get "vroom vroom" instead of "vroom" as it was in the parent "Automobile" prototype.
```JavaScript
  function extend(Child, Parent) {   
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
  }

  function Automobile() {  
  }

  Automobile.prototype.ignition = function() { 
    console.log('vroom')
  }

  function Car() { 
  }

  extend(Car, Automobile); 
 
  Car.prototype.ignition = function() {                // method override on Car
    console.log('vroom goes the car')
  }

  const sportsCar = new Car();                        // sportsCar.ignittion() => vroom goes the car
```

------
### To override a PARENT, call the the method on the parent.
------
And if you want to call the implementation on the PARENT object, you need to call the ignititon method on the Parent (i.e. Automobile) object.
```JavaScript
  Car.prototype.ignition = function() { 
   Automobile.prototype.ignition();                   // use if you are not using "this" 
   Automobile.prototype.ignition.call(this);          // use this if you are using "this"
  }                                                   // NOTE: Use one OR the other.
```

------
### You can also override multiple methods.
------
**You can also override multiple methods while inheriting from a common parent object.** So what we've done so far is reimplement a method in a child object by resetting ignition to "vroom goes the car" in the Car object. But what we want now is to be able to do this multiple times. This is where the concept of *polymorphism* comes into play. 

When we create another object that inherits from the parent (i.e. Automobile) and we want a method to perform differently, we have an easy way to modify it. This is the benefit of polymorphism in object oriented programming where we can have different objects providing different implementatons of the same method (i.e. ignition). In other words, there are MANY FORMS of the ignition method. A key benefit of this is that we can access those methods more easily than in a more laborious procedural way.
```JavaScript
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

  Car.prototype.ignition = function() { 
    console.log('vroom goes the car')
  }

  function ElectricCar() {                               // electricCar constructor
  }

  extend(ElectricCar, Automobile);                       // electricCar inherits from Automobile
 
  ElectricCar.prototype.ignition = function() {          // but override ignition on ElectricCar
    console.log('beep boop beep')
  }

  const sportsCar = new Car();                          // sportsCar.ignittion() => vroom goes the car
  const tesla = new Car();                              // tesla.ignition() => beep boop beep
```  
</dd>
</dl>


<br>
<br>
<br>
<br>

# How do you iterate over prototype and instance members?
<dl>
<dd>

If you want to iterate over prototype or instance members, you need to using the **for-in loop** to return all members. If you were to use ```Object.keys```, you would unfortunately only return instance members so it is not a viable solution.
```JavaScript
  for (let keys in germanCar) {
    console.log(keys);             // make
  }                                // model
                                  // ignition   <= instance method returned!
```

</dd>
</dl>


<br>
<br>
<br>
<br>

# What are getters and setters?
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
### Define a method and return a private member to use it elsewhere in your code. 
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
### Use Object.defineProperty to define getters and/or setters.
------
This method takes three arguments:
1. The object you want to add the new property to. In this case, its the current object, so ```this```.
2. The name of the property.
3. An object with a key/value pair. 

------
### Getters allow you to read a private property.
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
### A setter will allow you to define a property from outside the object.
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
<br>
<br>
<br>

# How do you assign property descriptors?
<dd>
<dl>

In JavaScript, there are times when the properties in objects have attributes attached to them. Most of the attributes by default are true (i.e. writable, enumerable, and configurable). There are also sometimes the properties have attributes that previent a property from being enumerated. For example:

------
### Use Object.defineProperty to set attributes for your properties
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
<br>
<br>
<br>




