import {useNavigate, useParams} from "react-router-dom"

export default function DadosFilme({filmesLista}){
    const obj = useParams();
    const navigate = useNavigate();
    const filme = filmesLista.filter(e => e.id == obj.id)[0];
    if(!filme){
        return(
            <h1>
                não encontrado
            </h1>
        )
    }
    return(
        <div>
            <h2>
                {filme.nome}
            </h2>
            <ul>
                <li>Diretor: {filme.diretor}</li>
                <li>Nacionalidade: {filme.nacionalidade}</li>
                <li>IMDB: {filme.imdb}</li>
            </ul>

            <button onClick={()=>{
                navigate(`/edit/${filme.id}`)
            }}  children={"editar filme"}/>

            <button onClick={()=>{
                navigate("/home")
            }}  children={"home"}/>
        </div>
    )

}