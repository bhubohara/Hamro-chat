const mongoose = require ('mongoose');
const bcrypt = require('bcryptjs');


const UserModelSchema = mongoose.Schema({
  
    name: {type:String, required:true
    },
    email : { type: String, require: true,  unique:true,sparse:true},
    password:{
        type:String,required:true
    },
    image :{
        type:String, 
         default:

      "https://thenounproject.com/api/private/icons/1328463/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkP-4XgySfIStz7eeqigGCBa9g_kt7gWThSMzaDiWZwgDAkmmOJEMGMcg6nyqJahGTih8_Waq5vezcCF0QUYivRJXXoA%3D%3D"
    },
},
    {
        timestamps:true,
    },

);

UserModelSchema.methods.matchPassword= async function (enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}


UserModelSchema.pre('save', async function (next){
    if (!this.isModified){
        next();
    }
    const salt = await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
})

const User = mongoose.model("User",UserModelSchema);


module.exports= User;