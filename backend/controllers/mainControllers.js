// controller galutine logika, jei uzklausa be jokiu klaidu
const {uid} = require("uid");

let users = [];

module.exports = {
    registerUSer: (req, res) => {
        // const {username, password1, password2} = req.body;
        // let error = null;

        console.log("all users after registration "+users);
        res.send({message: "User created", error: false});
    },

    loginUser: (req, res) => {//iš req galiu pasiimti user, ir is jo secretkey
        // const {username, password1} = req.body;
        // const userExists = users.find(user => user.username === username && user.password1 === password1);
        //
        // if (!userExists) {
        //     return res.send({message: "Incorrect username or password", error: true});
        // }
        res.send({message: "User logged in", error: false, secretKey: req.user.secretKey});
    },

    getAllUsers: (req, res) => {
        console.log("is get All users " + users)
        res.send({message: "send all users", users})
    },
    pokeUser: (req, res) => {
        const {username, secretKey} = req.body;
        const sender = users.find(user => user.secretKey === secretKey);
        if (!sender) {
            res.send({message: "Invalid secret key", error: true})
        }
        const receiver = users.find(user => user.username === username);
        if (!receiver) {
            res.send({message: "User to poke not found", error: true})
        }
        const notification = {
            receiver: receiver.username,
            sender: sender.username,
            timestamp: new Date()
        };

        users.notifications.push(notification);
        res.send({message: `${sender.username} poked ${receiver.username}`, error: false});
    }
}