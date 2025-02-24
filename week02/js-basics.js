// Hoisting: Variables and functions are hoisted to the top of the scope that they are declared in.
console.log(a);
var a = 5; // let a = 5; // const a = 5;
console.log(a);

// Function scope vs Block scope: var is function-scoped, let and const are block-scoped.
function testBlockScope() {
  if (true) {
    var x = 10; // Function-scoped
    let y = 20; // Block-scoped
    const z = 30; // Block-scoped
    console.log(y);
    console.log(z);
  }
  console.log(x);
  console.log(y);
  console.log(z);
}

testBlockScope();

// Coercion: JavaScript automatically converts the data type of a value to another data type.
console.log(5 + "5");
console.log("10" - 2);
console.log("5" * "2");
console.log(true + 1);
console.log(false + 1);

let a = 5;
console.log(a != "5");
console.log(a !== "5");
console.log(a + "1");
console.log(a + +"1");

// Arrays
let mixedArray = [42, "Hello", true, { key: "value" }, [1, 2, 3]];

console.log(mixedArray);
console.log(mixedArray[4][1]);

// map, filter, reduce, slice, splice, forEach, find, findIndex, some, every, includes ... https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Objects
let person = {
  name: "John",
  age: 30,
  isStudent: false,
  address: {
    city: "New York",
    country: "USA",
  },
  hobbies: ["Reading", "Swimming", "Traveling"],
  greet: function () {
    console.log("Hello, I am " + this.name);
  },
};

console.log(person);
console.log(person.name);
console.log(person["name"]);
console.log(person.address.city);
console.log(person.hobbies[1]);

person.surname = "Doe";
console.log(person);
person.greet();
delete person.greet;
console.log(person.greet);
