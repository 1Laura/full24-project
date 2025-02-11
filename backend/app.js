const express = require("express");
const app = express();
const cors = require("cors");
const {faker} = require("@faker-js/faker");

app.use(cors());
// app.use(cors({
//     origin:"http://localhost:3001/"
// }));

app.use(express.json())//sitas nustatymas leidzia pasiimi duomenis is req.body

app.post("/user", (req, res) => {
    console.log(req.body)
    res.send({ok: "ok"})
})

app.listen(2001);
console.log("server run 2001")