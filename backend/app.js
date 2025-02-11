const express = require("express");
const app = express();
const {faker} = require("@faker-js/faker");

let users = [];

//routes
// create backend logic:
// 1) user should be able to register. user provides username and password;
// 2) on registration respond success message or error message;
// 3) if user with same name exists, do not let register;
//
// When user registers, let him login/
// user should provide username and password, if username and password correct, return whole user object as response, if not correct, write error message, what is wrong (for example: bad username)

app.get("/register/:name/:password", (req, res) => {
    const user = {
        username: req.params.name,
        password: req.params.password,
        id: faker.string.uuid(),
    }
    if (user.username === null && user.password === null) {
        return res.send({message: "Username or password not entered"});
    }
    const userExists = users.find(user => user.username === req.params.name)
    // console.log(userExists);
    if (userExists) {
        return res.send({message: `A user with ${userExists.username} already exists.`});
    }
    users.push(user)
    res.send({message: `user ${user.username} registered`});
})

app.get("/login/:name/:password", (req, res) => {
    const loginUser = {
        username: req.params.name,
        password: req.params.password,
    }
    const userRegistered = users.find(user => user.username === loginUser.username && user.password === loginUser.password)
    if (!userRegistered) {
        return res.send({message: `Such a user is not registered.`});
    }
    res.send({message: `user ${loginUser.username} and pass ${loginUser.password} logged in`});
})
app.get("/usersList", (req, res) => {

    res.send({users});//duomenys siunciami objekte
});
app.get("/remove/:id", (req, res) => {
    const id = req.params.id;
    const userExists = users.find(user => user.id === id);
    if (!userExists) {
        return res.send({message: "User doesn't exist"});
    }
    users = users.filter(user => user.id !== id)
    res.send({message: "User deleted"});

});

app.listen(2002);
console.log("server run 2002")