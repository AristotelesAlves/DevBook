import Bold from "./Bold";
import FormatacaoTextoCentro from "./FormatacaoTextoCentro";
import FormatacaoTextoDireita from "./FormatacaoTextoDireita";
import FormatacaoTextoEsquerda from "./FormatacaoTextoEsquerda";
import H1 from "./H1";
import H2 from "./H2";
import Italic from "./Italic";

export default function MenuEditorTexto({editor}){

    if (!editor) {
        return null;
    }

    return (
        <div className="flex gap-1 px-2 py-1 bg-zinc-800 w-fit rounded-lg">
            <Bold editor={editor}/>
            <Italic editor={editor}/>
            <H1 editor={editor}/>
            <H2 editor={editor}/>
            <FormatacaoTextoCentro editor={editor}/>
            <FormatacaoTextoEsquerda editor={editor}/>
            <FormatacaoTextoDireita editor={editor}/>
        </div>
    )
}