// Implementation:  Daily Challenge : Registration & Login
// This is config/db.js
require('dotenv').config();
const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'postgres'
  }
});

module.exports = db;

//This is controllers/userController.js
const db = require('../config/db.js');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    console.log("registerUser route");
    try {
        const { email, username, first_name, last_name, password } = req.body;
        if (!email || !username || !first_name || !last_name || !password) {
            res.status(400).json({ msg: "Request should contain non-empty 'email', 'username', 'first_name' and 'last_name'  fields." });
            return;
        }

        let addedUser;
        await db.transaction(async trx => {
            [addedUser] = await trx("users")
                .insert({ email, username, first_name, last_name }, ['id', 'email', 'username', 'first_name', 'last_name']);

            const hash = await bcrypt.hash(password, 10);
            await trx("hashpwd")
                .insert({ username, password: hash });
        })
        res.status(201).json({ msg: `User was registered`, addedUser });

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Database error (register user)." });
    }
};

const loginUser = async (req, res) => {
    console.log("loginUser route");
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            res.status(400).json({ msg: "Request should contain non-empty 'username' and 'password' fields." });
            return;
        }

        const [record] = await db('hashpwd').select("password").where({ username });
        if (!record) {
            return res.status(401).json({ msg: "Unauthorized" });
        }
        const isValid = await bcrypt.compare(password, record.password);
        if (isValid) {
            res.json({ msg: "Authorized" });
            return
        }
        res.status(401).json({ msg: "Unauthorized" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Database error (login user)." });
    }
};

const getAllUsers = async (req, res) => {
    console.log("getAllUsers route");
    try {
        const rows = await db('users').select('id', 'email', 'username', 'first_name', 'last_name');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Database error (get all users)." });
    };
};

const getUserById = async (req, res) => {
    console.log("getUserById route");
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ msg: "Request should contain non-empty 'id' field." });
        return;
    };

    try {
        const rows = await db('users').select('id', 'email', 'username', 'first_name', 'last_name').where('id', id);

        if (rows.length === 0) {
            res.status(404).json({ msg: `User with id ${id} not found.` });
            return;
        };

        res.json(rows[0]);
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Database error (get user by ID.)" });
    };
};

const updateUserById = async (req, res) => {
    console.log("updateUserById route");
    try {
        const { id } = req.params;
        const { email, username, first_name, last_name, password } = req.body;
        
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            return res.status(400).json({ msg: "ID should be a valid number." });
        }
        if (!email || !username || !first_name || !last_name) {
            res.status(400).json({ msg: "Request should contain numeric 'id', and non-empty 'email', 'username', 'first_name' and 'last_name' fields." });
            return;
        }

        const userRows = await db('users').select('username').where('id', id);
        if (userRows.length === 0) {
            return res.status(404).json({ msg: `User with ID ${id} not found.` });
        }
        const oldUsername = userRows[0].username;

        let updatedUser;
        await db.transaction(async trx => {
            [updatedUser] = await trx('users')
                .where('id', id)
                .update({
                    email,
                    username,
                    first_name,
                    last_name
                }, ['id', 'email', 'username', 'first_name', 'last_name']);

            const hashpwdUpdate = { username };
            if (password) {
                const hash = await bcrypt.hash(password, 10);
                hashpwdUpdate.password = hash;
            }
            await trx('hashpwd')
                .where('username', oldUsername)
                .update(hashpwdUpdate);
        })
        res.status(200).json({ msg: `User with ID ${id} was updated`, updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Database error (update user by ID)." });
    }
};

module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUserById
};

//This is routes/userRouter.js
const express = require('express');
const userController = require('../controllers/userController.js');
const router = express.Router();

// POST /register: Allow users to register by providing a username and password. Hash the password using bcrypt before storing it in the the database
router.post('/register', userController.registerUser);

// POST /users/:id: Allow users to login by providing their username and password. Compare the hashed password from the JSON file with the provided password.
router.post('/login', userController.loginUser);

// GET /users: Retrieve a list of all registered users from the database
router.get('/users', userController.getAllUsers);

// GET /users/:id: Retrieve a specific user by ID from the database
router.get('/users/:id', userController.getUserById);

// PUT /users/:id: Update a user’s information by ID in the database
router.put('/users/:id', userController.updateUserById);

module.exports = router;

//This is server.js
const express = require('express');
const userRouter = require('./routes/userRouter.js');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(userRouter);

app.use((req, res, next) => {
  res.status(404).json({ msg: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    msg: err.message || 'Internal Server Error'
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});