const db = require('../config/db.js');

const getAllPosts = async (req, res) => {
    try {
        const rows = await db('posts').select('id', 'title', 'content');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Database error (get all posts)." });
    };
    console.log("getAllPosts route");
};

const getPostById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ msg: "Request should contain non-empty 'id' field." });
        return;
    };

    try {
        const rows = await db('posts').select('id', 'title', 'content').where('id', id);

        if (rows.length === 0) {
            res.status(404).json({ msg: `Post with id ${id} not found.` });
            return;
        };

        res.json(rows[0]);
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Database error (get post by ID.)" });
    };
    console.log("getPostById route");
};

const createNewPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            res.status(400).json({ msg: "Request should contain non-empty 'title' and 'content' fields." });
            return;
        };

        const [newPost] = await db('posts').insert({ title, content }, ['id', 'title', 'content']);

        res.status(201).json({ msg: "New post was created", newPost });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Database error (create new post)." });
    }
    console.log("createNewPost route");
};

const updatePostById = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        if (!title || !content || isNaN(id)) {
            res.status(400).json({ msg: "Request should contain numeric 'id', and non-empty 'title' and 'content'." });
            return;
        }

        const [updatedPost] = await db('posts')
            .where('id', id)
            .update({
                title: title,
                content: content
            }, ['id', 'title', 'content']);

        if (!updatedPost) {
            return res.status(404).json({ msg: `Post with ID ${id} not found.` });
        }

        res.status(200).json({ msg: `Post with ID ${id} was updated`, updatedPost });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Database error (update post by ID)." });
    }
    console.log("updatePostById route");
};

const deletePostById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ msg: "Request should contain non-empty 'id' field." });
        return;
    }

    try {
        const [deletedPost] = await db('posts')
            .where('id', id)
            .del(['id', 'title', 'content']);

        if (!deletedPost) {
            return res.status(404).json({ msg: `Post with ID ${id} not found.` });
        }

        res.status(200).json({ msg: `Post with ID ${id} was deleted`, deletedPost});
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Database error (update post by ID)." });
    }
    console.log("deletePostById route");
};

module.exports = {
    getAllPosts,
    getPostById,
    createNewPost,
    updatePostById,
    deletePostById
};