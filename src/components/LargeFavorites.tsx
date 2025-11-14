"use client"
import { useState, useRef, useEffect, startTransition } from 'react';
import { ClipboardEdit, Copy, Star, Save, X, PhoneOutgoing, Trash } from "lucide-react";
import { toggleFavori } from '@/app/lib/actions/markeFavori';
import { updatePrompt } from '@/app/lib/actions/updatePrompt';
import { FaCopy, FaEdit, FaPhone, FaTrash, FaWhatsapp } from 'react-icons/fa';
import { RiCheckLine, RiFileCopyLine } from "react-icons/ri";


type LargeExpandableCodeBoxProps = {
  prompt?: string;
  title?: string;
  id?: string;
  description?: string;
  category?: string;
  language?: string;
  initialExpanded?: boolean;
  isFavori?: boolean;
};

const LargeFavorites = ({
  prompt,
  title,
  id,
  description, 
  category,
  language,
  initialExpanded,
  isFavori = false,
}: LargeExpandableCodeBoxProps) => {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(initialExpanded);
  const [showExpand, setShowExpand] = useState(false);
  const [favoriState, setFavoriState] = useState(isFavori);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(prompt || "");
  const [loading, setLoading] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false); // 🧩 pour gérer la suppression visuelle

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

    // 🧩 D'abord on anime la suppression instantanément
    setIsRemoved(true);

    // ⏱️ ensuite après la transition, on appelle toggleFavori
    setTimeout(async () => {
      try {
        await toggleFavori(promptId);
        // Le parent devrait mettre à jour la liste via revalidation
      } catch (error) {
        console.error("Erreur toggleFavori:", error);
        setIsRemoved(false); // annule la suppression si erreur
      }
    }, 300); // correspond à la durée de la transition
  };

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
    const message = encodeURIComponent(prompt);
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
  <div
    className={`transition-all duration-300 ease-in-out transform  
      ${isRemoved ? 'opacity-0 scale-95 h-0 p-0 m-0 overflow-hidden' : 'opacity-100 scale-100'}
    `}
  >
    <div className="w-full  border border-gray-200 shadow-sm overflow-hidden rounded-md mt-5   ">
       <div className="p-3 mt-3 ">
              <h1 className="text-2xl font-semibold"> {title} </h1>
              <p>{description} </p>
           </div>
      <div className="flex bg-gray-100   items-center justify-between  px-4 py-2 border-b border-gray-200">
        <span className="text-sm font-medium text-gray-700">{category}</span>

         {/* <div className="px-1 mt-3 ">
                 <h1 className="text-2xl font-semibold"> {title} </h1>
               <p>{description} </p>
           </div> */}

        <div className="flex items-center gap-3">

         {/* <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-gray-100 gap-3">
                   
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors flex-1 sm:flex-none">
                        Aperçu
                      </button>
                      <button className="px-3 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors flex items-center gap-2 flex-1 sm:flex-none">
                        <FaCopy size={12} />
                        Copier
                      </button>
                    </div>
          </div> */}










          {/* 🗑️ Supprimer des favoris */}
         
        
          {/* <button onClick={() => handleFavori(id)} title="Supprimer le favori">
            <Trash
              size={20}
              className={`transition-colors duration-200 ${
                favoriState
                  ? 'fill-red-600 text-red-600 animate-pulse'
                  : 'fill-none text-gray-500'
              }`}
            />
          
          </button> */}

          {/* 📋 Copier */}
          <button onClick={copyToClipboard} title="Copier">
            {/* <RiFileCopyLine size={22} className="text-gray-600 hover:text-gray-800" /> */}

            {copied ? (
          <RiCheckLine
            size={22}
            className="text-green-500 transition-all duration-300   "
          />
        ) : (
          <RiFileCopyLine
            size={22}
            className="text-gray-600 hover:text-gray-800 transition-all duration-300 cursor-pointer"
          />
        )}
            
          </button>

          {/* ✏️ Éditer */}
        
        
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              title="Éditer le texte"
            >
              <FaEdit size={20} className="text-gray-500 hover:text-gray-800 cursor-pointer" />
            </button>
          ) : (
            <>
              <button
                onClick={handleSave}
                disabled={loading}
                title="Enregistrer"
                className="text-green-600 hover:text-green-800 cursor-pointer"
              >
                <Save size={20} />
              </button>
              <button
                onClick={() => setIsEditing(false)}
                title="Annuler"
                className="text-red-500 hover:text-red-700 cursor-pointer"
              >
                <X size={20} />
              </button>
            </>
          )}
          

          {/* 📤 Partager */}
          
          {/* <button
            onClick={() => handleShare(prompt || "")}
            title="Partager sur WhatsApp"
            className="text-green-600 hover:text-green-700 transition"
          >
            <PhoneOutgoing size={16} />
          </button> */}
        
        
        </div>
      </div>

      {/* Corps du texte */}
      <div
        ref={contentRef}
        className={`relative p-4 font-mono text-sm overflow-y-hidden  bg-gray-200   ${
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



       <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 border-t border-gray-100 gap-3  ">
                          {/* <div className="flex items-center gap-3 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              ⭐ 4.8
                            </span>
                            <span className="flex items-center gap-1">
                              ⏱️ 2min
                            </span>
                            <span className="flex items-center gap-1">
                              🎯 92%
                            </span>
                          </div> */}

                          <div></div>
                          <div className="flex items-center gap-2">
                             <button  onClick={() => handleShare(prompt || "")}
                             className="px-2 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors flex items-center gap-2 flex-1 sm:flex-none">
                              <FaWhatsapp size={16} />
                              Partager
                            </button>

                            <button  onClick={() => handleFavori(id)}    
                             className="px-2 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition-colors flex items-center gap-2 flex-1 sm:flex-none">
                              <FaTrash size={12} />
                              Supprimer
                            </button>
                          </div>
      </div>
   
   
   
    </div>
  </div>
);


  // return (
  //   <div
  //     className={`w-full bg-gray-200 border border-gray-200 shadow-sm overflow-hidden rounded-md transition-all duration-300 ease-in-out transform
  //     ${isRemoved ? 'opacity-0 scale-95 h-0 p-0 m-0 overflow-hidden' : 'opacity-100 scale-100'}
  //   `}
  //   >
  //     <div className="flex items-center justify-between bg-gray-100 px-4 py-2 border-b border-gray-200">
  //       <span className="text-sm font-medium text-gray-700">{title}</span>

  //       <div className="flex items-center gap-3">
  //         {/* 🗑️ Supprimer des favoris */}
  //         <button onClick={() => handleFavori(id)} title="Supprimer le favori">
  //           <Trash
  //             size={20}
  //             className={`transition-colors duration-200 ${
  //               favoriState
  //                 ? 'fill-red-600 text-red-600 animate-pulse'
  //                 : 'fill-none text-gray-500'
  //             }`}
  //           />
  //         </button>

  //         {/* 📋 Copier */}
  //         <button onClick={copyToClipboard} title="Copier">
  //           <Copy size={16} className="text-gray-600 hover:text-gray-800" />
  //         </button>

  //         {/* ✏️ Éditer */}
  //         {!isEditing ? (
  //           <button
  //             onClick={() => setIsEditing(true)}
  //             title="Éditer le texte"
  //           >
  //             <ClipboardEdit size={16} className="text-gray-600 hover:text-gray-800" />
  //           </button>
  //         ) : (
  //           <>
  //             <button
  //               onClick={handleSave}
  //               disabled={loading}
  //               title="Enregistrer"
  //               className="text-green-600 hover:text-green-800"
  //             >
  //               <Save size={16} />
  //             </button>
  //             <button
  //               onClick={() => setIsEditing(false)}
  //               title="Annuler"
  //               className="text-red-500 hover:text-red-700"
  //             >
  //               <X size={16} />
  //             </button>
  //           </>
  //         )}

  //         {/* 📤 Partager */}
  //         <button
  //           onClick={() => handleShare(prompt || "")}
  //           title="Partager sur WhatsApp"
  //           className="text-green-600 hover:text-green-700 transition"
  //         >
  //           <PhoneOutgoing size={16} />
  //         </button>
  //       </div>
  //     </div>

  //     {/* Corps du texte */}
  //     <div
  //       ref={contentRef}
  //       className={`relative p-4 font-mono text-sm overflow-y-hidden ${
  //         expanded ? '' : 'max-h-[300px]'
  //       }`}
  //     >
  //       {isEditing ? (
  //         <textarea
  //           value={editedText}
  //           onChange={(e) => setEditedText(e.target.value)}
  //           className="w-full h-60 p-2 border border-gray-300 rounded-md text-gray-800 font-mono resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
  //         />
  //       ) : (
  //         <pre
  //           className={`whitespace-pre-wrap text-md ${
  //             language === 'json' ? 'text-gray-600' : 'text-gray-800'
  //           }`}
  //         >
  //           {editedText}
  //         </pre>
  //       )}

  //       {!expanded && showExpand && !isEditing && (
  //         <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
  //       )}
  //     </div>

  //     {showExpand && !isEditing && (
  //       <div className="flex justify-center bg-gray-200 px-4 py-2 border-t border-gray-300">
  //         <button
  //           onClick={toggleExpand}
  //           className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
  //         >
  //           {expanded ? (
  //             <>
  //               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
  //               </svg>
  //               Réduire
  //             </>
  //           ) : (
  //             <>
  //               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  //               </svg>
  //               Voir plus
  //             </>
  //           )}
  //         </button>
  //       </div>
  //     )}
  //   </div>
  // );
};

export default LargeFavorites;
