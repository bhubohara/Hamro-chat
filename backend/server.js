const express = require('express');

const dotenv=require("dotenv");
const chats = require("./data/data");


const app = express();
dotenv.config();



app.get("/",(req,res)=>{
    res.send("api is running");
});

app.get("/api/chat",(req,res)=>{
  
    res.send(chats);
});   

app.get("/api/chat/:id",(req,res)=>{
    // console.log(req.params.id);

    const singleChat = chats.find((ch)=> ch._id===req.params.id);
    res.send(singleChat);
})


const PORT = process.env.PORT ||8000

app.listen(8000, console.log(`server is running on ${PORT} ` ));

// change