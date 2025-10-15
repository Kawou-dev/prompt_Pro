import { connectDB } from "../config/mongoDB";
import PromptModel from "../models/prompt.Model";


export async function getFavorites() {

    try {
        await connectDB();
        const favoritePrompts = await PromptModel.find({ isFavori: true }).lean();
        return favoritePrompts;
    } catch (error) {
        console.error("Erreur lors de la récupération des favoris :", error);
        throw new Error("Erreur lors de la récupération des favoris");
    }

}