// https://www.freecodecamp.org/news/how-proto-prototype-and-inheritance-actually-work-in-javascript/

const basic = () => {
  const info1 = {
    fName1: "Shejan",
    lName1: "Mahamud",
  };

  const info2 = {
    fName2: "Boltu",
    lName2: "Mia",
    __proto__: info1,
  };

  const info3 = {
    fName3: "Habu",
    lName3: "Mia",
    __proto__: info2,
  };

  console.log(info3.fName1); // "Shejan"

};


const prototype_constructor = () => {
  /* 
  JavaScript performs these steps internally:

  Creates a new empty object: p1 = {}

  Sets the object's __proto__: p1.__proto__ = Person.prototype

  Calls the constructor function with the new object: Person.call(p1, "Shejan")

  Returns the object: return p1
  */

  function Person(name) {
    this.name = name;
  }

  Person.prototype = {
    constructor: Person
  };

  /* 
  function sayHi () {
    console.log("Hi, I'm " + this.name);
  };
  Person.prototype.sayHi = sayHi; 
  */

  Person.prototype.sayHi = function () {
    console.log("Hi, I'm " + this.name);
  };

  const p1 = new Person("fName");

  p1.sayHi(); // "Hi, I'm fName"

  p1.__proto__ === Person.prototype; // true
  Person.prototype.constructor === Person; // true

}


const PrototypesWithFunctions = () => {
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Adding a method to the prototype
  Person.prototype.introduce = function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  };

  // Creating instances
  const person1 = new Person("Alice", 25);
  const person2 = new Person("Bob", 30);

  person1.introduce(); // "Hi, I'm Alice and I'm 25 years old."
  person2.introduce(); // "Hi, I'm Bob and I'm 30 years old."

  // Both instances share the same prototype
  console.log(person1.__proto__ === Person.prototype); // true
  console.log(person2.__proto__ === Person.prototype); // true
  console.log(person1.__proto__ === person2.__proto__); // true
}


const PrototypesWithClasses = () => {
  class User {
    constructor(name) {
      this.name = name;
    }

    sayHi() {
      console.log(`Hi, I'm ${this.name}`);
    }
  }

  const user1 = new User("Charlie");
  user1.sayHi(); // "Hi, I'm Charlie"

  // Let's check what's really happening
  console.log(typeof User); // "function"
  console.log(User.prototype); // { sayHi: f, constructor: f User() }
  console.log(user1.__proto__ === User.prototype); // true
}

