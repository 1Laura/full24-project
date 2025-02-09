const express = require("express");
const app = express();

//route
app.get("/some", (req, res) => {
    console.log("sdfsaf");
    // res.send({success: true,});
    res.send({message: "all good",});
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


app.listen(2002);
console.log("server run 2002")