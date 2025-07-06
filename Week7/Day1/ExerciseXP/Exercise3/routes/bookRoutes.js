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
