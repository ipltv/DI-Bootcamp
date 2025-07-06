const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  searchUsers,
  addUser,
  updateUser
} = require("../controllers/usersController.js");

const router = Router();

/** C(rud) - Create - POST - add a user */
router.post("/", addUser);
/** (c)R(ud) - Read - GET - search users */
router.get("/search", searchUsers);
/** (c)R(ud) - Read - GET - get one user */
router.get("/:id", getUserById);
/** (c)R(ud) - Read - GET - get all users */
router.get("/", getAllUsers);

router.put('/users/update/:id', updateUser);

module.exports = router;
