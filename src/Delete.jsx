import {useParams} from "react-router-dom"

export default function Delete(){
    const obj = useParams();
    return(
        <div>
        <h2>você deseja excluir o filme de id {obj.id}?</h2>
        <button>excluir</button>
        <button>cancelar</button>
        //2 botoes sim e não
        //sim faz o envio da requisição http e volta para home
        //e não apenas volta para home
        </div>
    )
}