// Daily Challenge : Task API #2

//This is server.js
const express = require('express');
const userRouter = require('./routes/userRouter.js');
const path = require('path');
require('dotenv').config();

const app = express();


app.use(express.json());
app.use(userRouter);
app.use(express.static(path.join(__dirname, './public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login', 'login.html'));
});


//EJS initialization
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

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
        if (error.code === '23505'){
            res.status(409).json({msg: `User with this username or email has alredy existed.`});
            return;
        }
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

//This is login.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="..\style.css">
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js" defer></script>
    <script src="loginscript.js" defer async></script>
</head>

<body>
    <h2>Login: </h2>
    <form id="loginForm">
        <label for="usernameText">Username:</label><input type="text" id="usernameText" name="username" required>
        <label for="passwordField">Password:</label><input type="password" id="passwordField" name="password" required>
        <div></div><input type="submit" value="Login">
    </form>
    <p id="response"></p>
    <a href="/">Go To Register page</a>
</body>

</html>
</form>

//This is index.html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js" defer></script>
    <script src="script.js" defer async></script>
</head>

<body>
    <h2>Register:</h2>
    <form id="registerForm">
        <label for="firstNameField">First Name:</label><input type="text" id="firstNameField" name="firstName" required>
        <label for="lastNameField">Last Name:</label><input type="text" id="lastNameField" name="lastName" required>
        <label for="email">Email:</label><input type="email" id="email" name="email" required>
        <label for="usernameText">Username:</label><input type="text" id="usernameText" name="username" required>
        <label for="passwordField">Password:</label><input type="password" id="passwordField" name="password" required>
        <div></div><input type="submit" value="Submit">
    </form>
    <p id="response"></p>
    <a href="/login">Go To Login page</a>
</body>

</html>

//This is script.js
const form = document.getElementById("registerForm");

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = form.username.value;
    const password = form.password.value;
    const first_name = form.firstName.value;
    const last_name = form.lastName.value;
    const email = form.email.value;

    try {     
        const response = await axios.post('/register', {
            email,
            username,
            first_name,
            last_name,
            password
        });

        console.log("Success", response.data);
        showResponse("Done! You are registered now!", "ok");

    } catch (error) {
        const errorText = error.response?.data || error.message;
        console.log("Register data sending error: ", errorText);
        showResponse(errorText.msg, "error");
    }
});

const showResponse = (text, result = "ok") => {
    const pElement = document.getElementById('response');
    if (result === "ok") {
        pElement.classList.add("ok");
        pElement.classList.remove("error");
    } else {
        pElement.classList.add("error");
        pElement.classList.remove("ok");
    }
    pElement.classList.add("visible");
    pElement.classList.add("hidden");;
    pElement.innerText = text;

    setTimeout(() => {
        pElement.innerText = "";
        pElement.classList.remove("visible");
        pElement.classList.add("hidden");;
    },
        4000);
};

//This is loginscript.js
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    try {
        const response = await axios.post('/login', {
            username,
            password
        });

        console.log("Success", response.data);
        showResponse(`Done! ${username}, you are authorized now!`, "ok");

    } catch (error) {
        const errorText = error.response?.data || error.message;
        console.log("Login error: ", errorText);
        showResponse(errorText.msg, "error");
    }
});

const showResponse = (text, result = "ok") => {
    const pElement = document.getElementById('response');
    if (result === "ok") {
        pElement.classList.add("ok");
        pElement.classList.remove("error");
    } else {
        pElement.classList.add("error");
        pElement.classList.remove("ok");
    }
    pElement.classList.add("visible");
    pElement.classList.add("hidden");;
    pElement.innerText = text;

    setTimeout(() => {
        pElement.innerText = "";
        pElement.classList.remove("visible");
        pElement.classList.add("hidden");;
    },
        4000);
};
