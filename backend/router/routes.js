const express = require("express");
const router = express.Router();

const {
    registerUser,
    loginUser,
    createPost,
    createColor,
    getColor
} = require("../controllers/mainControllers");

const {validateRegister, validateLogin} = require("../middleware/validators");//validatoriai yra objektas su funkcijomis del to galiu destrukturizuoti, is objekto pasiimu keysus

const userAuth = require("../middleware/userAuth"); //negaliu destrukturizuoti, nes userAuth yra tiesiogiai funkcija

// register new user
router.post("/register", validateRegister, registerUser);

// login user
router.post("/login", validateLogin, loginUser);

// create post
router.post("/createpost", userAuth, createPost);

// create post
router.post("/createcolor",userAuth, createColor);

// create getcolor
router.get("/getcolor", getColor);

module.exports = router;