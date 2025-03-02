const express = require("express");
const router = express.Router();

const {
    registerUser,
    loginUser,
    getInventory,
} = require("../controllers/mainControllers");

const {validateRegister, validateLogin} = require("../middleware/validators");//validatoriai yra objektas su funkcijomis del to galiu destrukturizuoti, is objekto pasiimu keysus

const userAuth = require("../middleware/userAuth"); //negaliu destrukturizuoti, nes userAuth yra tiesiogiai funkcija

// register new user
router.post("/register", validateRegister, registerUser);

// login user
router.post("/login", validateLogin, loginUser);

// user inventory page
router.get("/inventory", userAuth, getInventory);

module.exports = router;