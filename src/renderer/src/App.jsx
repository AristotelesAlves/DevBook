import { notas } from "./armazenamento/notas"
import Conteudo from "./components/Conteudo"
import Navegacao from "./components/Navegacao"
import PreviaNotas from "./components/PreviaNotas"

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

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
      <Conteudo>
        <EditorText/>
      </Conteudo>
    </div>
  )
}
import Editor from "./components/Editor"
import EditorText from "./components/EditorText"

export default App

