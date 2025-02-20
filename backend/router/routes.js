const express = require("express");
const router = express.Router();

const {
    registerUser,
    loginUser,
    getAllUsers,
    pokeUser,
    getNotifications,
    pokeBack,
    deleteAccount
} = require("../controllers/mainControllers");

const {validateUsers, validateUserForLogin} = require("../middleware/validators");

// register new user
router.post("/register", validateUsers, registerUser);

// login user
router.post("/login", validateUserForLogin, loginUser);

// get all users
router.get("/getallusers", getAllUsers);

// Poke a user
router.post("/poke", pokeUser);

// Get notifications
router.post("/getnotifications", getNotifications);

// Poke back
router.post("/pokeback", pokeBack);

// Delete account
router.post("/deleteaccount", deleteAccount);

module.exports = router;