import { useNavigate, useParams} from "react-router-dom";
import { useState } from "react";

export default function Edit({ listaFilmes, mudarFilme }) {
  const id = useParams().id;
  let ano = new Date().getFullYear();
  const filme = listaFilmes.filter((e) => e.id == id)[0];
  const filmes = listaFilmes.filter((e) => e.id != id);
  const navigate = useNavigate();
  
  const [campos, setCampos] = useState({
    id : filme.id,
    nome: filme.nome,
    ano: filme.ano,
    diretor: filme.diretor,
  });
  return (
    <div>
      <h2>alteração das informações do filme de id: {id}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mudarFilme([...filmes, campos]);
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
        <p>ano de lançamento</p>
        <input
          type="number"
          value={campos.ano}
          onChange={(e) => {
            setCampos({
              ...campos,
              ano: e.target.value,
            });
          }}
          min={1900}
          max={ano}
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
        <button type="submit" children="enviar"/>
        <button onClick={()=> navigate("/home")} children={"cancelar"}/>
      </form>
    </div>
  );
}
