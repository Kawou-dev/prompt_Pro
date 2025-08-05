import { connectDB } from "@/app/lib/config/mongoDB";
import UserModel from "@/app/lib/models/user.Model";
import { NextResponse } from "next/server";

export async function POST(req: any){

    try {

        await connectDB() ; 
        
        const { clerkId, username , email , image } = await req.json() ; 

        const newUser = {
            clerkId , 
            username ,  
            email , 
            image 
        }

         await UserModel.create(newUser) ; 


     return NextResponse.json({message: "Hello Kawou succed"} , {status : 201})
        
    } catch (error) {
        console.log("Error que je ne vois pas: " , error) ; 
        return NextResponse.json({message: "Internal Error Server"} , {status: 500})
    }

}