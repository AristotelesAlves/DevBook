import { TextAlignLeft } from "@phosphor-icons/react";


export default function FormatacaoTextoEsquerda({editor}){

    if (!editor) {
        return null;
    }

    return (
        <div className={`p-2 hover:bg-zinc-700 rounded-lg w-fit h-fit items-center flex ${editor.isActive({ textAlign: 'left' }) ? 'hover:bg-zinc-800 bg-zinc-700' : ''}`}>
            <button onClick={() => editor.chain().focus().setTextAlign('left').run()} className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}>
                <TextAlignLeft size={20}/>
            </button>
        </div>
    )
}