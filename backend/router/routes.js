const express = require("express");
const router = express.Router();

const {
    registerUser,
    loginUser,
} = require("../controllers/mainControllers");

const {validateRegister, validateLogin} = require("../middleware/validators");

// register new user
router.post("/register", validateRegister, registerUser);

// login user
router.post("/login", validateLogin, loginUser);


module.exports = router;