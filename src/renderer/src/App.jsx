import { notas } from "./armazenamento/notas"
import Conteudo from "./components/Conteudo"
import Navegacao from "./components/Navegacao"
import PreviaNotas from "./components/PreviaNotas"
import EditorText from "./components/EditorText"
import { useState } from "react"

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')
  const [open, setOpen] = useState(false)
  return (
    <div className="flex items-center w-screen h-screen justify-center">
      <Navegacao>
        {notas.length == 0 ? (
          <div className="text-center py-2 text-zinc-400">
            Nenhuma anotação!
          </div>
        ): notas.map((e) => {
          return (
            <PreviaNotas titulo={e.titulo} data={e.data}/>
          )
        })}
      </Navegacao>
      <div className="w-full h-full py-2 px-4 bg-zinc-50">
        <EditorText/>
      </div>
    </div>
  )
}

export default App

