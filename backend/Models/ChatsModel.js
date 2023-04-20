// Import the Mongoose library
const mongoose = require('mongoose');

// Create a new Mongoose schema for the ChatModel
const ChatModel = mongoose.Schema(
  {
    // Define a field for the chat name, which is a string that is trimmed
    ChatName: { type: String, trim: true },
    // Define a field for whether the chat is a group chat or not, which is a boolean with a default value of false
    isGroupChat: { type: Boolean, default: false },
    // Define a field for the users in the chat, which is an array of user object IDs
    Users: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference the User model
    }],
    // Define a field for the latest message in the chat, which is a reference to the Message model
    NewMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message", // Reference the Message model
    },
    // Define a field for the administrator of the group chat, which is a reference to the User model
    GroupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference the User model
    },
  },
  {
    // Define the options for the schema, including timestamps
    timestamps: true,
  }
);

// Create a Mongoose model based on the ChatModel schema
const chats = mongoose.model("chats", ChatModel);

// Export the chats model as a module
module.exports = chats;