import express from 'express';
const app = express();
const PORT = 3000;
const data = [
    {
        id: 0,
        title: "Understanding JavaScript Closures",
        content: "A closure is the combination of a function bundled together with references to its surrounding state."
    },
    {
        id: 1,
        title: "Getting Started with React",
        content: "React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small, isolated pieces of code called components."
    },
    {
        id: 2,
        title: "Node.js: Server-side JavaScript",
        content: "Node.js allows developers to use JavaScript to write server-side code, making it possible to build scalable network applications."
    },
    {
        id: 3,
        title: "CSS Flexbox in Practice",
        content: "Flexbox is a layout model that makes it easier to design flexible and responsive layout structures without using float or positioning."
    }
];
let ID_COUNT = data.length;

//(c)R(ud) GET /posts: Return a list of all blog posts.
app.get('/posts', (req, res) => {
    if (data.length === 0) {
        res.status(404).json({ message: "There is no posts." });
        return;
    }
    res.json(data);
});

/**(c)R(ud) GET /posts/:id Return a specific blog post based on its id. */
app.get('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = data.find((item) => item.id === id);
    if (!post) {
        res.status(404).json({ message: "Post not found." });
        return;
    };
    res.json(post);
});

/** body-parser with JSON */
app.use(express.json());
/** C(rud) - Create - POST /posts: Create a new blog post. */
app.post('/posts', (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required." });
        }
        const newPost = { id: ID_COUNT++, title, content };
        data.push(newPost);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: "Error creating post." });
        console.log(error);
        console.log(req.body);

    }
});

/** (cr)U(d) PUT /posts/:id: Update an existing blog post. */
app.put('/posts/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { title, content } = req.body;
        const post = data.find((item) => item.id == id);
        if (!post) {
            res.status(404).json({ message: "Post not found." });
            return;
        }
        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required." });
        }
        post.title = title;
        post.content = content;
        res.json(post);
    } catch (error) {
        res.status(400).json({ message: "Post wasn't updated. The error has occured." });
    }
});

/** (cru)D DELETE /posts/:id: Delete a blog post. */

app.delete('/posts/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const index = data.findIndex(post => post.id === id);
        if (index == -1) {
            res.status(404).json({ message: "Post not found." });
            return;
        }
        data.splice(index, 1);
        res.json({ message: "Post deleted." });
    } catch (error) {
        res.status(400).json({ message: "Post wasn't deleted." });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});