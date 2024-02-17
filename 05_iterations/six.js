// const coding = ["js", "ruby", "java", "javascript", "cpp"];

//forEach loop take array or values and perform the operation and also can print
// const values = coding.forEach((item) => {
// 	console.log(item);
// 	return item;
// });
// console.log(values);
//Above are the disadvantages so we have another method
// which are decribe below.

//filter return values --- Note : return values
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) => num > 4);
// const newNums = myNums.filter((num) => {
// num = num > 4;
// return num;
// return num > 4;
// });

const newNums = [];
myNums.forEach((num) => {
	if (num > 4) {
		newNums.push(num);
	}
});
console.log(newNums);
