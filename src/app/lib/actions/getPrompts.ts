import { connectDB } from "../config/mongoDB";
import PromptModel from "../models/prompt.Model";



export const getPrompt = async() => {
    
    try {
        await connectDB() ; 
        const prompts = await PromptModel.find({}) ; 
        return prompts  ; 
    } catch (error) {
        throw new Error("Erreur lors de la recuperation des prompts")
    }

}