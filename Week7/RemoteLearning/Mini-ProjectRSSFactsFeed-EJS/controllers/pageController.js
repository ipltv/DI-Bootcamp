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