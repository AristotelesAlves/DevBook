

export default function Avancar({editor}){

    if (!editor) {
        return null;
    }

    return (
        <div className={`p-2 hover:bg-zinc-700 rounded-lg w-fit h-fit items-center flex `}>
            <button onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}>
                redo
            </button>
        </div>
    )
}