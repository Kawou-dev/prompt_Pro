import mongoose, { models, model, Schema } from "mongoose";

const PromptSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    content: {
      type: Object,
      required: true
    },

    isFavori: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// ✅ Vérifie correctement si le modèle existe déjà avant de le redéfinir
const PromptModel2 = models?.Prompt2 || model("Prompt2", PromptSchema);

export default PromptModel2;