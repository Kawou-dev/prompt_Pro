"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { JSONContent } from "@tiptap/react";

interface RichTextViewerProps {
  content: JSONContent | null;
}

export default function RichTextViewer({ content }: RichTextViewerProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    editable: false,            // 🔒 Mode lecture uniquement
    immediatelyRender: false,   // ✅ Empêche les erreurs SSR
  });

  if (!editor) return null;

  return (
    <div className="prose prose-sm max-w-none">
      <EditorContent editor={editor} />
    </div>
  );
}
