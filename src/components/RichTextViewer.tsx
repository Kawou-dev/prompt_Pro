"use client";

import { useEffect, useState } from "react";
import { generateHTML } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {TextStyle} from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";

export default function RichTextViewer({ content }: { content: any }) {
  const [html, setHtml] = useState("");

   const [expanded, setExpanded] = useState(true);
    const toggleExpand = () => {
      setExpanded(!expanded);
    };

    

  useEffect(() => {
    if (!content) return;

    const generated = generateHTML(content, [
      StarterKit,
      TextStyle,
      Color.configure({ types: ["textStyle"] }), // ✅ Active couleurs
    ]);

    setHtml(generated);
  }, [content]);

  if (!html) return null;

  return (
    <>
    <div
      className={ `
        prose prose-sm max-w-none  ${expanded ? '' : 'max-h-[220px] sm:max-h-[300px]'} ` }
      dangerouslySetInnerHTML={{ __html: html }}
    />
      {/* Bouton "Voir plus / Réduire" */}
      {/* {showExpand && (
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
      )} */}
    </>
  );
} {/* <div
        ref={contentRef}
        className={`relative p-4 sm:p-5 text-sm sm:text-base leading-relaxed text-gray-700 overflow-y-hidden bg-gray-50/60 backdrop-blur-sm 
         
           ${expanded ? '' : 'max-h-[220px] sm:max-h-[300px]'}
          
          transition-all duration-300`}
      ></div> */}

      
