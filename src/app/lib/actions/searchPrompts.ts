"use server";
import { connectDB } from "../config/mongoDB";
import PromptModel from "../models/prompt.Model";

// Recherche par mot-clé dans title, description, ou category
export const searchPrompts = async (query: string) => {
  try {
    await connectDB();

    if (!query || query.trim() === "") return [];

    // Recherche insensible à la casse (i)
    const results = await PromptModel.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
      ],
    });

    return JSON.parse(JSON.stringify(results));
  } catch (error) {
    console.error("Erreur de recherche :", error);
    return [];
  }
};
