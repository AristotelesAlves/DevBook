import {useEditor, EditorContent} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Heading from '@tiptap/extension-heading';
import { Code, TextAlignCenter, TextAlignLeft, TextAlignRight, TextB, TextHOne, TextHThree, TextHTwo, TextItalic, TextUnderline } from '@phosphor-icons/react';
import { Image } from '@phosphor-icons/react/dist/ssr';
import TextAlign from '@tiptap/extension-text-align'
import Document from '@tiptap/extension-document'
import Placeholder from '@tiptap/extension-placeholder'

export default function EditorText(){
    const CustomDocument = Document.extend({
        content: 'heading block*',
      })

    const editor = useEditor({
        editorProps:{
            attributes: {
                class: "h-full w-full outline-none prose text-white "
            }
        },
        extensions: [
                StarterKit.configure({
                    document: false,
                  }),
                CustomDocument,
                Heading.configure({ levels: [1, 2, 3] }),
                TextAlign.configure({
                    types: ['heading', 'paragraph'],
                }),
                Placeholder.configure({
                    placeholder: ({ node }) => {
                      if (node.type.name === 'heading') {
                        return 'Qual o titulo ?'
                      }
                    },
                }),
            ],
        }
    )
    return ( 
        <div className='w-full'>
            <div className='w-full'>
                <ul className='flex p-1 gap-2 items-center bg-zinc-700 w-fit rounded-md'>
                    <li className={`flex hover:bg-zinc-500 ${editor.isActive('bold') ? 'hover:bg-zinc-600 bg-zinc-500' : ''} p-1 rounded-md hover:shadow-lg`}>
                        <button
                          onClick={() => editor.chain().focus().toggleBold().run()}
                          disabled={
                            !editor.can()
                              .chain()
                              .focus()
                              .toggleBold()
                              .run()
                          }
                          className={editor.isActive('bold') ? 'is-active' : ''}
                        >
                            <TextB size={20} />
                        </button>
                    </li>
                    <li className={`flex hover:bg-zinc-500 ${editor.isActive('italic') ? 'hover:bg-zinc-600 bg-zinc-500' : ''} p-1 rounded-md hover:shadow-lg`}>
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
                    </li>
                    <li className={`flex hover:bg-zinc-500 ${editor.isActive('heading', { level: 1 }) ? 'hover:bg-zinc-600 bg-zinc-500' : ''} p-1 rounded-md hover:shadow-lg`}>
                        <button
                          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                        >
                            <TextHOne size={20} />
                        </button>
                    </li>
                    <li className={`flex hover:bg-zinc-500 ${editor.isActive('heading', { level: 2 }) ? 'hover:bg-zinc-600 bg-zinc-500' : ''} p-1 rounded-md hover:shadow-lg`}>
                        <button
                          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                        >
                            <TextHTwo size={20} />
                        </button>
                    </li>

                    <li className={`flex hover:bg-zinc-500 ${editor.isActive('italic') ? 'hover:bg-zinc-600 bg-zinc-500' : ''} p-1 rounded-md hover:shadow-lg`}>
                        <button onClick={() => editor.chain().focus().setTextAlign('left').run()} className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}>
                            <TextAlignLeft size={20}/>
                        </button>
                    </li>

                    <li className={`flex hover:bg-zinc-500 ${editor.isActive('italic') ? 'hover:bg-zinc-600 bg-zinc-500' : ''} p-1 rounded-md hover:shadow-lg`}>
                        <button onClick={() => editor.chain().focus().setTextAlign('right').run()} className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}>
                            <TextAlignRight size={20} />
                        </button>
                    </li>

                    <li className={`flex hover:bg-zinc-500 ${editor.isActive('italic') ? 'hover:bg-zinc-600 bg-zinc-500' : ''} p-1 rounded-md hover:shadow-lg`}>
                        <button onClick={() => editor.chain().focus().setTextAlign('center').run()} className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}>
                            <TextAlignCenter size={20} />
                        </button>
                    </li>

                    <li className={`flex hover:bg-zinc-500 ${editor.isActive('italic') ? 'hover:bg-zinc-600 bg-zinc-500' : ''} p-1 rounded-md hover:shadow-lg`}>
                        <button>
                            <Code size={20} />
                        </button>
                    </li>

                    
                    <li className={`flex hover:bg-zinc-500 ${editor.isActive('italic') ? 'hover:bg-zinc-600 bg-zinc-500' : ''} p-1 rounded-md hover:shadow-lg`}>
                        <button>
                            <Image size={20}/>
                        </button>
                    </li>

                </ul>
            </div>
            <EditorContent
                className='w-full flex-1 h-full p-2 outline-none border-transparent text-white'
                editor={editor}
            />
        </div>
    )
}