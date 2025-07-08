// Mini Project : Task Management API #1
// This is controllers/taskController.js

const fs = require('fs').promises;
const path = require('path');

const dataFilePath = path.join(__dirname, "../data/tasks.json");

// GET /tasks: Retrieve a list of all tasks from a JSON file.
const getAllTasks = async (req, res) => {
    console.log("getAllTasks route");
    try {
        try {
            await fs.access(dataFilePath);
        } catch {
            console.log("File does not exist.");
            return res.status(404).json({ msg: "Tasks file wasn't found." });
        }
        const content = await fs.readFile(dataFilePath, "utf-8");
        const tasks = JSON.parse(content);
        res.json(tasks);
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Get all tasks error" });
    }
};

// GET /tasks/:id: Retrieve a specific task by ID from the JSON file.
const getTaskById = async (req, res) => {
    console.log("getTaskById route");
    try {
        try {
            await fs.access(dataFilePath);
        } catch {
            console.log("File does not exist.");
            res.status(404).json({ msg: "Tasks file wasn't found." });
            return;
        }

        const content = await fs.readFile(dataFilePath, "utf-8");
        const tasks = JSON.parse(content);

        const { id } = req.params;
        const numId = parseInt(id);
        if (isNaN(numId) || numId <= 0) {
            res.status(400).json({ msg: "Request should contain positive numeric 'id' field." });
            return;
        }

        const task = tasks.find(item => item.id === numId);
        if (task === -1) {
            res.status(404).json({ msg: `The task with provided ID ${id} wasn't found.` });
            return;
        }
        res.json(task);
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Get a task by ID error." });
    }
};

// POST /tasks: Create a new task and store it in the JSON file.
const createNewTask = async (req, res) => {
    console.log("createNewTask route");
    try {
        try {
            await fs.access(dataFilePath);
        } catch {
            console.log("File does not exist.");
            return res.status(404).json({ msg: "Tasks file wasn't found." });
        }
        const content = await fs.readFile(dataFilePath, "utf-8");
        const tasks = JSON.parse(content);
        const { taskMessage } = req.body;
        if (!taskMessage) {
            res.status(400).json({ msg: "Request should contain non-empty 'taskMessage' field." });
            return;
        }
        const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
        const newTask = { id: newId, taskMessage };
        tasks.push(newTask);

        await fs.writeFile(dataFilePath, JSON.stringify(tasks, null, 2), "utf-8");
        res.status(201).json({ msg: "New task was created.", newTask });
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Create a new task error." });
    }
};

// PUT /tasks/:id: Update a task by ID in the JSON file.
const updateTaskById = async (req, res) => {
    console.log("updateTaskById route");
    try {
        try {
            await fs.access(dataFilePath);
        } catch {
            console.log("File does not exist.");
            res.status(404).json({ msg: "Tasks file wasn't found." });
            return;
        }

        const content = await fs.readFile(dataFilePath, "utf-8");
        const tasks = JSON.parse(content);

        const { id } = req.params;
        const numId = parseInt(id);
        if (isNaN(numId) || numId < 0) {
            res.status(400).json({ msg: "Request should contain a positive numeric 'id' field." });
            return;
        }

        const { taskMessage } = req.body;
        if (!taskMessage) {
            res.status(400).json({ msg: "Request should contain non-empty 'taskMessage' field." });
            return;
        }

        const updatedTask = tasks.find(item => item.id === numId);
        if (!updatedTask) {
            res.status(404).json({ msg: `The task with provided ID ${id} wasn't found.` });
            return;
        }

        updatedTask.taskMessage = taskMessage;
        await fs.writeFile(dataFilePath, JSON.stringify(tasks, null, 2), "utf-8");
        res.json({ msg: `Task with ID ${id} was updated`, updatedTask });
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Update task error." });
    }
};

// DELETE /tasks/:id: Delete a task by ID from the JSON file.
const deleteTaskById = async (req, res) => {
    console.log("deleteTaskById route");
    try {
        try {
            await fs.access(dataFilePath);
        } catch {
            console.log("File does not exist.");
            res.status(404).json({ msg: "Tasks file wasn't found." });
            return;
        }

        const content = await fs.readFile(dataFilePath, "utf-8");
        const tasks = JSON.parse(content);

        const { id } = req.params;
        const numId = parseInt(id);
        if (isNaN(numId) || numId <= 0) {
            res.status(400).json({ msg: "Request should contain positive numeric 'id' field." });
            return;
        }

        const deletedTaskIndex = tasks.findIndex(item => item.id === numId);
        if (deletedTaskIndex === -1) {
            res.status(404).json({ msg: `The task with provided ID ${id} wasn't found.` });
            return;
        }

        tasks.splice(deletedTaskIndex, 1);
        await fs.writeFile(dataFilePath, JSON.stringify(tasks, null, 2), "utf-8");
        res.json({ msg: `Task with ID ${id} was deleted` });
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Delete a task error." });
    }
};

module.exports = {
    getAllTasks,
    getTaskById,
    createNewTask,
    updateTaskById,
    deleteTaskById
};

//This is routes/taskRouter.js
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

//This is server.js
const express = require('express');
const postRouter = require('./routes/taskRouter.js');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(postRouter);

app.use((req, res, next) => {
  res.status(404).json({ msg: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    msg: err.message || 'Internal Server Error'
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});