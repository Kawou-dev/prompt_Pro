"use client";

import { getPrompts } from "@/app/lib/actions/getPrompts";
import { updatePrompt } from "@/app/lib/actions/updatePrompt";
import { useEffect, useState } from "react";

const Edited = () => {
  const [prompts, setPrompts] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedPrompt, setEditedPrompt] = useState({ title: "", content: "", category: "" });

  // 🔹 Charger les prompts
  useEffect(() => {
    const fetchPrompts = async () => {
      const res = await getPrompts("all");
      setPrompts(res);
    };
    fetchPrompts();
  }, []);

  // 🔹 Entrer en mode édition
  const handleEdit = (prompt: any) => {
    setEditingId(prompt._id);
    setEditedPrompt({
      title: prompt.title,
      content: prompt.content,
      category: prompt.category,
    });
  };

  // 🔹 Sauvegarder la mise à jour
  const handleSave = async (id: string) => {
    await updatePrompt(id, editedPrompt as any);

    setPrompts((prev) =>
      prev.map((p) => (p._id === id ? { ...p, ...editedPrompt } : p))
    );

    setEditingId(null);
  };

  return (
    <div className="max-w-2xl mx-auto mt-6">
      {prompts.map((prompt: any) => (
        <div key={prompt._id} className="border-2 p-4 my-2 rounded-md shadow-sm">
          {editingId === prompt._id ? (
            <>
              <input
                type="text"
                value={editedPrompt.title}
                onChange={(e) =>
                  setEditedPrompt({ ...editedPrompt, title: e.target.value })
                }
                className="border p-2 w-full mb-2 rounded"
              />
              <textarea
                value={editedPrompt.content}
                onChange={(e) =>
                  setEditedPrompt({ ...editedPrompt, content: e.target.value })
                }
                className="border p-2 w-full mb-2 rounded"
                rows={3}
              />
              <input
                type="text"
                value={editedPrompt.category}
                onChange={(e) =>
                  setEditedPrompt({ ...editedPrompt, category: e.target.value })
                }
                className="border p-2 w-full mb-2 rounded"
              />
              <button
                onClick={() => handleSave(prompt._id)}
                className="bg-green-600 text-white px-4 py-2 rounded mr-2"
              >
                Sauvegarder
              </button>
              <button
                onClick={() => setEditingId(null)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Annuler
              </button>
            </>
          ) : (
            <>
              <h2 className="font-bold text-lg">{prompt.title}</h2>
              <p className="text-gray-700">{prompt.content}</p>
              <p className="text-sm text-gray-500">Catégorie : {prompt.category}</p>
              <button
                onClick={() => handleEdit(prompt)}
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
              >
                Éditer
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Edited;
