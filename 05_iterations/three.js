// for of

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4];
for (const num of arr) {
	console.log(num);
}

const greetings = "hello world";
for (const greet of greetings) {
	console.log(greet);
}

//Maps
const map = new Map();
map.set("IN", "India");
map.set("USA", "United states of America");
map.set("Fr", "France");
console.log(map);

for (const [key, value] of map) {
	// objects are not iterable by this
	console.log(key, ":-", value);
}
