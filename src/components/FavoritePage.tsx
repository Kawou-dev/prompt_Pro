"use client"
import { useState, useRef, useEffect, startTransition } from 'react';
import { Star } from "lucide-react";
import { toggleFavori } from '@/app/lib/actions/markeFavori';

type LargeExpandableCodeBoxProps = {
  prompt?: string;
  title?: string;
  id?: string;
  language?: string;
  initialExpanded?: boolean;
  isFavori?: boolean;
};

const LargeExpandableText = ({
  prompt,
  title,
  id,
  language,
  initialExpanded,
  isFavori = false,
}: LargeExpandableCodeBoxProps) => {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(initialExpanded);
  const [showExpand, setShowExpand] = useState(false);
  const [favoriState, setFavoriState] = useState(isFavori); // ✅ état local du favori
  const contentRef = useRef<HTMLDivElement | null>(null);

  const copyToClipboard = () => {
    if (!prompt) return;
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  // Vérifie si le contenu dépasse la hauteur du container
  useEffect(() => {
    if (contentRef.current) {
      const { scrollHeight, clientHeight } = contentRef.current;
      setShowExpand(scrollHeight > clientHeight);
    }
  }, [prompt]);

  const handleFavori = async (promptId?: string) => {
    if (!promptId) return;

    // ✅ changement immédiat (optimiste)
    startTransition(() => {
      setFavoriState((prev) => !prev);
    });

    try {
      await toggleFavori(promptId);
    } catch (error) {
      console.error("Erreur toggleFavori:", error);
      // 🔁 revert si erreur
      startTransition(() => {
        setFavoriState((prev) => !prev);
      });
    }
  };

  return (
    <div className="w-full bg-gray-200 border border-gray-200 shadow-sm overflow-hidden rounded-md">
      <div className="flex items-center justify-between bg-gray-100 px-4 py-2 border-b border-gray-200">
        <span className="text-sm font-medium text-gray-700">{title}</span>

        <div className="flex items-center gap-3">
          {/* ⭐ Favori */}
          <button
            onClick={() => handleFavori(id)}
            className="cursor-pointer"
            title="Ajouter au Favori"
          >
            <Star
              size={20}
              className={`transition-colors duration-200 ${
                favoriState
                  ? 'fill-yellow-400 text-yellow-400 animate-pulse'
                  : 'fill-none text-gray-500'
              }`}
            />
          </button>

          {/* 📋 Copier */}
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
            title="Copier dans le presse-papier"
          >
            {copied ? (
              <>
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Copié!</span>
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  />
                </svg>
                <span>Copier</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Corps du texte */}
      <div
        ref={contentRef}
        className={`relative p-4 font-mono text-sm overflow-y-hidden ${
          expanded ? '' : 'max-h-[300px]'
        }`}
      >
        <pre
          className={`whitespace-pre-wrap text-md ${
            language === 'json' ? 'text-gray-600' : 'text-gray-800'
          }`}
        >
          {prompt}
        </pre>

        {/* Effet gradient si contenu réduit */}
        {!expanded && showExpand && (
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
        )}
      </div>

      {showExpand && (
        <div className="flex justify-center bg-gray-200 px-4 py-2 border-t border-gray-300">
          <button
            onClick={toggleExpand}
            className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            {expanded ? (
              <div className="cursor-pointer flex items-center">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
                Réduire
              </div>
            ) : (
              <div className="cursor-pointer flex items-center">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                Voir plus
              </div>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default LargeExpandableText;
