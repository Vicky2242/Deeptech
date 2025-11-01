// object

const person = {
  name: "Vigneshwaran",
  age: 23,
  isDeveloper: true,
};

// Accessing properties
console.log(person.name);     
// console.log();      

// function

function greet(name) {
  return "Hi, Myself " + name + "!";
}

let message = greet("Vigneshwaran");
console.log(message);


// array
const numbers = [4, 54, 63, 98, 12, 34, 23, 45, 67, 89, 22];

let val;

val = numbers.length;

val = Array.isArray(numbers);

val = numbers[0];

numbers.push(350);

numbers.unshift(120);

numbers.pop();

numbers.shift();

console.log(numbers);