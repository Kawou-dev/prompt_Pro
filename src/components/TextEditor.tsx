"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Color from "@tiptap/extension-color";
import { TextStyle } from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import { useEffect, useState } from "react";

const colors = ["#000000", "#e60000", "#005ae0", "#008a00", "#ffcc00", "#8000ff"];

export default function RichTextEditor({ value, onChange }: { value: string; onChange: (val: string) => void }) {
  const [mounted, setMounted] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Color,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: { attributes: { class: "outline-none" } },
    immediatelyRender: false,
  });

  // Ensure component is mounted (client-side only)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!editor || !mounted) {
    return (
      <div className="border rounded p-2 min-h-[200px] bg-gray-50 flex items-center justify-center">
        Loading editor...
      </div>
    );
  }

  return (
    <div className="border rounded p-2">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 border-b pb-2 mb-2">
        <button 
          onClick={() => editor.chain().focus().toggleBold().run()} 
          className={`px-2 border rounded ${editor.isActive('bold') ? 'bg-gray-200' : ''}`}
        >
          B
        </button>
        <button 
          onClick={() => editor.chain().focus().toggleItalic().run()} 
          className={`px-2 border rounded ${editor.isActive('italic') ? 'bg-gray-200' : ''}`}
        >
          I
        </button>
        <button 
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} 
          className={`px-2 border rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-200' : ''}`}
        >
          H1
        </button>
        <button 
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} 
          className={`px-2 border rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200' : ''}`}
        >
          H2
        </button>
        <button 
          onClick={() => editor.chain().focus().toggleBulletList().run()} 
          className={`px-2 border rounded ${editor.isActive('bulletList') ? 'bg-gray-200' : ''}`}
        >
          • List
        </button>
        <button 
          onClick={() => editor.chain().focus().toggleOrderedList().run()} 
          className={`px-2 border rounded ${editor.isActive('orderedList') ? 'bg-gray-200' : ''}`}
        >
          1. List
        </button>
        <button 
          onClick={() => editor.chain().focus().setTextAlign("left").run()} 
          className={`px-2 border rounded ${editor.isActive({ textAlign: 'left' }) ? 'bg-gray-200' : ''}`}
        >
          ⬅️
        </button>
        <button 
          onClick={() => editor.chain().focus().setTextAlign("center").run()} 
          className={`px-2 border rounded ${editor.isActive({ textAlign: 'center' }) ? 'bg-gray-200' : ''}`}
        >
          🔳
        </button>
        <button 
          onClick={() => editor.chain().focus().setTextAlign("right").run()} 
          className={`px-2 border rounded ${editor.isActive({ textAlign: 'right' }) ? 'bg-gray-200' : ''}`}
        >
          ➡️
        </button>
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => editor.chain().focus().setColor(c).run()}
            className={`w-5 h-5 rounded border ${editor.isActive('textStyle', { color: c }) ? 'ring-2 ring-blue-500' : ''}`}
            style={{ background: c }}
          />
        ))}
        <button
          onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()}
          className="px-2 border rounded bg-gray-200"
        >
          Clear
        </button>
      </div>

      <EditorContent editor={editor} className="min-h-[200px] p-2" />
    </div>
  );
}