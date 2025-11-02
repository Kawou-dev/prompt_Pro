"use server";
 



import { currentUser } from "@clerk/nextjs/server";
import { connectDB } from "../config/mongoDB";
import FavoritePromptModel from "../models/favorit.Prompt.Model";


export async function getFavorites() {
  const user = await currentUser();
  const userId = user?.id;
  if (!userId) throw new Error("Utilisateur non connecté");

  await connectDB();
  const favorites = await FavoritePromptModel.find({ userId }).populate("promptId").lean();
  return favorites.map(fav => fav.promptId);
}


// import { currentUser } from "@clerk/nextjs/server";
// import { connectDB } from "../config/mongoDB";
// import PromptModel from "../models/prompt.Model";
// export async function getFavorites() {

//     const user = await currentUser();
//     const userId = user?.id;
//     const email = user?.emailAddresses?.[0]?.emailAddress;

//     try {
//         await connectDB();
//         const favoritePrompts = await PromptModel.find({ isFavori: true, userId, email }).lean();
//         return favoritePrompts;
//     } catch (error) {
//         console.error("Erreur lors de la récupération des favoris :", error);
//         throw new Error("Erreur lors de la récupération des favoris");
//     }

// }