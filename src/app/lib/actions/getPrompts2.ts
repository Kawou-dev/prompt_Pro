"use server";
import { connectDB } from "../config/mongoDB";

import PromptModel2 from "../models/PromptModel2";


export const getPrompts2 = async (category: string) => {
  try {
    await connectDB();

    const filter = category === "all" ? {} : { category };
    const prompts = await PromptModel2.find(filter).lean(); // ✅ transforme en plain object
    return JSON.parse(JSON.stringify(prompts)); // ✅ s’assure que c’est sérialisable
  } catch (error) {
    console.error("Erreur getPrompts:", error);
    throw new Error("Erreur lors de la récupération des prompts", { cause: error });
  }
};