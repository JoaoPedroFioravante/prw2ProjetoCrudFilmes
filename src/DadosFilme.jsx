import {useParams} from "react-router-dom"

export default function DadosFilme({filmesLista}){
    const obj = useParams();
    const filme = filmesLista.filter(e => e.id == obj.id?true:false);
    return(
        <div>
            <h2>
                {filme.nome}
            </h2>
            <div>
                <ul>{filme.ano}</ul>
                <ul>{filme.diretor}</ul>
            </div>
        </div>
    )

}