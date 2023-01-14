const express = require("express")

const app = express()

app.use(express.json()); 
app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.send("hello niggas")
})

app.post("/login", (req, res) => {
    const {users, passwords} = req.body;
    try{
        if(users === "admin" && passwords === "test2345") {
            res.status(200).json("login successful")
        }else{
            throw Error("fuck outta here nigga ")
        }
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

app.listen("7001", () => {
    console.log("app now running on port 7001")
})