import { Image, X } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export default function Imagem({editor}){

    if (!editor) {
        return null;
    }

    const [configImagem, setConfigImagem] = useState({
        url: '',
        modal: false,
        inputValue: ''
    })

    function capiturandoInput(e){
        setConfigImagem({
            ...configImagem,
            inputValue: e.target.value
        })
    }
    
    function adicionarImagem(e) {
        e.preventDefault();
        editor.chain().focus().setImage({ src: configImagem.url }).run();
        setConfigImagem({
            ...configImagem,
            modal: false,
            inputValue: '',
            url: ''
        })
    }
    
    return (
        <div className={`p-2 hover:bg-zinc-700 active:bg-zinc-600  rounded-lg w-fit h-fit items-center flex'}`}>   
            <button onClick={() => setConfigImagem({...configImagem, modal:true})}>
                <Image size={20}/>
            </button>
            {configImagem.modal ? (
                <div className="absolute w-screen h-screen left-0 top-0 backdrop-blur-sm bg-zinc-500 bg-opacity-45 flex items-center justify-center">
                    <div className="w-[90%] h-[80%] bg-zinc-800 p-3 relative rounded-lg flex flex-col gap-4 ">
                        <button className="absolute right-3 top-3 p-2 rounded-md bg-zinc-500 bg-opacity-25 hover:bg-opacity-100 z-30"
                          onClick={() => setConfigImagem({...configImagem, modal:false})}
                        >
                            <X size={25}/>
                        </button>

                        <img src="imagem.jpg" alt="Minha Figura"/>
                        <div className="flex gap-2">
                            <input className="w-full flex-1 rounded-lg bg-zinc-500" 
                              type="text" 
                              value={configImagem.inputValue}
                              onChange={capiturandoInput}
                            />
                            <button className="bg-zinc-500 px-2 py-1 rounded-lg"
                              onClick={(e) => adicionarImagem(e)}
                            >
                                Adicionar foto
                            </button>
                        </div>
                    </div>
                </div>
            ): null }
        </div>
    )
}





