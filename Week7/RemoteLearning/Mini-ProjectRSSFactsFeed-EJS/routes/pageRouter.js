const express = require('express');
const pageController = require('../controllers/pageController.js');
const router = express.Router();

// GET /
router.get('/', pageController.getIndex);

// GET /search
router.get('/search', pageController.getSearch);

module.exports = router;
