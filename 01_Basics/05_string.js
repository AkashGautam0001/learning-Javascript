/*String Immutability - Strings are immutable, which means that once a string is created, it cannot be changed.
This immutability applies to individual characters within the string as well as the string as a whole. When you
perform string operations or use non-string methods on a string, a new string is created rather than modifying
the original string.*/

//---
let str = "Hello";
str[0] = "b"; //not chabge occur
console.log(str);

let firstName = "Akash";
let fullName = firstName.concat("Gautam");
console.log(fullName);

//----
console.log("Hello".at(1));
console, log("Hello".at(-1));

console.log(fullName.charAt(4));

//-----
console.log(fullName.endsWith("with"));
console.log(fullName.endsWith("with", 3));

//-----
console.log(fullName.includes("c"));

//-----
console.log(fullName.indexOf("k"));

//-----
console.log(fullName.padEnd(10, "!"));

console.log("343434".padStart(10, "*"));

//-----
console.log("Hello".repeat(5));

//-----
console.log(fullName.replace("Gautam", "Kumar"));
console.log(fullName.replaceAll("a", "u"));

//---- seraching with regex expression
const str1 = "The quick brown fox jumps over the lazy dog.";
const regex = /\bfox\b/;
const index1 = str1.search(regex);
console.log(index1);

//-----
console.log(fullName.slice(6));
console.log(fullName.slice(6, 11));

//-----
console.log(fullName.split(","));

//-----
console.log(fullName.substring(2, 7));

//-----
console.log("Hello world".toLowerCase());
console.log("Hello world".toUpperCase());

//------
console.log("          akash          ".trim());
console.log("       end     ".trimEnd());
console.log("       start     ".trimStart());
