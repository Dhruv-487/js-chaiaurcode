// Importing the built-in 'fs' (File System) module in Node.js
const fs = require('fs');

// File path where tasks will be stored
const filePath = "./tasks.json";

// Function to load tasks from the file
const loadTasks = () => {
    try {
        // Read the file content as a buffer
        const dataBuffer = fs.readFileSync(filePath);

        // Convert buffer data to string
        const dataJSON = dataBuffer.toString();

        // Parse JSON string into JavaScript array/object
        return JSON.parse(dataJSON);
    }
    catch (error) {
        // If file doesn't exist or error occurs, return empty array
        return [];
    }
};

// Function to save tasks into the file
const saveTasks = (tasks) => {
    // Convert tasks array/object into JSON string
    const dataJSON = JSON.stringify(tasks);

    // Write JSON string into the file (overwrite old data)
    fs.writeFileSync(filePath, dataJSON);
};

// Function to add a new task
const addTask = (task) => {
    // Load existing tasks
    const tasks = loadTasks();

    // Push new task as an object into the array
    tasks.push({ task });

    // Save updated tasks array into file
    saveTasks(tasks);

    console.log("Task added:", task);
};

// Function to list all tasks
const listTasks = () => {
    // Load existing tasks
    const tasks = loadTasks();

    // Loop through tasks and display them with index numbers
    tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`));
};

// Function to remove a task by its index (1-based index)
const removeTask = (taskNumber) => {
    // Load existing tasks
    const tasks = loadTasks();

    // Filter out the task that matches the given index
    const updatedTasks = tasks.filter((_, index) => index !== taskNumber - 1);

    // Save the updated task list into the file
    saveTasks(updatedTasks);

    console.log(`Task ${taskNumber} removed successfully!`);
};

// Get command-line arguments
const command = process.argv[2]; // The command (e.g., "add", "list", "remove")
const argument = process.argv[3]; // The argument (task text or task index)

// Handle different commands
if (command === 'add') {
    addTask(argument); // Add new task
}
else if (command === 'list') {
    listTasks(); // Show all tasks
}
else if (command === 'remove') {
    removeTask(parseInt(argument)); // Remove task by index
}
else {
    console.log("Command not found!");
}

/*
----------------------------------
How to use:
----------------------------------
1) Add a new task:
   node app.js add "Buy milk"

2) List all tasks:
   node app.js list

3) Remove a task (by number shown in list):
   node app.js remove 2
----------------------------------
*/
