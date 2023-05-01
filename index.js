// Create an array to store the tasks
const tasks = [];

// Function to add a task to the array
function addTask(task) {
	tasks.push(task);
}

// Function to remove a task from the array
function removeTask(task) {
	const index = tasks.indexOf(task);
	if (index > -1) {
		tasks.splice(index, 1);
	}
}

// Function to display the tasks in the array
function displayTasks() {
	if (tasks.length === 0) {
		console.log("There are no tasks to display.");
	} else {
		console.log("Tasks:");
		tasks.forEach((task, index) => {
			console.log(`${index + 1}. ${task}`);
		});
	}
}

// Add some tasks to the array
addTask("Make a list of exhausted groceries for restocking");
addTask("Drive to the mall");
addTask("Make a quick stop at the laundromart");
addTask("Attempt CodeForge assignment");
addTask("Attend Codeforge meeting by 8pm");

// Display the tasks
displayTasks();

// Remove a task from the array
removeTask("Make a list of exhausted groceries for restocking");

// Display the tasks again
displayTasks();
