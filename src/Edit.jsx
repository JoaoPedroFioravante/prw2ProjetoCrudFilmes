import { useNavigate, useParams} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Edit({ listaFilmes, mudarFilme }) {
  const id = useParams().id;
  const filme = listaFilmes.filter((e) => e.id == id)[0];
  const navigate = useNavigate();
  
  const [campos, setCampos] = useState({
    id : filme.id,
    nome: filme.nome,
    diretor: filme.diretor,
    imdb: filme.imdb, 
    nacionalidade: filme.nacionalidade
  });
  return (
    <div>
      <h2>alteração das informações do filme</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          
          axios.put(`https://6a05127baa826ca75c0973d3.mockapi.io/web2/filmes/filmes/${campos.id}`,{
            id : campos.id,
            nome: campos.nome,
            diretor: campos.diretor,
            imdb: campos.imdb, 
            nacionalidade: campos.nacionalidade
          })
          .then(()=> axios.get("https://6a05127baa826ca75c0973d3.mockapi.io/web2/filmes/filmes")
          )
          .then(e=> mudarFilme(e.data))
          .catch(e=> console.log(e))
          navigate("/home");
        }}
      >
        <p>nome do filme</p>
        <input
          required
          type="text"
          value={campos.nome}
          onChange={(e) => {
            setCampos({
              ...campos,
              nome: e.target.value,
            });
          }}
          placeholder="digite o nome do filme"
        />
        <p>diretor</p>
        <input
          required
          type="text"
          value={campos.diretor}
          onChange={(e) => {
            setCampos({
              ...campos,
              diretor: e.target.value,
            });
          }}
          placeholder="digite o nome do diretor do filme"
        />
       <p>nacionalidade</p>
        <input
          required
          type="text"
          value={campos.nacionalidade}
          onChange={(e) => {
            setCampos({
              ...campos,
              nacionalidade: e.target.value
            });
          }}
          placeholder="digite a nacionalidade do filme"
        />
        <p>digite o imdb do filme</p>
        <input type="number" min={0} max={100} name="" id="" value={campos.imdb} 
        onChange={e=> {
          setCampos({
            ...campos, 
            imdb: e.target.value
          });
        }}/>

        <button type="submit" children="enviar"/>
        <button onClick={()=> navigate("/home")} children={"cancelar"}/>
      </form>
    </div>
  );
}
