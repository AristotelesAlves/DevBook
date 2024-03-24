import { TextHTwo } from "@phosphor-icons/react";

export default function H2({editor}){

    if (!editor) {
        return null;
    }

    
    return (
        <div className={`p-2 hover:bg-zinc-700 rounded-lg w-fit h-fit items-center flex ${editor.isActive('heading', { level: 2 }) ? 'hover:bg-zinc-800 bg-zinc-700' : ''}`}>   
            <button
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            >
                <TextHTwo size={20} />
            </button>
        </div>
    )
}





