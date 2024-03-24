import { TextHOne } from "@phosphor-icons/react";

export default function H1({editor}){

    if (!editor) {
        return null;
    }

    
    return (
        <div className={`p-2 hover:bg-zinc-700 rounded-lg w-fit h-fit items-center flex ${editor.isActive('heading', { level: 1 }) ? 'hover:bg-zinc-800 bg-zinc-700' : ''}`}>   
            <button
              onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            >
                <TextHOne size={20} />
            </button>
        </div>
    )
}





