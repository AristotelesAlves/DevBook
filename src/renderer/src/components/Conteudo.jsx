export default function Conteudo({ children }) {  
    return (
      <aside className="flex-1 w-full h-full overflow-auto py-2 px-4 bg-zinc-300" >
        {children}
      </aside>
    )
  }
  
  