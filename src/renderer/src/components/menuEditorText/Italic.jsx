import { TextItalic } from "@phosphor-icons/react";

export default function Italic({editor}){

    if (!editor) {
        return null;
    }

    return (
        <div className={`p-2 hover:bg-zinc-700 rounded-lg w-fit h-fit items-center flex ${editor.isActive('italic') ? 'hover:bg-zinc-800 bg-zinc-700' : ''}`}>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              disabled={
                !editor.can()
                  .chain()
                  .focus()
                  .toggleItalic()
                  .run()
              }
            >
                <TextItalic size={20} />
            </button>
        </div>
    )
}