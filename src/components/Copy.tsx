"use client"
import { useState, useRef, useEffect } from 'react';

import {StarIcon , Star}  from "lucide-react"

const LargeExpandableCodeBox = ({ 
  prompt = "", 
  title = "",
  language = "",
  initialExpanded = false
}) => {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(initialExpanded);
  const [showExpand, setShowExpand] = useState(false);
  const contentRef = useRef(null);

  const copyToClipboard = () => {
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
  }, [prompt]); // Re-vérifie quand le code change

  return (
    <div className="w-full bg-gray-50  border border-gray-200 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between bg-gray-100 px-4 py-2 border-b border-gray-200">
        <span className="text-sm font-medium text-gray-700">{title}</span>
        
         <div className='flex items-center gap-3'>
                <button className='cursor-pointer'  title='Ajouter au Favori'  > <Star className='opacity-60' size={18}  /> </button>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
                  title="Copier dans le presse-papier"
                >

                  {copied ? (
                    <>
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Copié!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                      <span>Copier</span>
                    </>
                  )}
                </button>
     
         </div>
     
      </div>
      
      <div 
        ref={contentRef}
        className={`relative p-4 font-mono text-sm overflow-y-hidden ${expanded ? '' : 'max-h-[300px]'}`}
      >
        <pre className={`whitespace-pre-wrap  text-md ${language === 'json' ? 'text-green-700' : 'text-gray-800'}`}>
          {prompt}
        </pre>
        
        {/* Overlay gradient quand réduit */}
        {!expanded && showExpand && (
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
        )}
      </div>
      
      {showExpand && (
        <div className="flex justify-center bg-gray-100 px-4 py-2 border-t border-gray-200">
          <button
            onClick={toggleExpand}
            className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            {expanded ? (
              <div className='cursor-pointer flex items-center'>
              
                <svg className="w-4 h-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
                Réduire
              </div>
            ) : (
              <div className='cursor-pointer flex items-center'>
                <svg className="w-4 h-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

export default LargeExpandableCodeBox;