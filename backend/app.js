const express = require("express");
const app = express();
require("dotenv").config();
// console.log(process.env.SECRET_KEY)
const cors = require("cors");
const {uid} = require("uid");
const mainRouter = require("./router/routes");
const bcrypt = require('bcrypt')
app.use(cors());
// app.use(cors({
//     origin:"http://localhost:3001/"
// }));
app.use(express.json())//sitas nustatymas leidzia pasiimi duomenis is req.body(is post metodo)

app.use("/", mainRouter);//visos uzklausos keliauja i endpointa


app.listen(2001);
console.log("server run 2001");