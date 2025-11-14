// import { connectDB } from "@/app/lib/config/mongoDB";
// import PromptModel2 from "@/app/lib/models/PromptModel2";
// import { NextResponse } from "next/server";


// export async function POST(request: Request) {
//   try {
//     await connectDB();

//     const body = await request.json();

//     // validation basique
//     if (!body.title || !body.description || !body.category || !body.content) {
//       return NextResponse.json({ error: "Missing fields" }, { status: 400 });
//     }

//     // body.content doit être un objet JSON (Tiptap)
//     if (typeof body.content !== "object") {
//       return NextResponse.json({ error: "content must be an object (Tiptap JSON)" }, { status: 400 });
//     }

//     const prompt = await PromptModel2.create({
//       title: body.title,
//       description: body.description,
//       category: body.category,
//       content: body.content,
//       isFavori: !!body.isFavori,
//     });

//     return NextResponse.json({ ok: true, prompt }, { status: 201 });
//   } catch (err: any) {
//     console.error("API error", err);
//     return NextResponse.json({ error: err?.message ?? "Server error" }, { status: 500 });
//   }
// }





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
  
     const {title, description, category , socialMedia,  content} = await request.json()

        try {   
            await connectDB() ;

            if(!title || !description || !category || !content) {
                return NextResponse.json({message : "Tous les champs sont obligatoires"}, {status : 400}) ;
            }

            const newPrompt = await PromptModel.create({title, description, category, socialMedia, content}) ;
            return NextResponse.json({message : "Prompt cree avec succes", newPrompt}, {status : 201}) ;
            
        }catch (error) {
            console.error("Erreur lors de la creation du prompt" , error) ;
            return NextResponse.json({message : "Erreur lors de la creation du prompt" , error}, {status : 500}) ;
        }




}