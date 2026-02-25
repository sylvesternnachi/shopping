// String

const firstName = 'John';

const choir = {
    gender: 'Male',
    vocalType: 'Tenor',
    age: 30
};

console.log(firstName, typeof firstName);

choir.gender = 'Female';
choir.vocalType = 'Auto';

console.log(choir);

console.log(choir, typeof choir)

// Number
const age = 28;

//Boolean
const isMarried = true;

//Null
const aptNumber = null;

//Undefined
let score;

// Symbol
const id = Symbol('id');

//Reference Types

const numbers  = [1,2,3,4];

const person = {
    name: 'John',
};

const newPerson = person;

newPerson.name = 'Nnachi';

console.log(newPerson.name);
console.log(person.name);

function sayHello(){
    console.log('Hello World');
}

const output = sayHello;

console.log(output, typeof output);


// Day 2 – Data Types

// Primitive example
let a = 10;
let b = a;
b = 20;

console.log(b)

// Reference example
let user1 = { name: "Sylvester" };
let user2 = user1;
user2.name = "Founder";

console.log(user2.name)



const user = {
  name: "Sylvester",
  age: 28,
  skills: ["Design", "HTML", "CSS"],
};


let newAge = user.age;
newAge++;

console.log(newAge);