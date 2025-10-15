import mongoose, { models, model, Schema } from "mongoose";

const PromptSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    content: { type: String, required: true },
    isFavori: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// ✅ Vérifie correctement si le modèle existe déjà avant de le redéfinir
const PromptModel = models?.Prompt || model("Prompt", PromptSchema);

export default PromptModel;




// import mongoose from "mongoose";

// const PromptSchema = new mongoose.Schema({
//     title: {
//         type : String, 
//         required : true   
//     }, 
//     description: {
//         type : String, 
//         required : true   
//     }, 
//     category: {
//         type : String, 
//         required : true   
//     }, 
//     content: {
//         type : String, 
//         required : true   
//     }, 
//     isFavori : {
//         type: Boolean , 
//         required: false ,
//     }
// }, {timestamps : true}) ; 


// const PromptModel = mongoose.models.Prompt  || mongoose.model("Prompt" , PromptSchema ) ; 

// export default PromptModel ;