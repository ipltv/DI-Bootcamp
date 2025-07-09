// Mini-Project - RSS Facts Feed - EJS
//This is server.js

const express = require('express');
const pageRouter = require('./routes/pageRouter');
const path = require('path');
require('dotenv').config();

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(pageRouter);

app.use((req, res, next) => {
  res.status(404).json({ msg: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    msg: err.message || 'Internal Server Error'
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

//This is routes/pageRouter.js
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

//This is controllers/pageController.js
//BEGIN: this block was added from the task
let Parser = require('rss-parser');
let parser = new Parser();
let posts = [];
let categories = new Set();

(async () => {
    try {
        let feed = await parser.parseURL('https://thefactfile.org/feed/');
        posts = feed.items.map(item => ({
            title: item.title,
            url: item.link,
            date: item.pubDate,
            creator: item.creator || 'Unknown',
            category: item.categories?.[0] || 'General',
            content: item.contentSnippet
        }));
        posts.forEach(item => {
            categories.add(item.category);
        });
    } catch (error) {
        console.error('Error fetching RSS:', error);
    }
})();

const getIndex = (req, res) => {
    res.render('pages/index', { posts });
};

const getSearch = (req, res) => {
    res.render('pages/search', { posts: [], categories });
};

const searchByTitle = (req, res) => {
    const { title } = req.body;
    
    let filteredPosts = posts;

    if (title) {
        filteredPosts = filteredPosts.filter(p => p.title.toLowerCase().includes(title.toLowerCase()));
    }

    res.render('pages/search', { posts: filteredPosts, categories });
}

const searchByCategory = (req, res) => {
    const { category } = req.body;
    let filteredPosts = posts;

    if (category) {
        filteredPosts = filteredPosts.filter(p => p.category === category);
    }

    res.render('pages/search', { posts: filteredPosts, categories });
}

module.exports = {
    getIndex,
    getSearch,
    searchByTitle,
    searchByCategory
};

//This is views/pages/index.ejs
<!DOCTYPE html>
<html lang="en">
  <%- include('../partials/head.ejs') %>
  <body>
    <%- include('../partials/header.ejs') %>
    <div class="container">
      <%- include('../partials/posts.ejs') %>
    </div>
    <%- include('../partials/footer.ejs') %>
  </body>
</html>

//This is views/pages/search.ejs
<!DOCTYPE html>
<html lang="en">
<%- include('../partials/head.ejs') %>

  <body>
    <%- include('../partials/header.ejs') %>

      <div class="container">
        <form method="POST" action="/search/title">
          <div class="mb-3">
            <label>Search by Title:</label>
            <input type="text" name="title" class="form-control" />
          </div>
          <button type="submit" class="btn btn-primary">Search</button>
        </form>

        <form method="POST" action="/search/category">
          <div class="mb-3">
            <label>Search by Category:</label>
            <select name="category" class="form-select">
              <% categories.forEach(function(category) { %>
                <option value="<%= category %>">
                  <%= category %>
                </option>
                <% }) %>
            </select>
          </div>
          <button type="submit" class="btn btn-secondary">Search</button>
        </form>

        <%- include('../partials/posts.ejs') %>
      </div>

      <%- include('../partials/footer.ejs') %>
  </body>

</html>

//This is views/partials/head.ejs
<head>
  <meta charset="UTF-8">
  <title>My Blog</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="/css/style.css">
  <!-- <script src="/js/main.js" defer></script> -->
</head>

//This is views/partials/header.ejs
<nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
  <div class="container">
    <a class="navbar-brand" href="/">Fact Blog</a>
    <div class="navbar-nav">
      <a class="nav-link" href="/">Home</a>
      <a class="nav-link" href="/search">Search</a>
    </div>
  </div>
</nav>


//This is views/partials/posts.ejs
<div class="row">
  <% posts.forEach(function(post) { %>
    <div class="col-md-6 mb-4">
      <div class="card">
        <div class="card-body">
          <h5><a href="<%= post.url %>" target="_blank"><%= post.title %></a></h5>
          <p><strong>Date:</strong> <%= post.date %></p>
          <p><strong>Creator:</strong> <%= post.creator %></p>
          <p><strong>Category:</strong> <%= post.category %></p>
          <p><%= post.content %></p>
        </div>
      </div>
    </div>
  <% }) %>
</div>

//This is views/partials/footer.ejs
<footer>
  <p>&copy; Copyright 2025 …</p>
</footer>

//This is puvlic/style.css
    body {
        padding: 20px;
    }

    footer {
        margin-top: 30px;
        text-align: center;
    }