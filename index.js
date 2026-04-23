const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors())
app.use(express.json());

// api
app.get("/", (req, res) => {
    res.send("User management server is running")
})

const users = [
    {id: 1, name:"Sabana", email:"sabana@gmail.com"},
    {id: 2, name:"Sabnoor", email:"sabanoor@gmail.com"},
    {id: 3, name:"Sabila noor", email:"sabila@gmail.com"},
];

app.get("/users", (req, res)=>{
    res.send(users);
})

app.post("/users", (req, res)=>{
    console.log("Post api called",req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, ()=>{
    console.log(`User management server is started port ${port}`)
})