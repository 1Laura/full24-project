const express = require("express");
const app = express();

app.get("/some", (req, res) => {
    console.log("labas");
    res.send({message: "all good"})
})

app.listen(2001)
console.log("server run")