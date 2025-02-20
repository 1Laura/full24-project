const {uid} = require("uid");
const users = [];

module.exports = {
    validateUsers: (req, res, next) => {
        const {username, password1, password2} = req.body;
        // let error = null;
        if (users.find(user => user.username === username)) {
            return res.send({message: "Username is already taken", error: true})
        }
        if (typeof username === "string" && username.length > 0 && username[0] !== username[0].toUpperCase()) {
            return res.send({message: "username should start with upper case letter", error: true})
        }
        if (username.length > 20 || username.length < 4) {
            return res.send({message: "username min 4, max 20 length", error: true});
        }
        if (password1.length < 3) {
            return res.send({message: "password min 3", error: true});
        }
        if (password1 !== password2) {
            return res.send({message: "don't match password", error: true});
        }
        const user = {
            username,
            password1,
            secretKey: uid(),
            notifications: []
        }
        users.push(user);
        req.users = users;
        console.log("Naujas vartotojas pridėtas:", user);
        next();
    },
    validateUserForLogin: (req, res, next) => {
        const {username, password1} = req.body;
        let error = null;
        const userExists = users.find(user => user.username === username && user.password1 === password1);

        if (!userExists) {
            return res.send({message: "don't match user or password", error: true});
        }
        req.user = userExists;//issaugau user, kad galeciau pasiimti controllery
        next();
    }
};