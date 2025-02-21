const {uid} = require("uid");
let users = [];
let notifications = [];

module.exports = {
    registerUser: (req, res) => {
        users = req.users;// users array is validators
        // console.log("all users after registration " + users)
        res.send({message: "User created", error: false, users});
    },

    loginUser: (req, res) => {//iš req galiu pasiimti user, ir is jo secretkey
        res.send({message: "User logged in", error: false, secretKey: req.user.secretKey});
    },

    getAllUsers: (req, res) => {
        const {users} = req.body;
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
    },
    getNotifications: (req, res) => {
        console.log(req.body);
        const {secretKey} = req.body;
        const user = users.find(user => user.secretKey === secretKey);
        if (!user) {
            return res.send({message: "Invalid secret key", error: true});
        }
        const userNotifications = notifications.filter(notific => notific.receiver === user.username);
        res.send({message: "Notifications retrieved", error: false, notifications: userNotifications});
    },
    pokeBack: (req, res) => {
        const {secretKey, username} = req.body;
        const sender = users.find(user => user.secretKey === secretKey);
        if (!sender) {
            return res.send({message: "Invalid secret key", error: true});
        }
        const receiver = users.find(user => user.username === username);
        if (!receiver) {
            return res.send({message: "User to poke not found", error: true});
        }
        const notification = {
            receiver: receiver.username,
            sender: sender.username,
            timestamp: new Date()
        };
        notifications.push(notification);
        res.send({message: `${sender.username} poked back ${receiver.username}`, error: false});
    },
    deleteAccount: (req, res) => {
        const {secretKey, password} = req.body;
        const userIndex = users.findIndex(user => user.secretKey === secretKey);
        if (userIndex === -1) {
            return res.send({message: "Invalid secret key", error: true});
        }

        const user = users[userIndex];
        if (user.password1 !== password) {
            return res.send({message: "Incorrect password", error: true});
        }

        users.splice(userIndex, 1);

        notifications = notifications.filter(notif => notif.sender !== user.username && notif.receiver !== user.username);
        res.send({message: "Account deleted successfully", error: false});
    }
}