// Defining a function for each mathematical operation
function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

// The calculator function
function calculator() {
	// Prompt user for input
	const num1 = parseFloat(prompt("Enter the first number:"));
	const num2 = parseFloat(prompt("Enter the second number:"));
	const operator = prompt("Enter the operation (+, -, *, /):");

	let result;

	// Perform calculation based on the chosen operator
	switch (operator) {
		case "+":
			result = add(num1, num2);
			break;
		case "-":
			result = subtract(num1, num2);
			break;
		case "*":
			result = multiply(num1, num2);
			break;
		case "/":
			result = divide(num1, num2);
			break;
		default:
			console.log("Invalid operator.");
			return;
	}

	// Print the result
	console.log(`${num1} ${operator} ${num2} = ${result}`);
}

// Calling the calculator function to run the program
calculator();
