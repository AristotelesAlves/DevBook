import { TextAlignCenter } from "@phosphor-icons/react";


export default function FormatacaoTextoCentro({editor}){

    if (!editor) {
        return null;
    }

    return (
        <div className={`p-2 hover:bg-zinc-700 rounded-lg w-fit h-fit items-center flex ${editor.isActive({ textAlign: 'right' }) ? 'hover:bg-zinc-800 bg-zinc-700' : ''}`}>
            <button onClick={() => editor.chain().focus().setTextAlign('center').run()} className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}>
                <TextAlignCenter size={20} />
            </button>
        </div>
    )
}