
function say(word) {
	console.log(word);
}

function execute(someFunction, value) {
	someFunction(value);
}

execute(say, "Hello");

// Can also define function without naming it
execute(function (word) { console.log(word) }, "Hello");