//Deep copy and shell copy ?

// hitesh sir repo

/**
 * An array in JavaScript is a data structure that stores an
ordered list of elements. It can hold elements of any data type,
including numbers, strings, objects, and even other arrays.
Arrays are a type of object in JavaScript and have a number of
built:in methods for adding, removing, and manipulating
elements.
 */
// const language = ["M.S. Dhoni", "Virat Kholi", "Rohit Sharma","KL rahul", "SuryaKumar yadav", "Dinesh kartik"];
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const array = ["Hello", 20, true];

//Using the Array Constructor
let number = new Array(1, 2, 3, 4, 5, 6, 7);
let emptyArray = new Array(5);
// Note : It is generally not recommended to create an array using the Array constructor in JavaScript,

//using array literal
let colors = Array("Black", "Red");

// let player = [];
// player[0] = "virat";
// player[1] = "rohit";

// player[0]; // return virat

// Problem with delete keywords
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers[2] = "virat";
// delete numbers[0];
// console.log(numbers);

// In JavaScript, An array items can be iterated or looped in the
// following ways:
//  for loop
//  for....of loop
//  while loop
//  forEach()

// Think : Explain the role of the “const” keyword when working with arrays in JavaScript. How does using const
// impact common array operations like adding or removing elements? Explain with an example.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers[2] = "virat";
delete numbers[0];
// console.log(numbers);

//------------------ Arrays Method -----------------
const constNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let letNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//pop()
constNumbers.pop();
letNumbers.pop();

//push()
constNumbers.push(54);
letNumbers.push(45);

//shift()
constNumbers.shift();

//unshift()
constNumbers.unshift(0);

//concat()
constNumbers.concat(letNumbers);

//join()
let result = letNumbers.join();
console.log(result);

//slice()
result = letNumbers.slice(1, 6);

//splice()
// let letNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let removed = letNumbers.splice(2, 7, "a", "b", "c");
console.log(removed);

//reverse()
console.log(removed.reverse());

//indexOf()
console.log(removed.indexOf(4));
console.log(removed.indexOf(4, 5)); //removed.indexOf(ele, starting of searching);

//toString()
letNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(letNumbers.toString()); //The toString method of arrays always calls the join() array method internally,

//flat()
const nestDepth = [1, 2, 3, [12, 21, 31, [7, 4, [11, 12, [32, 121, 9]], [98, 34, 23]]]];
console.log(nestDepth.flat(2));
console.log(nestDepth.flat(Infinity));

//isArray()
const arr = "Akash Gautam";
console.log(Array.isArray(arr));

//sort
let randomStuff = [89, 34, 11, 22, 8, 7, 6, 5, 3];
// let result1 = randomStuff.sort();
console.log(randomStuff.sort((a, b) => b - a));
console.log(result1);
console.log("Using let   : " + letNumbers);
console.log("Using Const : " + constNumbers);
