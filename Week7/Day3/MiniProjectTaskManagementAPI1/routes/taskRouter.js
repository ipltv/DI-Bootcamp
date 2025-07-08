const express = require('express');
const taskController = require('../controllers/tasksController.js');
const router = express.Router();

// GET /tasks: Retrieve a list of all tasks from a JSON file.
router.get('/tasks', taskController.getAllTasks);
// GET /tasks/:id: Retrieve a specific task by ID from the JSON file.
router.get('/tasks/:id', taskController.getTaskById);
// POST /tasks: Create a new task and store it in the JSON file.
router.post('/tasks', taskController.createNewTask);
// PUT /tasks/:id: Update a task by ID in the JSON file.
router.put('/tasks/:id', taskController.updateTaskById);
// DELETE /tasks/:id: Delete a task by ID from the JSON file.
router.delete('/tasks/:id', taskController.deleteTaskById);

module.exports = router;