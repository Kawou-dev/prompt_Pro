"use server";

import { connectDB } from "../config/mongoDB";
import PromptModel from "../models/prompt.Model";


export async function updatePrompt(id: string, newContent: string) {
  await connectDB();

  try {
    const updated = await PromptModel.findByIdAndUpdate(
      id,
      { content: newContent },
      { new: true }
    );

    // ✅ convertir en objet JSON simple
    const plainPrompt = updated ? JSON.parse(JSON.stringify(updated)) : null;

    return { success: true, updated: plainPrompt };
  } catch (error) {
    console.error("Erreur updatePrompt:", error);
    return { success: false, error: "Erreur lors de la mise à jour" };
  }
}


export async function updatePrompt2(id: string, newContent: string) {
  await connectDB();

  try {
    const updated = await PromptModel.findByIdAndUpdate(
      id,
      { content: newContent },
      { new: true }
    );

    // ✅ convertir en objet JSON simple
    const plainPrompt = updated ? JSON.parse(JSON.stringify(updated)) : null;

    return { success: true, updated: plainPrompt };
  } catch (error) {
    console.error("Erreur updatePrompt:", error);
    return { success: false, error: "Erreur lors de la mise à jour" };
  }
}
