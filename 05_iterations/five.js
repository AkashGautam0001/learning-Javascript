const coding = ["js", "ruby", "java", "javascript", "cpp"];
coding.forEach(function (num) {
	console.log(num);
});

coding.forEach((num) => {
	console.log(num);
});

function printMe(item) {
	console.log(item);
}

coding.forEach(printMe); //Note : only reference is given printMe() not given

coding.forEach((item, index, arr) => {
	console.log(item, index, arr);
});

const language = [
	{
		languageName: "Javascript",
		languageFileName: "js",
	},
	{
		languageName: "python",
		languageFileName: "py",
	},
	{
		languageName: "java",
		languageFileName: "java",
	},
];

language.forEach((item) => {
	console.log(item.languageName);
});
