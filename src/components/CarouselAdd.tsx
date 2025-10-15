"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const adds = [
  {
    title: " # Prompt: Assistant marketing",
    description:
      "Créez un post engageant pour les réseaux sociaux qui présente notre nouveau produit [nom du produit] en mettant en avant ses [caractéristiques principales] et en ciblant [audience cible]",
  },
  {
    title: " # Prompt: Assistant lettre de motivation",
    description:
      "Rédigez une lettre de motivation convaincante pour le poste de [nom du poste] en mettant en avant vos [compétences clés] et votre [expérience pertinente] afin de capter l'attention du recruteur.",
  },
  {
    title: " # Prompt: Assistant création de contenu",
    description:
      "Générez un article de blog captivant sur [sujet] en mettant en avant [points clés] et en adoptant un ton [ton souhaité].",
  },
];

export default function AddsCarousel() {
  const [index, setIndex] = useState(0);

  // ⏳ changement automatique toutes les 4 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % adds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-300 mb-4 shadow-lg"
        >
          <p className="mb-2">{adds[index].title}</p>
          <p>{adds[index].description}</p>
        </motion.div>
      </AnimatePresence>

      {/* 🔘 Indicateurs de navigation */}
      <div className="flex justify-center gap-2 mt-2">
        {adds.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-green-400" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
