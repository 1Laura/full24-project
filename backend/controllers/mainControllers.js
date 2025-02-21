const {uid} = require("uid");
const users = [];
module.exports = {
    registerUser: (req, res) => {
        const {email, username, password} = req.body;
        users.push({email, username, password});
        res.send({message: "register"});
    },

    loginUser: (req, res) => {//iš req galiu pasiimti user, ir is jo secretkey
        const {username, password} = req.body;
        const myUser = users.find(user => user.username === username && user.password === password);

        if (myUser) {
            res.send({message: "login", users});
        } else {
            res.send({message: "user doesn't exist",})
        }
    }
}