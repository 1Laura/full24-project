const express = require("express");
const app = express();
require("dotenv").config();
// console.log(process.env.SECRET_KEY)
const cors = require("cors");
const {uid} = require("uid");
const mainRouter = require("./router/routes");

app.use(cors());
// app.use(cors({
//     origin:"http://localhost:3001/"
// }));
app.use(express.json())//sitas nustatymas leidzia pasiimi duomenis is req.body(is post metodo)

app.use("/", mainRouter);//visos uzklausos keliauja i endpointa


app.listen(2001);
console.log("server run 2001");

const jwt = require("jsonwebtoken");

function login() {

    // jei gerai useris ivede, gaunam siuos duomenis tarkim
    const loggedInUSer = {
        username: "Laura",
        age: 40,
        city: "Vilnius",
        hasDog: true,
    };

    // loggedInUSer -> duomenis, kuriuos noriu uzkuoduoti ,process.env.SECRET_KEY-> mano secretas
    const token = jwt.sign(loggedInUSer, process.env.SECRET_KEY);
    // console.log(token);
}

login();


function updateStuff() {
    const userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkxhdXJhIiwiYWdlIjo0MCwiY2l0eSI6IlZpbG5pdXMiLCJoYXNEb2ciOnRydWUsImlhdCI6MTc0MDI0ODI4OX0.g4USfMtVto8EsJYgRIzudSu02exZ8cy1loQyY-IGrt0"

    // userToken->pirma reiksme yra tokenas, process.env.SECRET_KEY->secretkey
    jwt.verify(userToken, process.env.SECRET_KEY, async (err, item) => {
        // console.log(item)
    })
}

updateStuff();