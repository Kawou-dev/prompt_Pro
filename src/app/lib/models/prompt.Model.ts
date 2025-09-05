import mongoose from "mongoose";

const PromptSchema = new mongoose.Schema({
    title: {
        type : String, 
        required : true   
    }, 
    description: {
        type : String, 
        required : true   
    }, 
    category: {
        type : String, 
        required : true   
    }, 
    content: {
        type : String, 
        required : true   
    }, 
    isFavori : {
        type: Boolean , 
        required: false ,
    }
}, {timestamps : true}) ; 


const PromptModel = mongoose.models.Prompt  || mongoose.model("Prompt" , PromptSchema ) ; 

export default PromptModel ;