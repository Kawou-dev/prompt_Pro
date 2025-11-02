import mongoose, { Schema, models, model } from "mongoose";

const FavoriteSchema = new Schema(
  {
    userId: { type: String, required: true },
    email: { type: String },
    promptId: { type: mongoose.Schema.Types.ObjectId, ref: "Prompt", required: true },
  },
  { timestamps: true }
);

const FavoritePromptModel = models?.Favorite || model("Favorite", FavoriteSchema);
export default FavoritePromptModel;
