for (var i = 1; i <= 100; i++) {
	var isMultipleOf3 = i % 3 === 0;
	var isMultipleOf5 = i % 5 === 0;

	if (isMultipleOf3 && isMultipleOf5) {
		console.log("FizzBuzz");
	} else if (isMultipleOf3) {
		console.log("Fizz");
	} else if (isMultipleOf5) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
}
