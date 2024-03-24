import { TextAlignRight } from "@phosphor-icons/react";


export default function FormatacaoTextoDireita({editor}){

    if (!editor) {
        return null;
    }

    return (
        <div className={`p-2 hover:bg-zinc-700 rounded-lg w-fit h-fit items-center flex ${editor.isActive({ textAlign: 'right' }) ? 'hover:bg-zinc-800 bg-zinc-700' : ''}`}>
            <button onClick={() => editor.chain().focus().setTextAlign('right').run()} className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}>
                <TextAlignRight size={20} />
            </button>
        </div>
    )
}