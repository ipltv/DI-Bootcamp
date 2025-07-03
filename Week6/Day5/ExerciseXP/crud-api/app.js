import express from 'express';
import {fetchPosts} from './data/dataService.js';

const app = express();
const PORT = 5000;

app.get('/api/external-posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    res.json(posts);
    console.log("Posts has been loaded successfully.");
    console.log(posts);
    
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    res.status(500).json({ message: 'Failed to fetch external posts' });
  }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});