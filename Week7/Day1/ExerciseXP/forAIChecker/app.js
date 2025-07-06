// Implementation: Exercise 1: Creating a Simple Express.js Application with Routes
// This is app.js file

const express = require('express');
const app = express();

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

//This is routes/index.js file

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

router.get('/about', (req, res) => {
  res.send('About Us');
});

module.exports = router;

// Implementation: Exercise 2: Simple to-do list exercise using Express.js and express.Router.
// This is app.js file
const express = require('express');
const toDoRoutes = require('./routes/todos.js');
const app = express();
/** body-parser with JSON */
app.use(express.json());

app.use(toDoRoutes);

app.listen(5000, () => {
  console.log("Listening on port " + 5000)
})

//This is routes/todos.js
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

//  Exercise 3: Basic API for managing a list of books using Express.js and express.Router.
//This is app.js
const express = require('express');
const bookRoutes = require('./routes/bookRoutes');
const app = express();

/** body-parser with JSON */
app.use(express.json());

app.use(bookRoutes);

app.listen(5000, () => {
  console.log("Listening on port " + 5000)
});
//This is bookRoutes.js
const express = require('express');

// Sample in-memory database for storing books
const router = express.Router();
const books = [{ id: 0, title: "1984", author: "George Orwell" }];
let nextId = books.length;

// Get all books
router.get('/books', (req, res) => {
    if (books.length === 0) {
        res.status(404).json({ msg: "There are no books in the library" });
        return;
    };
    res.json(books);
});

// Add a new book
router.post('/books', (req, res) => {
    const { title, author } = req.body;
    const newBook = { id: nextId++, title, author };

    books.push(newBook);
    res.status(201).json({ msg: "New book was added", newBook });
});

// Update a book by ID
router.put('/books/:id', (req, res) => {
    console.log('Params:', req.params);
    console.log('Body:', req.body);

    const { id } = req.params;
    const { title, author } = req.body;

    const book = books.find(item => item.id === Number(id));

    if (book) {
        book.title = title;
        book.author = author;
        res.status(200).json({ msg: "Book was updated", updatedBook: book });
        return;
    };
    res.status(404).json({ msg: "The book was not found." });
});

// Delete a book by ID
router.delete('/books/:id', (req, res) => {
    console.log('Params:', req.params);

    const { id } = req.params;
    const bookIndex = books.findIndex(item => item.id === Number(id));

    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        res.status(200).json({ msg: `Book with ID ${id} was deleted` });
        return;
    };
    res.status(404).json({ msg: "The book was not found." });
});

module.exports = router;
