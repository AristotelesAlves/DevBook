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
                class: "outline-none prose "
            }
        },
        extensions: [
                StarterKit.configure({
                    document: false,
                  }),
                CustomDocument,
                Heading,
                TextAlign,
                
                Placeholder.configure({
                    placeholder: 'Write something …',
                  })
            ],
        }
    )
    return ( 
        <div className='w-full'>
            <MenuEditorTexto editor={editor}/>
            <EditorContent
                className=' text-black'
                editor={editor}
            />
        </div>
    )
}