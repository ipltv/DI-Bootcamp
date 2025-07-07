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