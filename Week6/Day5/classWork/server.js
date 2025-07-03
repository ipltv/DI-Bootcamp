const express = require('express');
const {users} = require("./models/data.js");

const app = express();

const PORT = 3001
app.listen(PORT, () => {
    console.log(`run on ${PORT}`); 
});

/** midlleware - function */
app.use('/aaa',express.static(__dirname + '/public'));

/** body-parser with JSON */
app.use(express.json());

/** C(rud) - Create - POST - add a user */
app.post('/users', (req, res) => 
{
    console.log(req.body);
    const {name, email } = req.body;
    const newUser = {name, email, id: users.length + 1};
    users.push(newUser);
    res.json(users);    
});



/**(c)R(ud) - READ - GET - search users*/
app.get('/search', (req, res) => {
    const {name} = req.query;
    const filteredUsers = users.filter(item => {
        return item.name.toLowerCase().includes(name.toLowerCase());
    });
    if (filteredUsers.length === 0){
        res.status(404).json({message: "no user match your"});
        return;
    }
    res.json(filteredUsers);
});

/**(c)R(ud) - READ - GET - get one user */
app.get('/users/:id', (req, res) =>
{
    const {id} = req.params;
    const user = users.find((item) => item.id == id);
    if (!user){
        res.status(404).json({message: "User not found"});
    };    
    res.json(user);
});

/** R - Read - GET - get all users */
app.get('/users', (req, res) => 
{
    res.json(users);
});

/**
 * app.get
 * app.post
 * app.delete
 * app.put
 */

/**
 * API - 
 */

/**
 * CRUD - Create, Read, Update, Delete
 * RESTful API.
 * 
 * Create - POST
 * Read - GET
 * Update - PUT
 * Delete - DELETE
 * 
 * /users - GET - get all users/one user
 * /users - POST - create new user
 * /users - PUT - update a user
 * /users - DELETE - delete a user
 */