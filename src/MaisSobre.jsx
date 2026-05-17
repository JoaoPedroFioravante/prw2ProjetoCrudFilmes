import {useNavigate, useParams} from "react-router-dom"
import DadosFilme from "./DadosFilme";

export default function MaisSobre({listaFilmes}){
    const obj = useParams();
    const filme = listaFilmes.filter((e)=> e.id == obj.id)[0]
    const navigate = useNavigate();
    if(!filme){
        return(
            <h1>não encontrado</h1>
        )
    }
    return(
        <div className="text-sm sm:text-base  lg:text-lg xl:text-2xl min-h-screen bg-black">
            <DadosFilme filme={filme}/>
            <div className="flex justify-center gap-10">
            <button className=" bg-yellow-500 font-semibold p-3 rounded " onClick={() => navigate(`/edit/${obj.id}`)}>editar filme</button>
            <button className=" bg-yellow-500 font-semibold p-3 rounded" onClick={() => navigate(`/delete/${obj.id}`)}>excluir filme</button>
            </div>
        </div>
    )
}