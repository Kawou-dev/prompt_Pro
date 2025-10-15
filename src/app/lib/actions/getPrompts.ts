// action getPrompts.ts
"use server";
import { connectDB } from "../config/mongoDB";
import PromptModel from "../models/prompt.Model";


export const getPrompts = async (category: string) => {
  try {
    await connectDB();

    const filter = category === "all" ? {} : { category };
    const prompts = await PromptModel.find(filter).lean(); // ✅ transforme en plain object
    return JSON.parse(JSON.stringify(prompts)); // ✅ s’assure que c’est sérialisable
  } catch (error) {
    throw new Error("Erreur lors de la récupération des prompts");
  }
};

// export const getPrompts = async (category: string) => {

//     try {
        
//         await connectDB();
//         if (category === "all") {
//             const prompts = await PromptModel.find({});
//             return prompts;
//         }
//         const prompts = await PromptModel.find({ category });
//         return prompts;
    
//     } catch (error) {
//         throw new Error("Erreur lors de la recuperation des prompts")
//     }
 
// };



// const ITEMS_PER_PAGE = 10;

// export const getPrompts = async (category: string, page: number) => {
//   await connectDB();

//   const currentPage = Math.max(1, Number(page) || 1);
//   const skip = (currentPage - 1) * ITEMS_PER_PAGE;

//   const filter = category === "all" ? {} : { category };

//   // total avant skip/limit
//   const totalCount = await PromptModel.countDocuments(filter);
//   const totalPages = Math.max(1, Math.ceil(totalCount / ITEMS_PER_PAGE));

//   // récupération paginée avec tri stable
//   const prompts = await PromptModel.find(filter)
//     .sort({ _id: -1 })
//     .skip(skip)
//     .limit(ITEMS_PER_PAGE)
//     .lean();

//   return { prompts, totalCount, totalPages, currentPage };
// };



// const ITEMS_PER_PAGE = 4;

// /**
//  * Récupère les prompts avec pagination et filtrage par catégorie.
//  * - Si category = "all" → pas de filtre, mais toujours paginé.
//  * - Sinon → prompts filtrés par catégorie, paginés aussi.
//  */
// // /app/lib/actions/getPrompts.ts

// export const getPrompts = async (category: string, page: number) => {
//   await connectDB();

//   const currentPage = Number(page) || 1;
//   const skip = (currentPage - 1) * ITEMS_PER_PAGE;

//   // filtre
//   const filter = category === "all" ? {} : { category };

//   // total avant skip/limit
//   const totalCount = await PromptModel.countDocuments(filter);
//   const totalPages = Math.max(1, Math.ceil(totalCount / ITEMS_PER_PAGE));

//   // récupération paginée avec tri stable
//   const prompts = await PromptModel.find(filter)
//     .sort({ _id: -1 })   // tri stable (nouveaux en premier)
//     .skip(skip)
//     .limit(ITEMS_PER_PAGE)
//     .lean();

//   // retourne aussi page actuelle pour debug/consistance si besoin
//   return { prompts, totalCount, totalPages, currentPage };
// };






// export const getPrompts = async (category: string, page: number) => {
//   await connectDB();

//   const skip = (page - 1) * ITEMS_PER_PAGE;

//   // 🔸 Si catégorie = all, on ne filtre pas
//   const filter = category === "all" ? {} : { category };

//   const prompts = await PromptModel.find(filter)
//     .skip(skip)
//     .limit(ITEMS_PER_PAGE)
//     .lean();

//   const totalCount = await PromptModel.countDocuments(filter);

//   return { prompts, totalCount };
// };




// export const getPrompts = async (category: string , page: number) => {

//   await connectDB();

//   const skip = (page - 1) * ITEMS_PER_PAGE;

//   // 🔸 Si catégorie = all, on ne filtre pas
//   const filter = category === "all" ? {} : { category };

//   const prompts = await PromptModel.find(filter)
//     .skip(skip)
//     .limit(ITEMS_PER_PAGE)
//     .lean();

//   // 🔸 Compter le total de documents pour calculer les pages
//   const totalCount = await PromptModel.countDocuments(filter);

//   return { prompts, totalCount };
// }



//    try {
//         await connectDB();
//         const prompts = category === "all" ? await PromptModel.find({}) : await PromptModel.find({ category });
//         const totalPages = Math.ceil(prompts.length / ITEMS_PER_PAGE);
//         const currentPage = Math.min(page, totalPages);
//         const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//         const endIndex = startIndex + ITEMS_PER_PAGE;
//         return {
//             prompts: prompts.slice(startIndex, endIndex),
//             totalPages
//         };
//     } catch (error) {
//         throw new Error("Erreur lors de la recuperation des prompts")
//     }



