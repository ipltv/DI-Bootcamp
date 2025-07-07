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