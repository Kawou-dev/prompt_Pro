import { NextResponse } from "next/server";
import { connectDB } from "../config/mongoDB";
import UserModel from "../models/user.Model";



export async function  syncUser(user : any){
    try {
        await connectDB() ; 
        const newUser = await UserModel.create({user}) ; 
        return NextResponse.json({message: "User creé avec succès", newUser} , {status : 201})
    } catch (error) {
        console.error("Erreur lors de la creation du user" , error) ; 
        return NextResponse.json({message : "Erreur lors de la creation du user"} , {status : 500}) ; 
    }
}