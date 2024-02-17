// ---- Try Number()
let score = "34";
let valueInNumber = Number(score);
console.log(typeof valueInNumber); //number

let score1 = null;
let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1); //number

let score2 = undefined;
let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2); //number

let score3 = true;
let valueInNumber3 = Number(score3);
console.log(typeof valueInNumber3); //number

let score4 = "akash";
let value = Number(score4);
console.log(value); //NaN

// "34" => 33
// "34abs" => NaN;
// true =>1 ; false =>0

// let isLoggedIn = 1;
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1=>true; 0 => false;
// "" => false;
// "hitesh" => true;

// let someNumber = 78;
// let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// Use in form validation, logging and etc

// *********** Operations ************

// let value = 3;
// let negValue = -value;
// console.log(negValue);

// let str1 = "Hello";
// let str2 = " AKash";

// let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log(+true); // Not preferd
// // console.log(true+); error
// console.log(+""); //Not prefered

// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 3; // valid but not prefer
