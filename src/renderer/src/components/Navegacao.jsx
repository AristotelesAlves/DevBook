import React from 'react';

export default function Navegacao({ children }) {
  return (
    <aside className="w-[20%] p-2 h-full bg-zinc-800 text-white flex flex-col gap-2">
      <div>
        <input className='bg-zinc-700 opacity-90 w-full rounded-md px-2 py-1' placeholder='Busacr uma nota' type="text" name="" id="" />
      </div>
      <div className='p-2 border border-white rounded-lg flex gap-1 cursor-pointer hover:bg-zinc-700 hover:border-zinc-200'>
          <div>
            Adicionar uma nova nota
          </div>
      </div>
      <div>
        {children}
      </div>
    </aside>
  );
}
