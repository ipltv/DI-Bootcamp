import express from 'express';
const app = express();
const PORT = 5000;

const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925
  },
  {
    id: 4,
    title: "Brave New World",
    author: "Aldous Huxley",
    publishedYear: 1932
  }
];

//(c)R(ud) GET /api/books: Return a list of all books.
app.get('/api/books', (req, res) => {
    if (books.length === 0) {
        res.status(404).json({ message: "There is no books." });
        return;
    }
    res.json(books);
});

/**(c)R(ud) GET /books/:id Return a specific book based on its id. */
app.get('/api/books/:bookId', (req, res) => {
    const id = parseInt(req.params.bookId);
    const book = books.find((item) => item.id === id);
    if (!book) {
        res.status(404).json({ message: "Book not found." });
        return;
    };
    res.status(200).json(book);
});

/** body-parser with JSON */
app.use(express.json());
/** C(rud) - Create - POST /posts: Create a new blog post. */
app.post('/api/books', (req, res) => {
    try {
        const { title, author } = req.body;
        const publishedYear = parseInt(req.body.publishedYear);
        if (!title || !author || isNaN(publishedYear)) {
            return res.status(400).json({ message: "Title, content and published year are required." });
        }
        const newbook = { id: books.length, title, author, publishedYear };
        books.push(newbook);
        res.status(201).json(newbook);
    } catch (error) {
        res.status(500).json({ message: "Error creating post." });
        console.log(error);
        console.log(req.body);

    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});