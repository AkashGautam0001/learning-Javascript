// 1.Creating a New Array
let techStack = ["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB", "Git"];
let newArrayCreated = [...techStack];
console.log(newArrayCreated);

// 2.Adding New Values in array and object
let arr = ["HTML", "CSS", "JS", "React", "Node"];
let newArr = [...arr, "Git"];
console.log(newArr);

let obj = { name: "PW Skills", course: "Full Stack Web Developer" };
let newObj = { ...obj, rating: 5 };
console.log(newObj);

// 3.Concatenating two arrays
let arr1 = ["HTML", "CSS", "JS"];
let arr2 = ["React", "Node", "Express"];
let concatenatedArray = [...arr1, ...arr2];
console.log(concatenatedArray);

// 4. Spread an array of arguments to be passed as individual params
function maxOfThreeNumbers(num1, num2, num3) {
	return Math.max(num1, num2, num3);
}

let arrayOfNumber = [4, 5, 3];
console.log(maxOfThreeNumbers(...arrayOfNumber));

// 5. Using with Strings
let name = "PW Skills";
let arrayOfCharacters = [...name];
console.log(arrayOfCharacters); // OUTPUT : ['P', 'W', ' ', 'S', 'k', 'i', 'l', 'l', 's']

// 6. Spread Operator with Objects
let obj1 = { name: "PW Skills", course: "Full stack web development" };
let obj2 = { rating: 5, reviews: 2000 };
let newObject = { ...obj1, ...obj2 };
console.log(newObject);

//If two or more objects being spread contain the same property key, the last property value will overwrite the
//previous ones.
let o1 = {
	name: "PW Skills",
	course: "Full stack web development",
	numberOfStudentsEnrolled: 1000,
};
let o2 = { rating: 5, reviews: 2000, numberOfStudentsEnrolled: 2000 };
let newObjCreated = { ...o1, ...o2 };
console.log(newObjCreated);

//Some of the applications where Rest operators are used include
// 1.Collecting all remaining parameters in a function.
// 2.Destructuring

// 1. Rest - Collecting all remaining parameters in a function.
function sumOfAllNumbers(...numbers) {
	return numbers.reduce((acc, curr) => acc + curr);
}
console.log(sumOfAllNumbers(1, 2, 3, 4));
// OUTPUT: 10

//2 Rest - Destructuring
// destructuring an array
let ar = ["HTML", "CSS", "JS", "React", "Node", "Express", "Git"];

let [element1, element2, ...remainingElements] = ar;
console.log(element1); // OUTPUT: HTML
console.log(element2); // OUTPUT: CSS
console.log(remainingElements);
// OUTPUT: [ 'JS', 'React', 'Node', 'Express', 'Git' ]

// destructuring object
let obj11 = {
	name1: "PW Skills",
	course: "Full Stack Web Development",
	rating: 5,
};
let { name1, ...remainingProperties } = obj11;
console.log(name1); // OUTPUT: PW Skills
console.log(remainingProperties);
// OUTPUT: { course: 'Full Stack Web Development', rating: 5 }
