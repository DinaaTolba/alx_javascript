const request = require('request');

const url = process.argv[2];

request(url, (error, response, body) => {
    if (error) {
        console.error(error);
        return;
    }

    if (response.statusCode !== 200) {
        console.error(`Error: ${response.statusCode}`);
        return;
    }

    const todos = JSON.parse(body);

    // Initialize an object to store the count of completed tasks for each user
    const completedTasksByUser = {};

    // Loop through each todo item
    todos.forEach(todo => {
        // Check if the task is completed
        if (todo.completed) {
            // Increment the count of completed tasks for the user
            if (completedTasksByUser[todo.userId]) {
                completedTasksByUser[todo.userId]++;
            } else {
                completedTasksByUser[todo.userId] = 1;
            }
        }
    });

    // Print the number of completed tasks for each user
    console.log(completedTasksByUser);
});
