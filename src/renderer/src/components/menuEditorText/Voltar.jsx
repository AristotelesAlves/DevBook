

export default function Voltar({editor}){

    if (!editor) {
        return null;
    }

    return (
        <div className={`p-2 hover:bg-zinc-700 rounded-lg w-fit h-fit items-center flex `}>
            <button onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}>
                undo
            </button>
        </div>
    )
}