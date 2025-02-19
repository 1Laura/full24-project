// controller galutine logika, jei uzklausa be jokiu klaidu
const {uid} = require("uid");
let users = [];

module.exports = {
    registerUSer: (req, res) => {
        const {username, password1, password2} = req.body;
        let error = null;
        const userExists = users.some(user => user.username === username);
        if (userExists) {
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
        ;

        const user = {
            username,
            password1,
            secretKey: uid(),
            notifications: []
        }
        users.push(user);
        // console.log(users);
        res.send({message: "User created", error: false});
    },

    loginUser: (req, res) => {
        const {username, password1} = req.body;
        let error = null;
        //some() – grąžina true, jei bent vienas masyvo elementas atitinka sąlygą.
        const userExists = users.some(user => user.username === username && user.password1 === password1);
        if (!userExists) {
            return res.send({message: "don't match user or password", error: true});
        }
        res.send({message: "User logged in", error: false, secretKey: userExists.secretKey});
    },
    getAllUsers: (req, res) => {
        console.log(users)
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