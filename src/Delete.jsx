import {useNavigate, useParams} from "react-router-dom"
import axios from "axios"

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
        <div>
        <h2>você deseja excluir o filme {filme.nome}?</h2>
        <ul>
            <li>Diretor: {filme.diretor}</li>
            <li>Nacionalidade: {filme.nacionalidade}</li>
            <li>IMDB: {filme.imdb}</li>
        </ul>
        <button onClick={ ()=>{
            axios.delete(`https://6a05127baa826ca75c0973d3.mockapi.io/web2/filmes/filmes/${filme.id}`)
            .then(()=> axios.get("https://6a05127baa826ca75c0973d3.mockapi.io/web2/filmes/filmes"))
            .then(e=>setFilmes(e.data))
            .catch(e => console.log(e))
            navigate("/home");
        }    
        } children={"excluir"}/>
        <button onClick={()=>navigate("/home")} children={"cancelar"}/>
        
        </div>
    )
}