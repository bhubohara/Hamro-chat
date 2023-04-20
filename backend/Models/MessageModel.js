const mongoose = require ('mongoose');

const MessageModel = mongoose.Schema(
    {
        
            Sender:{ 
                type:mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            Contents:{
                type:String, trim: true
             
            },
            Chats :{
                type:mongoose.Schema.Types.ObjectId, 
                ref:"User"
            },
            
        },
        {
            timestamps:true,
            
        }
        
);

const Messages = mongoose.model("Messages",MessageModel);

module.exports = Messages;