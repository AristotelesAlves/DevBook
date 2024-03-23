export default function PreviaNotas({titulo, data}){
    return (
        <div className="cursor-pointer hover:bg-zinc-700 p-2 rounded-lg flex flex-col gap-1">
            <h1>{titulo}</h1>
            <p className="text-sm text-zinc-300 w-[90%] truncate">
                {data}
            </p>
        </div>
    )
}