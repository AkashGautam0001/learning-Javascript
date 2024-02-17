const myOject = {
	js: "javacript",
	cpp: "C++",
	rb: "ruby",
	swift: "swift by apple",
};

for (const key in myOject) {
	//Maximum used for Map
	// console.log(myOject[key]);
}

//Noted : array has also key and value pair
const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
	// console.log(key);
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United states of America");
map.set("Fr", "France");

for (const key in map) {
	// Map are not iteratable using "in loop";
	console.log(key);
}
