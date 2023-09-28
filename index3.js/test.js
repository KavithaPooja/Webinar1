//import express

const express = require('express');

//create express app

const app = express();

//use express.json() middleware

app.use(express.json());

//create a sample todo list array

const todoList = [
    {
        id: 1,
        title: 'Learn Node.js',
        completed: false
    },
    {
        id: 2,
        title: 'Learn Express',
        completed: false
    },
    {
        id: 3,
        title: 'Learn MongoDB',
        completed: false
    }
];

//create a GET route to fetch all todos

app.get('/todos', (req, res) => {
    res.send(todoList);
});

//create a GET route to fetch a single todo

//create a POST route to add a new todo

//create a PUT route to update a todo

//create a DELETE route to delete a todo

// create a PATCH/PUT route to update a todo status

// create a fallback route for all other routes.

//listen on port 3000
app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
});