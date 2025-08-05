import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    clerkId : {
        type : String , 
        required : true , 
        unique : true
    }, 
    username : {
        type: String, 
        // reqiured: true
    },
    email: {
        type: String, 
        required : true, 
    }, 
    image : {
        type : String , 
    }
}, {timestamps : true}) ; 

const UserModel = mongoose.models.User ||  mongoose.model("User" , userSchema ) ; 

export default UserModel ; 