import axios from "axios";
import { useState } from "react";
import {useNavigate } from "react-router-dom";

export default function Create({filmes, setFilmes }) {
  const navigate = useNavigate();
  const [campos, setCampos] = useState({
    nome: "",
    diretor: "",
    imdb: 0, 
    nacionalidade: ""
  });
  return (
    <div>
      <h2>preencha os dados e adicione um filme</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if((filmes.filter((e) => campos.id == e.id)).length != 0){
            alert("filme ja existente");
            navigate("/home");
            return;
          }
          axios.post("https://6a05127baa826ca75c0973d3.mockapi.io/web2/filmes/filmes", 
            {
              nome: campos.nome,
              diretor: campos.diretor,
              imdb: campos.imdb, 
              nacionalidade: campos.nacionalidade
            }
          )
          .then(()=> axios.get("https://6a05127baa826ca75c0973d3.mockapi.io/web2/filmes/filmes"))
          .then(e => setFilmes(e.data))
          .catch(e => console.log(e))
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

        <button type="submit" children={"criar"} />
        <button type="button" children={"cancelar"} onClick={()=> navigate("/home")} />
      </form>
    </div>
  );
}
