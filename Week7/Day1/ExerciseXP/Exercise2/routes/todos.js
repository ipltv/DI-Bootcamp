const express = require('express');

// Sample in-memory database for storing to-do items
const router = express.Router();
const todos = [{ id: 0, text: "Task 1" }];
let nextId = todos.length;

// Get all to-do items
router.get('/todos', (req, res) => {
    if (todos.length === 0) {
        res.status(404).json({ msg: "There is no elements in todos" });
        return;
    };
    res.json(todos);
});

// Add a new to-do item
router.post('/todos', (req, res) => {
    const { text } = req.body;
    const newToDo = { id: nextId++, text };

    todos.push(newToDo);
    res.status(201).json({ msg: "New To-Do was created", newToDo });
});

// Update a to-do item by ID
router.put('/todos/:id', (req, res) => {
    console.log('Params:', req.params);
    console.log('Body:', req.body);

    const { id } = req.params;
    const { text } = req.body;

    const task = todos.find(item => item.id === Number(id));

    if (task) {
        task.text = text;
        res.status(200).json({ msg: "Task was updated", updatedTask: task });
        return;
    };
    res.status(404).json({ msg: "The task not found." })
});

// Delete a to-do item by ID
router.delete('/todos/:id', (req, res) => {
    console.log('Params:', req.params);
    console.log('Body:', req.body);

    const { id } = req.params;
    const taskIndex = todos.findIndex(item => item.id === Number(id));

    if (taskIndex != -1) {
        todos.splice(taskIndex,1);
        res.status(200).json({ msg: `Task with ID ${id} was deleted`});
        return;
    };
    res.status(404).json({ msg: "The task not found." })
});

module.exports = router;