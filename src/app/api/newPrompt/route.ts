import { connectDB } from "@/app/lib/config/mongoDB";
import PromptModel from "@/app/lib/models/prompt.Model";
import { NextResponse } from "next/server";



//  give get method to fetch all prompts
export async function GET(request: Request) {
    try {
        await connectDB();
        const prompts = await PromptModel.find({});
        return NextResponse.json({ prompts }, { status: 200 });
    } catch (error) {
        console.error("Erreur lors de la recuperation des prompts", error);
        return NextResponse.json({ message: "Erreur lors de la recuperation des prompts", error }, { status: 500 });
    }
}


export async function POST(request: Request) {
  
     const {title, description, category , content} = await request.json()

        try {   
            await connectDB() ;

            if(!title || !description || !category || !content) {
                return NextResponse.json({message : "Tous les champs sont obligatoires"}, {status : 400}) ;
            }

            const newPrompt = await PromptModel.create({title, description, category, content}) ;
            return NextResponse.json({message : "Prompt cree avec succes", newPrompt}, {status : 201}) ;
            
        }catch (error) {
            console.error("Erreur lors de la creation du prompt" , error) ;
            return NextResponse.json({message : "Erreur lors de la creation du prompt" , error}, {status : 500}) ;
        }




}