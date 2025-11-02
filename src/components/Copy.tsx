"use client"
import { useState, useRef, useEffect, startTransition } from 'react';
import { Copy, HeartCrack, Star } from "lucide-react";
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
  const [favoriState, setFavoriState] = useState(isFavori);
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

  useEffect(() => {
    if (contentRef.current) {
      const { scrollHeight, clientHeight } = contentRef.current;
      setShowExpand(scrollHeight > clientHeight);
    }
  }, [prompt]);

  const handleFavori = async (promptId?: string) => {
    if (!promptId) return;
    startTransition(() => setFavoriState((prev) => !prev));
    try {
      await toggleFavori(promptId);
    } catch (error) {
      console.error("Erreur toggleFavori:", error);
      startTransition(() => setFavoriState((prev) => !prev));
    }
  };

  return (
    <div className="w-full bg-white border border-gray-200 shadow-md rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg font-['Inter']">
      {/* Header */}
      <div className="flex justify-between items-center bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-3 border-b border-gray-200">
        <span className="text-base sm:text-sm font-semibold text-gray-800 truncate tracking-wide">
          {title}
        </span>

        <div className="flex items-center gap-3">
          {/* ⭐ Favori */}
          {/* <button
            onClick={() => handleFavori(id)}
            className="cursor-pointer transition-transform hover:scale-110"
            title="Ajouter au Favori"
          >
            <Star
              size={20}
              className={`transition-all duration-300 ${
                favoriState
                  ? 'fill-yellow-400 text-yellow-400 drop-shadow-md animate-pulse'
                  : 'fill-none text-gray-400 hover:text-yellow-400'
              }`}
            />
          </button> */}

           <button
            onClick={() => handleFavori(id)}
            className="cursor-pointer transition-transform hover:scale-110"
            title="Ajouter au Favori"
          >
            <HeartCrack
              size={20}
              className={`transition-all duration-300 ${
                favoriState
                  ? 'fill-red-600 text-red-600 drop-shadow-md '
                  : 'fill-none text-gray-400 hover:text-yellow-400'
              }`}
            />
          </button>

          {/* 📋 Copier */}
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors"
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="hidden xs:inline font-medium">Copié!</span>
              </>
            ) : (
              <>
                {/* <svg
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
                </svg> */}

                < Copy className='cursor-pointer' size={18} />
                <span className="hidden xs:inline font-medium">Copier</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Contenu principal */}
      <div
        ref={contentRef}
        className={`relative p-4 sm:p-5 text-sm sm:text-base leading-relaxed text-gray-700 overflow-y-hidden bg-gray-50/60 backdrop-blur-sm ${
          expanded ? '' : 'max-h-[220px] sm:max-h-[300px]'
        } transition-all duration-300`}
      >
        <pre 
          className={`whitespace-pre-wrap ${
            language === 'json'
              ? 'text-gray-700'
              : 'text-gray-800'
          } font-['JetBrains_Mono',monospace]`}
        >

            {/* prompt is content that i don't want render the html tag */}
          {prompt}
        </pre>

        {!expanded && showExpand && (
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-gray-100 via-gray-50 to-transparent pointer-events-none"></div>
        )}
      </div>

      {/* Bouton "Voir plus / Réduire" */}
      {showExpand && (
        <div className="flex justify-center bg-white px-4 py-3 border-t border-gray-200">
          <button
            onClick={toggleExpand}
            className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
          >
            {expanded ? (
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
                Réduire
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
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
