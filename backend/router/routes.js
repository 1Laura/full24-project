const express = require("express");
const router = express.Router();

const {
    registerUser,
    loginUser,
    createPost,
} = require("../controllers/mainControllers");

const {validateRegister, validateLogin} = require("../middleware/validators");

// register new user
router.post("/register", validateRegister, registerUser);

// login user
router.post("/login", validateLogin, loginUser);

// create post
router.post("/createpost", createPost);


module.exports = router;