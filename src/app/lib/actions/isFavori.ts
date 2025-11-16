// "use server"

// import { currentUser } from "@clerk/nextjs/server";
// import { connectDB } from "../config/mongoDB";
// import FavoritePromptModel from "../models/favorit.Prompt.Model";

// export async function isFavori(promptId: string) {
//   const user = await currentUser();
//   if (!user) return false;

//   await connectDB();

//   const exists = await FavoritePromptModel.findOne({
//     promptId,
//     userId: user.id,
//   });

//   return !!exists;
// }


"use server"
import { currentUser } from "@clerk/nextjs/server";
import { connectDB } from "../config/mongoDB";
import FavoritePromptModel from "../models/favorit.Prompt.Model";

export async function isFavori(promptId: string) {
  const user = await currentUser();
  if (!user) return false;

  await connectDB();

  const exist = await FavoritePromptModel.findOne({
    promptId,
    userId: user.id,
  });

  return !!exist;
}
