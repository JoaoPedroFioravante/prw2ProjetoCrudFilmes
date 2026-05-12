import {useNavigate, useParams} from "react-router-dom"

export default function Delete({listaFilmes, setFilmes}){
    const obj = useParams();
    const navigate = useNavigate();
    const filme = listaFilmes.filter(e => e.id == obj.id)[0];
    const filmes = listaFilmes.filter(e => e.id != obj.id);
    if(!filme){
        return(
            <h1>não encontrado</h1>
        )
    }
    return(
        <div>
        <h2>você deseja excluir o filme de id {filme.id}?</h2>
        <ul>
            <li>nome: {filme.nome}</li>
            <li>ano de lançamento: {filme.ano}</li>
            <li>diretor: {filme.diretor}</li>
        </ul>
        <button onClick={ ()=>{
            setFilmes(filmes)
            navigate("/home");
        }    
        } children={"excluir"}/>
        <button onClick={()=>navigate("/home")} children={"cancelar"}/>
        
        </div>
    )
}