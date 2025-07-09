const express = require('express');
const pageController = require('../controllers/pageController.js');
const router = express.Router();

// GET /
router.get('/', pageController.getIndex);

// GET /search
router.get('/search', pageController.getSearch);

// POST /search/title
router.post('/search/title', pageController.searchByTitle);

// POST /search/category
router.post('/search/category', pageController.searchByCategory);

module.exports = router;
