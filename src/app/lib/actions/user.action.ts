"use server";

import { connectDB } from "../config/mongoDB";
import UserModel from "../models/user.Model";

export async function syncUser(user: any) {
  try {
    await connectDB();
    const existingUser = await UserModel.findOne({
            $or: [
                { clerkId: user.clerkId },
                { email: user.email }
            ]
        });

        if (existingUser) {
        console.log("User déjà existant :", existingUser.email);
        return; 
        }

    const newUser = await UserModel.create(user);
    console.log("User créé:", newUser);
    return newUser;
  } catch (error) {
    console.error("Erreur lors de la création du user ---> action", error);
    throw error;
  }
}
