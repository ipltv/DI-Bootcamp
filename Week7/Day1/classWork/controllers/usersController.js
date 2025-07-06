const { users } = require("../models/usersModel.js");

/** (cru)D - Delete - DELETE - delete a user */

/** (cr)U(d) - Update - PUT - update a user */

const updateUser = (req, res) => {
  const {id} = req.params;
  const {name, email} = req.body;
  console.log(id);
  console.log(users);
  const user = users.find(item => item.id === Number(id));
  if (user){
    user.name = name;
    user.email = email;
    res.status(200).json({msg:"User updated", user});
    return;
  }
  res.status(404).json({msg: "User not found"});
};

/** add user */
const addUser = (req, res) => {
  //   console.log(req.body);
  const { name, email } = req.body;

  try {
    const newUser = { name, email, id: users.length + 1 };
    users.push(newUser);
    res.json(users).status(201);
  } catch (error) {
    res.sendStatus(404);
  }
};

/** search users */
const searchUsers = (req, res) => {
  const { name } = req.query;

  const filteredUsers = users.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });

  if (filteredUsers.length === 0) {
    res.json({ message: "no user match your search" }).status(404);
    return;
  }
  res.json(filteredUsers);
};

/** get one user */
const getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find((item) => item.id == id);
  if (!user) {
    // res.status(404).json({ message: "User not found" });
    res.sendStatus(404);
  }
  res.json(user);
};

/** get all users */
const getAllUsers = (req, res) => {
  try {
    res.json(users);
  } catch (error) {
    res.sendStatus(404);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  searchUsers,
  addUser,
  updateUser
};
