
export default function DadosFilme({filme}){
    return(
        <div className="  bg-black text-white flex flex-col ">
            <div className="mx-auto bg-zinc-950 w-full items-center flex flex-col">
            <h2 className="font-bold underline mx-auto ">
                {filme.nome}
            </h2>
            <ul>
                <li><b>Diretor:</b> {filme.diretor}</li>
                <li><b>Nacionalidade:</b> {filme.nacionalidade}</li>
                <li><b>IMDB:</b> {filme.imdb}</li>
            </ul>
            </div>

        </div>
    )

}