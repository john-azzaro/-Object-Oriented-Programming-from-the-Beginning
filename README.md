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

## What are the four core concepts of Object Oriented Programming?
<dl>
<dd>

The four key concepts of Object oriented programming are: **Encapsulation**, **Abstraction**, **Inheritance**, and **Polymorphism**.

### Excapsulation
The firsty core concept of object oriented programming is **Encapsulation**, which essentially means *grouping variables and function into objects*.

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
  
```



</dd>
</dl>





<br>

## What is an object?
<dl>
<dd>

**Objects are complex data types that bring together properties and elements into a single entity.** In the example below, we have an object literal "car" with a number of key values pairs about that car, including its name, options, etc. 

An **object literal** is a comma-seperated list of name value pairs wrapped in curly braces. Here's an example of an object literal:
```JavaScript
  const objName = {                // Defined variable with a name and assignment operator with curly braces.
    key: "value"                   // Colon seperates key and value within quotes.
  }
  ```
**Inside the object, you can include values** such as: *strings, numbers, booleans, functions, other objects, or arrays.*
```JavaScript
  const car = {
    make: "honda",                                     // string
    wheels: 4,                                         // number
    isWorking: true,                                   // boolean
    startIgnition: function() {                        // "method" or function
      console.log("vroom")
    },
    options: {                                         // object
      airCon: true,
      sportExhaust: true,
      spareTire: false,
    },
    seats: ["driver", "passenger", "rear"]             // array
  };
```
***To access the members of an object, use dot notation.**
```JavaScript
  car.make                                    // honda
  car.wheels                                  // 4
  car.isWorking                               // true
  car.startIgnition()                         // vroom
  car.options                                 // { airCon: true, sportExhaust: true, spareTire: false }
  car.seats;                                  // [ 'driver', 'passenger', 'rear' ]
```

</dd>
</dl>

