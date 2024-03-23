export default function BotaoEditorText(){

    return (
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
    )
}