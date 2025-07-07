// Implementation:  Exercise 1 : Building a RESTful API with database connection
//This is config/db.js
require('dotenv').config();
const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'postgres'
  }
});

module.exports = db;
//This is controllers/postController.js
const db = require('../config/db.js');

const getAllPosts = async (req, res) => {
    try {
        const rows = await db('posts').select('id', 'title', 'content');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Database error (get all posts)." });
    };
    console.log("getAllPosts route");
};

const getPostById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ msg: "Request should contain non-empty 'id' field." });
        return;
    };

    try {
        const rows = await db('posts').select('id', 'title', 'content').where('id', id);

        if (rows.length === 0) {
            res.status(404).json({ msg: `Post with id ${id} not found.` });
            return;
        };

        res.json(rows[0]);
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Database error (get post by ID.)" });
    };
    console.log("getPostById route");
};

const createNewPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            res.status(400).json({ msg: "Request should contain non-empty 'title' and 'content' fields." });
            return;
        };

        const [newPost] = await db('posts').insert({ title, content }, ['id', 'title', 'content']);

        res.status(201).json({ msg: "New post was created", newPost });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Database error (create new post)." });
    }
    console.log("createNewPost route");
};

const updatePostById = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        if (!title || !content || isNaN(id)) {
            res.status(400).json({ msg: "Request should contain numeric 'id', and non-empty 'title' and 'content'." });
            return;
        }

        const [updatedPost] = await db('posts')
            .where('id', id)
            .update({
                title: title,
                content: content
            }, ['id', 'title', 'content']);

        if (!updatedPost) {
            return res.status(404).json({ msg: `Post with ID ${id} not found.` });
        }

        res.status(200).json({ msg: `Post with ID ${id} was updated`, updatedPost });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Database error (update post by ID)." });
    }
    console.log("updatePostById route");
};

const deletePostById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ msg: "Request should contain non-empty 'id' field." });
        return;
    }

    try {
        const [deletedPost] = await db('posts')
            .where('id', id)
            .del(['id', 'title', 'content']);

        if (!deletedPost) {
            return res.status(404).json({ msg: `Post with ID ${id} not found.` });
        }

        res.status(200).json({ msg: `Post with ID ${id} was deleted`, deletedPost});
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Database error (update post by ID)." });
    }
    console.log("deletePostById route");
};

module.exports = {
    getAllPosts,
    getPostById,
    createNewPost,
    updatePostById,
    deletePostById
};
//This is routes/postRouter.js
const express = require('express');
const postController = require('../controllers/postController.js');
const router = express.Router();

// GET /posts: Return a list of all blog posts.
router.get('/posts', postController.getAllPosts);

// GET /posts/:id: Return a specific blog post based on its id.
router.get('/posts/:id', postController.getPostById);

// POST /posts: Create a new blog post.
router.post('/posts', postController.createNewPost);

// PUT /posts/:id: Update an existing blog post.
router.put('/posts/:id', postController.updatePostById);

// DELETE /posts/:id: Delete a blog post.
router.delete('/posts/:id', postController.deletePostById);

module.exports = router;
//This is server.js
const express = require('express');
const postRouter = require('./routes/postRouter');
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


// Implementation:  Exercise 2 : Building a Basic CRUD API with database connection
//This is config/db.js
require('dotenv').config();
const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'postgres'
  }
});

module.exports = db;

//This is controllers/bookController.js
const db = require('../config/db.js')

const getAllBooks = async (req, res) => {
    try {
        const rows = await db('books').select('id', 'title', 'author', 'publishedyear');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Database error (get all books)." });
    };
    console.log("getAllBooks route");
};

const getBookById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ msg: "Request should contain non-empty 'id' field." });
        return;
    };

    try {
        const rows = await db('books').select('id', 'title', 'author', 'publishedyear').where('id', id);

        if (rows.length === 0) {
            res.status(404).json({ msg: `Book with id ${id} not found.` });
            return;
        };

        res.json(rows[0]);
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Database error (get book by ID.)" });
    };
    console.log("getBookById route");
};

const createNewBook = async (req, res) => {
        try {
        let { title, author,  publishedyear} = req.body;
        publishedyear = Number(publishedyear);
        if (!title || !author || isNaN(publishedyear)){
            res.status(400).json({ msg: "Request should contain non-empty 'title', 'author' and  numeric 'publishedyear' fields." });
            return;
        };

        const [newBook] = await db('books').
        insert({ title, author,  publishedyear} , ['id', 'title', 'author', 'publishedyear']);

        res.status(201).json({ msg: "New book was created", newBook });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Database error (create new book)." });
    }
    console.log("createNewBook route");
};

module.exports = {
    getAllBooks,
    getBookById,
    createNewBook,
};

//This is routes/bookRouter.js
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

//This is server.js
const express = require('express');
const bookRouter = require('./routes/bookRouter.js');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api/books', bookRouter);

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