console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/*Note : The reson is that can equlity check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treating as a zero
That why null >= 0 is true 
*/

console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined <= 0);

// strick check =>  ===
console.log("2" === 2);
