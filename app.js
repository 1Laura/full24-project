const express = require("express");
const app = express();
const {faker, fa} = require("@faker-js/faker");

const users = [];
//routes
app.get("/create/:name", (req, res) => {
    const user = {
        name: req.params.name,
        id: faker.string.uuid(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        ipAddress: faker.internet.ip(),
    };

    users.push(user)
    console.log(users)
    res.send({message: `user created ${user.id}, ${user.name} ${user.lastName}, ${user.email}, ${user.ipAddress}`});
})

app.get("/usersList", (req, res) => {
    res.send({users});//duomenys siunciami objekte
});


// kaip pasiimti name -> req.params.name
app.get("/info/:name", (req, res) => {
    const username = req.params.name
    console.log(req.params.name);
    // res.send({success: true,});
    res.send({message: "value of param is " + username,});
});

app.get("/data", (req, res) => {
    console.log("sfsfd");
    res.send({message: "fghdfh"});
});

app.get("/some", (req, res) => {
    console.log("sdfsaf");
    // res.send({success: true,});
    res.send({message: "all good",});
});

app.listen(2002);
console.log("server run 2002")