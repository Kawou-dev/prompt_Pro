"use client"
import { useState, useRef, useEffect, startTransition } from 'react';
import { ClipboardEdit, Copy, Star, Save, X, PhoneOutgoing, Trash } from "lucide-react";
import { toggleFavori } from '@/app/lib/actions/markeFavori';
import { updatePrompt } from '@/app/lib/actions/updatePrompt';

type LargeExpandableCodeBoxProps = {
  prompt?: string;
  title?: string;
  id?: string;
  language?: string;
  initialExpanded?: boolean;
  isFavori?: boolean;
};

const LargeFavorites = ({
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
  const [isEditing, setIsEditing] = useState(false); // ✏️ mode édition
  const [editedText, setEditedText] = useState(prompt || ""); // 📝 texte modifié
  const [loading, setLoading] = useState(false);

  const contentRef = useRef<HTMLDivElement | null>(null);

  const copyToClipboard = () => {
    if (!prompt) return;
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleExpand = () => setExpanded(!expanded);

  useEffect(() => {
    if (contentRef.current) {
      const { scrollHeight, clientHeight } = contentRef.current;
      setShowExpand(scrollHeight > clientHeight);
    }
  }, [prompt]);

  const handleFavori = async (promptId?: string) => {
    if (!promptId) return;

    startTransition(() => setFavoriState(prev => !prev));
    try {
      await toggleFavori(promptId);
    } catch (error) {
      console.error("Erreur toggleFavori:", error);
      startTransition(() => setFavoriState(prev => !prev));
    }
  };

  // 🧩 Enregistrer la modification
  const handleSave = async () => {
    if (!id) return;
    setLoading(true);

    try {
      const res = await updatePrompt(id, editedText);
      if (res.success) {
        setIsEditing(false);
      }
    } catch (err) {
      console.error("Erreur update:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = (prompt: string) => {
     if (!prompt) return;

      // 🔗 encodage du message pour être compatible avec une URL
      const message = encodeURIComponent(prompt);

      // 📱 ouverture de WhatsApp (mobile ou web)
      const whatsappUrl = `https://wa.me/?text=${message}`;

      // Ouvre le lien dans un nouvel onglet
      window.open(whatsappUrl, "_blank");
  }

  return (
    <div className="w-full bg-gray-200 border border-gray-200 shadow-sm overflow-hidden rounded-md">
      <div className="flex items-center justify-between bg-gray-100 px-4 py-2 border-b border-gray-200">
        <span className="text-sm font-medium text-gray-700">{title}</span>

        <div className="flex items-center gap-3">
          {/* ⭐ Favori */}
          {/* <button onClick={() => handleFavori(id)} title="Ajouter au Favori">
            <Star
              size={20}
              className={`transition-colors duration-200 ${
                favoriState
                  ? 'fill-yellow-400 text-yellow-400 animate-pulse'
                  : 'fill-none text-gray-500'
              }`}
            />
          </button> */}

             <button onClick={() => handleFavori(id)} title="Ajouter au Favori">
            <Trash
              size={20}
              className={`transition-colors duration-200 ${
                favoriState
                  ? 'fill-yellow-400 text-yellow-400 animate-pulse'
                  : 'fill-none text-gray-500'
              }`}
            />
          </button>

          {/* 📋 Copier */}
          <button onClick={copyToClipboard} title="Copier">
            <Copy size={16} className="text-gray-600 hover:text-gray-800" />
          </button>

          

          {/* ✏️ Éditer */}
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              title="Éditer le texte"
            >
              <ClipboardEdit size={16} className="text-gray-600 hover:text-gray-800" />
            </button>

            

            
          ) : (
            <>
              <button
                onClick={handleSave}
                disabled={loading}
                title="Enregistrer"
                className="text-green-600 hover:text-green-800"
              >
                <Save size={16} />
              </button>
              <button
                onClick={() => setIsEditing(false)}
                title="Annuler"
                className="text-red-500 hover:text-red-700"
              >
                <X size={16} />
              </button>
            </>
          )}

          <button
        onClick={() => handleShare(prompt || "")}
        title="Partager sur WhatsApp"
        className="text-green-600 hover:text-green-700 transition"
      >
        <PhoneOutgoing size={16} />
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
        {isEditing ? (
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="w-full h-60 p-2 border border-gray-300 rounded-md text-gray-800 font-mono resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <pre
            className={`whitespace-pre-wrap text-md ${
              language === 'json' ? 'text-gray-600' : 'text-gray-800'
            }`}
          >
            {editedText}
          </pre>
        )}

        {!expanded && showExpand && !isEditing && (
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
        )}
      </div>

      {showExpand && !isEditing && (
        <div className="flex justify-center bg-gray-200 px-4 py-2 border-t border-gray-300">
          <button
            onClick={toggleExpand}
            className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            {expanded ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
                Réduire
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
                Voir plus
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default LargeFavorites;
