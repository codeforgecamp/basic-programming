// Define functions to convert temperature units
function convertCelsiusToFahrenheit(celsius) {
	return (celsius * 9) / 5 + 32;
}

function convertFahrenheitToCelsius(fahrenheit) {
	return ((fahrenheit - 32) * 5) / 9;
}

// Prompt user for temperature input
const inputTemp = prompt("Enter temperature value:");
const inputUnit = prompt("Enter temperature unit (C or F):").toUpperCase();

// Convert temperature based on unit
let outputTemp, outputUnit;
if (inputUnit === "C") {
	outputTemp = convertCelsiusToFahrenheit(inputTemp);
	outputUnit = "F";
} else if (inputUnit === "F") {
	outputTemp = convertFahrenheitToCelsius(inputTemp);
	outputUnit = "C";
} else {
	console.log("Invalid temperature unit!");
	// Exit program if input unit is invalid
	process.exit(1);
}

// Display conversion result
console.log(
	`${inputTemp}°${inputUnit} = ${outputTemp.toFixed(2)}°${outputUnit}`
);
