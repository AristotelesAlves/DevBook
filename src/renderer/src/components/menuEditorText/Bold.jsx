import { TextB } from "@phosphor-icons/react";

export default function Bold({editor}){

    if (!editor) {
        return null;
    }

    return (
        <div className={`p-2 hover:bg-zinc-700 rounded-lg w-fit h-fit items-center flex ${editor.isActive('bold') ? 'hover:bg-zinc-800 bg-zinc-700' : ''}`}>
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              disabled={
                !editor.can()
                  .chain()
                  .focus()
                  .toggleBold()
                  .run()
                }
            >
            <TextB size={20}/>
            </button>
        </div>
    )
}