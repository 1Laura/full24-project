const express = require("express");
const router = express.Router();

const {
    registerUser,
    loginUser,
    getAllUsers,
    pokeUser,
} = require("../controllers/mainControllers");

const {validateUsers, validateUserForLogin} = require("../middleware/validators");

// register new user
router.post("/register", validateUsers, registerUser)

// login user
router.post("/login", validateUserForLogin, loginUser);

// get all users
router.get("/allUsers", getAllUsers);

router.post("/poke", pokeUser)

module.exports = router;