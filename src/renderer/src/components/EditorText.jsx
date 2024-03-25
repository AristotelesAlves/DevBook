import {useEditor, EditorContent} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Heading from '@tiptap/extension-heading';
import TextAlign from '@tiptap/extension-text-align'
import Document from '@tiptap/extension-document'
import Placeholder from '@tiptap/extension-placeholder'
import MenuEditorTexto from './menuEditorText';

export default function EditorText(){
    const CustomDocument = Document.extend({
        content: 'heading block*',
      })

    const editor = useEditor({
        editorProps:{
            attributes: {
                class: "prose prose-sm sm:prose-lg xl:prose-2xl focus:outline-none text-white prose-h2:text-white prose-h1:text-white w-full break-all mt-10"
            }
        },
        extensions: [
                StarterKit.configure({
                    document: false,
                  }),
                CustomDocument,
                Heading,
                TextAlign.configure({
                    types: ['heading', 'paragraph'],
                  }),
                Placeholder.configure({
                    placeholder: 'Write something …',
                  })
            ],
        }
    )

    function genereteText(){
        if(editor){
            console.log(editor.getText())
        }    
    }
    // com o editor.getText consigo capturar o texto digitado, com isso eu salvo num arquivo usando o fs. com fs eu consigo criar ler deletar 


    return ( 
        <div className='w-full h-full'>
            <MenuEditorTexto editor={editor}/>
            <EditorContent
                className=' text-black w-full'
                editor={editor}
                attributes={{ br: true }}
            />
            <button className='text-black' onClick={genereteText}>gera json</button>
        </div>
    )
}