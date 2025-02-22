const {uid} = require("uid");
const validator = require("email-validator");

module.exports = {
    validateRegister: (req, res, next) => {
        const {email, username, password} = req.body;

        if (username.length < 4 || username.length > 20) {
            return res.send({message: "username min 4, max 20 length", error: true});
        }
        if (password.length < 3 || password.length > 20) {
            return res.send({message: "password min 3, max 20", error: true});
        }
        if (!validator.validate(email)) return res.send({message: "incorrect email", error: true});
        // console.log("Naujas vartotojas pridėtas");
        next();
    },
    validateLogin: (req, res, next) => {
        const {username, password} = req.body;

        if (username.length < 4 || username.length > 20) {
            return res.send({message: "username min 4, max 20 length", error: true});
        }
        if (password.length < 3 || password.length > 20) {
            return res.send({message: "password min 3, max 20", error: true});
        }
        // console.log("login");
        next();
    }
};