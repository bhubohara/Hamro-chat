// const express = require('express');

// const dotenv=require("dotenv");
// const chats = require("./data/data");
// const DbConnection = require('./Configuration/DbConnection');
// const  userRoutes = require("./Routes/userRoutes")



// const app = express();
// dotenv.config();

// DbConnection();

// app.use(express.json());//for accept the json data





// app.get("/",(req,res)=>{
//     res.send("api is running");
// });


// app.use('/api/user',userRoutes)

// // app.get("/api/chat",(req,res)=>{
  
// //     res.send(chats);
// // });   

// // app.get("/api/chat/:id",(req,res)=>{
// //     // console.log(req.params.id);

// //     const singleChat = chats.find((ch)=> ch._id===req.params.id);
// //     res.send(singleChat);
// // })


// const PORT = process.env.PORT || 8000

// app.listen(8000, console.log(`server is running on ${PORT}`));
const express = require('express');
const dotenv = require('dotenv');
const DbConnection = require('./Configuration/DbConnection');
const userRoutes = require('./Routes/userRoutes');
const bodyParser = require('body-parser');
const {notFound,errorHandler}= require('./Middleware/MiddlewareError');

const app = express();

dotenv.config();
DbConnection();

// Use body-parser middleware to parse incoming JSON payloads
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/user', userRoutes);


//error handling midlware

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
