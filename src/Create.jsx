import { useState } from "react";
import {useNavigate } from "react-router-dom";

export default function Create({ setFilmes }) {
  let anoAtual = new Date().getFullYear();
  const navigate = useNavigate();
  const [campos, setCampos] = useState({
    id: "",
    nome: "",
    ano: anoAtual,
    diretor: "",
  });
  return (
    <div>
      <h2>preencha os dados e adicione um filme</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setFilmes((i) => [...i, campos]);
          navigate("/home");
        }}
      >
        <p>id do filme</p>
        <input
          required
          type="text"
          value={campos.id}
          placeholder="digite o id do filme"
          onChange={(e) => {
            setCampos({
              ...campos,
              id: e.target.value,
            });
          }}
        />
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
          max={anoAtual}
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

        <button type="submit" children={"criar"} />
        <button type="button" children={"cancelar"} onClick={()=> navigate("/home")} />
      </form>
    </div>
  );
}
