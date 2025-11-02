// lib/action/makeFavori.ts
"use server"
import { currentUser } from "@clerk/nextjs/server";
import { connectDB } from "../config/mongoDB";

import FavoritePromptModel from "../models/favorit.Prompt.Model";


// export const toggleFavori = async (promptId: string) => {

//   const user = await currentUser();
//   const userId = user?.id;
//   const email = user?.emailAddresses?.[0]?.emailAddress;

//   try {
//     await connectDB();

//     // 🔸 Vérifie si le prompt existe
//     const prompt = await PromptModel.findById(promptId);
//     if (!prompt) {
//       throw new Error("Prompt non trouvé");
//     }

//     // 🔸 Inverse la valeur du champ isFavori
//     const updatedPrompt = await PromptModel.findByIdAndUpdate(
//       promptId,
//       { isFavori: !prompt.isFavori, userId: userId, email: email },
//       { new: true } // pour retourner la version mise à jour
//     );

//     console.log("✅ Prompt mis à jour avec succès :", updatedPrompt.title);
//     return JSON.parse(JSON.stringify(updatedPrompt));
//   } catch (error) {
//     console.error("❌ Erreur lors du marquage en favori :", error);
//     throw new Error("Erreur lors du marquage du prompt en favori");
//   }
// };



// export const toggleFavori = async (promptId: string) => {
//   const user = await currentUser();
//   const userId = user?.id;
//   const email = user?.emailAddresses?.[0]?.emailAddress;

//   if (!userId) throw new Error("Utilisateur non connecté");

//   try {
//     await connectDB();

//     // 🔸 Vérifie si un enregistrement de favori existe déjà
//     const existing = await FavoritePromptModel.findOne({ userId, promptId });

//     if (existing) {
//       // 🔁 S'il existe, on inverse le champ `isFavori`
//       const updated = await FavoritePromptModel.findByIdAndUpdate(
//         existing._id,
//         { isFavori: !existing.isFavori },
//         { new: true }
//       );

//       console.log(`✅ Favori mis à jour pour ${promptId} → ${updated.isFavori}`);
//       return JSON.parse(JSON.stringify(updated));
//     } else {
//       // ➕ Sinon, on crée un nouveau favori avec `isFavori: true`
//       const created = await FavoritePromptModel.create({
//         userId,
//         email,
//         promptId,
//         isFavori: true,
//       });

//       console.log(`✅ Nouveau favori créé pour ${promptId}`);
//       return JSON.parse(JSON.stringify(created));
//     }
//   } catch (error) {
//     console.error("❌ Erreur lors du marquage en favori :", error);
//     throw new Error("Erreur lors du marquage du prompt en favori");
//   }
// };




export const toggleFavori = async (promptId: string) => {
  const user = await currentUser();
  const userId = user?.id;
  const email = user?.emailAddresses?.[0]?.emailAddress;

  if (!userId) throw new Error("Utilisateur non connecté");

  await connectDB();

  const existing = await FavoritePromptModel.findOne({ userId, promptId });

  if (existing) {
    // déjà favori → supprimer
    await FavoritePromptModel.findByIdAndDelete(existing._id);
    return { success: true, message: "Supprimé des favoris" };
  } else {
    // pas encore favori → ajouter
    await FavoritePromptModel.create({ userId, email, promptId });
    return { success: true, message: "Ajouté aux favoris" };
  }
};
