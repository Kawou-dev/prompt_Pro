import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

const articles = [
  {
    id: 1,
    title: "Comment écrire une légende qui capte l’attention ?",
    description:
      "Découvrez les techniques simples utilisées par les créateurs pour écrire des légendes engageantes : storytelling, CTA, accroches dynamiques…",
    author: "Gary Vee",
    link: "https://www.youtube.com/watch?v=2z8JmcrW-As",
    tag: "Rédaction",
  },
  {
    id: 2,
    title: "Les meilleurs conseils pour augmenter votre engagement",
    description:
      "Analyse des stratégies utilisées par les influenceurs pour augmenter naturellement l'engagement sur Instagram, TikTok et Facebook.",
    author: "Iman Gadzhi",
    link: "https://www.youtube.com/watch?v=fHcQHU5NQ2M",
    tag: "Stratégie",
  },
  {
    id: 3,
    title: "La psychologie derrière un bon contenu",
    description:
      "Que se passe-t-il dans l’esprit d’un utilisateur lorsqu’il voit un post ? Voici comment utiliser les biais cognitifs pour améliorer l’impact de vos publications.",
    author: "Ali Abdaal",
    link: "https://www.youtube.com/watch?v=ffZCXu2YxU4",
    tag: "Psychologie",
  },
  {
    id: 4,
    title: "Les erreurs qui sabotent vos publications",
    description:
      "Peu d’engagement ? Voici les erreurs courantes : mauvais timing, manque de cohérence, texte trop long ou trop vague… et comment les corriger.",
    author: "Vanessa Lau",
    link: "https://intersection-conseil.com/2025/10/08/les-6-erreurs-courantes-qui-sabotent-votre-visibilite/",
    tag: "Erreurs à éviter",
  },
  {
    id: 5,
    title: "Comment trouver des idées de contenu facilement",
    description:
      "Une méthode simple utilisée par les plus grands créateurs pour ne jamais manquer d’inspiration : observation, micro-moments et tendances.",
    author: "Marques Brownlee",
    link: "https://www.youtube.com/watch?v=lTx3G6h2xyA",
    tag: "Inspiration",
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen py-16 px-6 md:px-16 lg:px-32">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Astuces & Conseils pour Booster vos Publications
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Retrouvez ici nos meilleurs articles pour améliorer votre contenu,
          comprendre les stratégies des créateurs et rester inspiré au quotidien.
        </p>
      </div>

      {/* Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.map((article) => (
          <div
            key={article.id}
            className="p-6 rounded-xl border dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-900"
          >
            <span className="text-sm font-semibold px-3 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-700 dark:text-white">
              {article.tag}
            </span>

            <h2 className="text-2xl font-bold mt-4 mb-2">{article.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {article.description}
            </p>

            <p className="text-sm mb-4">
              <strong>Recommandé par :</strong> {article.author}
            </p>

            <Link
              href={article.link}
              target="_blank"
              className="text-purple-600 dark:text-purple-300 font-medium hover:underline"
            >
              Lire / Regarder l'article →
            </Link>
          </div>
        ))}
      </div>


        

    </div>
  );
};

export default BlogPage;
