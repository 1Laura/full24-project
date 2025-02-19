const express = require("express");
const router = express.Router();
// const mainController = require("../controllers/mainControllers");
// router.get("/user", mainController.getUser);
const {
    registerUSer,
    loginUser,
    getAllUsers,
    pokeUser,
} = require("../controllers/mainControllers");

const {validateUsers, validateUserForLogin} = require("../middleware/validators");

// register new user
router.post("/register", validateUsers, registerUSer)

// router.post("/register", registerUSer)

// login user
router.post("/login", validateUserForLogin, loginUser);

// get all users
router.get("/allUsers", getAllUsers);

router.post("/poke", pokeUser)

module.exports = router;