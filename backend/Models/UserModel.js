const mongoose = require ('mongoose');

const UserModelSchema = mongoose.Schema({
    Name: {type:String, required:true
    },
    Email: {
        type:String, required:true
    },
    Password:{
        type:String,required:true
    },
    Image :{
        type:String, required:true, default:

      "https://thenounproject.com/api/private/icons/1328463/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkP-4XgySfIStz7eeqigGCBa9g_kt7gWThSMzaDiWZwgDAkmmOJEMGMcg6nyqJahGTih8_Waq5vezcCF0QUYivRJXXoA%3D%3D"
    },
},
    {
        timestamps:true,
    },

);

const User = mongoose.model("User",UserModelSchema);

module.exports= User;