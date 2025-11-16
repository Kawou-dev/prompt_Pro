"use client";

import { useState, useEffect, startTransition } from "react";
import { Heart } from "lucide-react";
import { toggleFavori } from "./markeFavori";
import { isFavori } from "./isFavori";

export default function HeartButton({ promptId }: { promptId: string }) {
  const [estFavoris, setEstFavoris] = useState(false);

  // Charger l'état initial
  useEffect(() => {
    async function loadFavori() {
      const fav = await isFavori(promptId);
      setEstFavoris(fav);
    }
    loadFavori();
  }, [promptId]);

  // Toggle favoris
  const handleFavori = async () => {
    // Optimistic UI
    startTransition(() => setEstFavoris(prev => !prev));

    try {
      const res = await toggleFavori(promptId);
      setEstFavoris(res.success); // Synchroniser avec la BD
    } catch (error) {
      console.error("Erreur toggleFavori:", error);
      // Revert si erreur
      startTransition(() => setEstFavoris(prev => !prev));
    }
  };

  return (
    <button
      onClick={handleFavori}
      className="cursor-pointer transition-transform hover:scale-110"
      title="Ajouter au Favori"
    >
      <Heart
        size={24}
        className={`transition-all duration-300 ${
          estFavoris ? "text-red-500 fill-red-500" : "text-gray-400"
        }`}
      />
    </button>
  );
}
