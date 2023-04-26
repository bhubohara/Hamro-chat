// const express = require('express');
// const asyncHandler = require('express-async-handler');
// const user = require('../Models/UserModel');
// const generateToken = require('../Configuration/GenerateToken')

// const registeruser = asyncHandler(async(req,res)=>{

//     const {  name,email,password,image  }=req.body;

//     if (!name || !email || !password){
//         res.status(400);
//         throw new Error("All fields are mandatory ")
//     }

//     const userExist= await user.findOne({email});
//     if (userExist){
//         res.status(400);
//         throw new Error("User already registered in this email");
//     }

//     const Newuser = await user.create({
//         name,
//         email,
//         password,
//         image,
//     });

//     if (Newuser){
//         res.status(201).json({
//             id:Newuser.id,
//             name:Newuser.name,
//             email:Newuser.email,
//             password:Newuser.password,
//             image:Newuser.image,
//             token:generateToken(Newuser.id),
//         });
//     }
//     else{
//         res.status(400);
//         throw new Error("Failed to create please try again ");
//     }

// });

// module.exports={registeruser};

// const express = require('express');
// const bodyParser = require('body-parser');
// const asyncHandler = require('express-async-handler');
// const User = require('../Models/UserModel');
// const generateToken = require('../Configuration/GenerateToken');

// const app = express();

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));


// // parse application/json
// app.use(bodyParser.json());

// const registeruser = asyncHandler(async (req, res) => {
//   const { name, email, password, image } = req.body;

//   if (!name || !email || !password) {
//     res.status(400);
//     throw new Error('All fields are mandatory');
//   }

//   const userExist = await User.findOne({ email });

//   if (userExist) {
//     res.status(400);
//     throw new Error('User already registered with this email');
//   }

//   const user = await User.create({
//     name,
//     email,
//     password,
//     image,
//   });

//   if (user) {
//     res.status(201).json({
//       id: user.id,
//       name: user.name,
//       email: user.email,
//       password: user.password,
//       image: user.image,
//       token: generateToken(user.id),
//     });
//   } else {
//     res.status(400);
//     throw new Error('Failed to create user. Please try again.');
//   }
// });



// module.exports = {registeruser};





const express = require('express');
const asyncHandler = require('express-async-handler');
const User = require('../Models/UserModel');
const generateToken = require('../Configuration/GenerateToken');

const registeruser = asyncHandler(async (req, res) => {

  const { name, email, password, image } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already registered with this email");
  }

  const newUser = new User({
    name,
    email,
    password,
    image,
  });

  const createdUser = await newUser.save();

  if (createdUser) {
    res.status(201).json({
      id: createdUser.id,
      name: createdUser.name,
      email: createdUser.email,
      password: createdUser.password,
      image: createdUser.image,
      token: generateToken(createdUser.id),
    });
  }
  else {
    res.status(400);
    throw new Error("Failed to create user. Please try again.");
  }

});

const authUser =asyncHandler (async(req,res)=>{
  const {email,password}=req.body;

  const user=await User.findOne({email});

  if (user &&(await user.matchPassword(password))){
    res.json({
      id:user.id,
      name:user.name,
      password:user.password,
      email:user.email,
      image:user.image,
      token: generateToken(user.id)


    })
    
  }
})

module.exports = { registeruser,authUser };
