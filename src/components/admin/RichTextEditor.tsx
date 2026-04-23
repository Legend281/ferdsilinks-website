'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import { useEffect, useState } from 'react';

interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({ content, onChange, placeholder = 'Start writing...' }: RichTextEditorProps) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-primary underline',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: content || '',
    editorProps: {
      attributes: {
        class: 'prose prose-sm max-w-none focus:outline-none min-h-[200px] px-4 py-3',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content || '');
    }
  }, [content, editor]);

  if (!isMounted || !editor) {
    return <div className="min-h-[300px] border border-slate-200 rounded-lg animate-pulse bg-slate-50"></div>;
  }

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 bg-slate-50 border-b border-slate-200">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-slate-200 ${editor.isActive('bold') ? 'bg-slate-300 text-primary' : 'text-slate-600'}`}
          title="Bold"
        >
          <span className="material-symbols-outlined text-lg font-bold">format_bold</span>
        </button>
        
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-slate-200 ${editor.isActive('italic') ? 'bg-slate-300 text-primary' : 'text-slate-600'}`}
          title="Italic"
        >
          <span className="material-symbols-outlined text-lg italic">format_italic</span>
        </button>
        
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-2 rounded hover:bg-slate-200 ${editor.isActive('underline') ? 'bg-slate-300 text-primary' : 'text-slate-600'}`}
          title="Underline"
        >
          <span className="material-symbols-outlined text-lg underline">format_underlined</span>
        </button>

        <div className="w-px h-6 bg-slate-300 mx-1"></div>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 rounded hover:bg-slate-200 ${editor.isActive('heading', { level: 2 }) ? 'bg-slate-300 text-primary' : 'text-slate-600'}`}
          title="Heading 2"
        >
          <span className="material-symbols-outlined text-lg">title</span>
        </button>
        
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`p-2 rounded hover:bg-slate-200 ${editor.isActive('heading', { level: 3 }) ? 'bg-slate-300 text-primary' : 'text-slate-600'}`}
          title="Heading 3"
        >
          <span className="material-symbols-outlined text-lg text-sm">H3</span>
        </button>

        <div className="w-px h-6 bg-slate-300 mx-1"></div>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-slate-200 ${editor.isActive('bulletList') ? 'bg-slate-300 text-primary' : 'text-slate-600'}`}
          title="Bullet List"
        >
          <span className="material-symbols-outlined text-lg">format_list_bulleted</span>
        </button>
        
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded hover:bg-slate-200 ${editor.isActive('orderedList') ? 'bg-slate-300 text-primary' : 'text-slate-600'}`}
          title="Numbered List"
        >
          <span className="material-symbols-outlined text-lg">format_list_numbered</span>
        </button>

        <div className="w-px h-6 bg-slate-300 mx-1"></div>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 rounded hover:bg-slate-200 ${editor.isActive('blockquote') ? 'bg-slate-300 text-primary' : 'text-slate-600'}`}
          title="Quote"
        >
          <span className="material-symbols-outlined text-lg">format_quote</span>
        </button>
        
        <button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className="p-2 rounded hover:bg-slate-200 text-slate-600"
          title="Divider"
        >
          <span className="material-symbols-outlined text-lg">horizontal_rule</span>
        </button>

        <div className="w-px h-6 bg-slate-300 mx-1"></div>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleTextAlign('left').run()}
          className={`p-2 rounded hover:bg-slate-200 ${editor.isActive({ textAlign: 'left' }) ? 'bg-slate-300 text-primary' : 'text-slate-600'}`}
          title="Align Left"
        >
          <span className="material-symbols-outlined text-lg">format_align_left</span>
        </button>
        
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleTextAlign('center').run()}
          className={`p-2 rounded hover:bg-slate-200 ${editor.isActive({ textAlign: 'center' }) ? 'bg-slate-300 text-primary' : 'text-slate-600'}`}
          title="Align Center"
        >
          <span className="material-symbols-outlined text-lg">format_align_center</span>
        </button>
        
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleTextAlign('right').run()}
          className={`p-2 rounded hover:bg-slate-200 ${editor.isActive({ textAlign: 'right' }) ? 'bg-slate-300 text-primary' : 'text-slate-600'}`}
          title="Align Right"
        >
          <span className="material-symbols-outlined text-lg">format_align_right</span>
        </button>

        <div className="w-px h-6 bg-slate-300 mx-1"></div>

        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="p-2 rounded hover:bg-slate-200 text-slate-600 disabled:opacity-40"
          title="Undo"
        >
          <span className="material-symbols-outlined text-lg">undo</span>
        </button>
        
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="p-2 rounded hover:bg-slate-200 text-slate-600 disabled:opacity-40"
          title="Redo"
        >
          <span className="material-symbols-outlined text-lg">redo</span>
        </button>
      </div>

      {/* Editor */}
      <EditorContent 
        editor={editor} 
        className="min-h-[300px] bg-white"
      />
    </div>
  );
}