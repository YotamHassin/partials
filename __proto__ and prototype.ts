// https://www.freecodecamp.org/news/how-proto-prototype-and-inheritance-actually-work-in-javascript/

const basic = () => {
  const info1 = {
    fName1: "f Name 1",
    lName1: "l Name 1",
  };

  const info2 = {
    fName2: "f Name 2",
    lName2: "l Name 2",
    __proto__: info1,
  };

  const info3 = {
    fName3: "f Name 3",
    lName3: "l Name 3",
    __proto__: info2,
  };

  /* Property 'fName1' does not exist on type '{ fName3: string; lName3: string; __proto__: { fName2: string; lName2: string; __proto__: { fName1: string; lName1: string; }; }; }'. Did you mean 'fName3'?ts(2551) */
  //console.log(info3.fName1); // "f Name 1"
  console.log(info3.__proto__.__proto__.fName1); // "f Name 1"

};



const PrototypesWithClasses = () => {
  class User {
    name: string;
    constructor(name: string, public age: number = NaN) {
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
  
  // Property '__proto__' does not exist on type 'User'.
  //console.log(user1.__proto__ === User.prototype); // true
}

