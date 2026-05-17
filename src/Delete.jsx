import {useNavigate, useParams} from "react-router-dom"
import axios from "axios"
import DadosFilme from "./DadosFilme";

export default function Delete({listaFilmes, setFilmes}){
    const obj = useParams();
    const navigate = useNavigate();
    const filme = listaFilmes.filter(e => e.id == obj.id)[0];
    if(!filme){
        return(
            <h1>não encontrado</h1>
        )
    }
    return(
        <div className="text-sm sm:text-base  lg:text-lg xl:text-2xl h-screen bg-black">
        <h2 className="text-white font-bold text-center">Deseja excluir o filme com seguintes dados? </h2>
       <DadosFilme filme={filme}/>
       <div className="flex gap-2 justify-center">
        <button className="bg-yellow-500 font-semibold p-3 rounded" onClick={ ()=>{
            axios.delete(`https://6a05127baa826ca75c0973d3.mockapi.io/web2/filmes/filmes/${filme.id}`)
            .then(()=> axios.get("https://6a05127baa826ca75c0973d3.mockapi.io/web2/filmes/filmes"))
            .then(e=>setFilmes(e.data))
            .catch(e => console.log(e))
            navigate("/home");
        }    
        } children={"excluir"}/>
        <button className=" bg-yellow-500 font-semibold p-3 rounded" onClick={()=>navigate("/home")} children={"cancelar"}/>
        </div>
        </div>
    )
}