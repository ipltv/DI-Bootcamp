const express = require('express');
const postController = require('../controllers/bookController.js');
const router = express.Router();

// GET /posts: Return a list of all books.
router.get('/', postController.getAllBooks);

// GET /posts/:id: Return a specific book based on its id.
router.get('/:bookId', postController.getBookById);

// POST /posts: Create a new book.
router.post('/', postController.createNewBook);

module.exports = router;