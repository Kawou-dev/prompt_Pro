import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/config/mongoDB";
import PromptModel from "@/app/lib/models/prompt.Model";

export async function GET(NextRequest: Request) {
   try {
       await connectDB();
       const all_prompts = await PromptModel.find({});
       return NextResponse.json({all_prompts}, {status : 200})
   } catch (error) {
       console.error("Error while getting all prompts" , error);
       return NextResponse.json({message: "Error while getting all prompts"} , {status : 500});
   }
}