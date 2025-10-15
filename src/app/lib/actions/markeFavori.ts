// lib/action/makeFavori.ts
"use server"
import { connectDB } from "../config/mongoDB";
import PromptModel from "../models/prompt.Model";

export const toggleFavori = async (promptId: string) => {
  try {
    await connectDB();

    // 🔸 Vérifie si le prompt existe
    const prompt = await PromptModel.findById(promptId);
    if (!prompt) {
      throw new Error("Prompt non trouvé");
    }

    // 🔸 Inverse la valeur du champ isFavori
    const updatedPrompt = await PromptModel.findByIdAndUpdate(
      promptId,
      { isFavori: !prompt.isFavori },
      { new: true } // pour retourner la version mise à jour
    );

    console.log("✅ Prompt mis à jour avec succès :", updatedPrompt.title);
    return JSON.parse(JSON.stringify(updatedPrompt));
  } catch (error) {
    console.error("❌ Erreur lors du marquage en favori :", error);
    throw new Error("Erreur lors du marquage du prompt en favori");
  }
};
