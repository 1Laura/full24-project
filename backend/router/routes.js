const express = require("express");
const router = express.Router();

const {
    registerUser,
    loginUser,
    createPost,
    createColor,
    getColor
} = require("../controllers/mainControllers");

const {validateRegister, validateLogin} = require("../middleware/validators");

// register new user
router.post("/register", validateRegister, registerUser);

// login user
router.post("/login", validateLogin, loginUser);

// create post
router.post("/createpost", createPost);

// create post
router.post("/createcolor", createColor);

// create getcolor
router.get("/getcolor", getColor);

module.exports = router;