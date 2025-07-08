//BEGIN: this block was added from the task
let Parser = require('rss-parser');
let parser = new Parser();
let posts = [];

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
    } catch (error) {
        console.error('Error fetching RSS:', error);
    }
})();
//END

const getIndex = (req, res) => {
    res.render('index', { posts });
};

const getSearch = (req, res) => {
    const { title, category } = req.query;
    let filteredPosts = posts;

    if (title) {
        filteredPosts = filteredPosts.filter(p => p.title.toLowerCase().includes(title.toLowerCase()));
    }

    if (category) {
        filteredPosts = filteredPosts.filter(p => p.category === category);
    }

    res.render('search', { posts: filteredPosts });
};

module.exports = {
    getIndex,
    getSearch
};