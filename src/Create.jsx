import axios from "axios";


import { useState } from "react";
import {useNavigate } from "react-router-dom";

export default function Create({ filmes, setFilmes}){
    const navigate = useNavigate();
    const [campos, setCampos] = useState({
        nome: "",
        diretor: "",
        imdb: "", 
        nacionalidade: ""
      });
    return(
    <div className="min-h-screen bg-zinc-800 p-5">
      <h2 className=" text-center text:base sm:text-xl text-white lg:text-2xl xl:text-3xl">Preencha os dados do Filme desejado</h2>
      <form
        onSubmit={(e) => {           e.preventDefault();
          if((filmes.filter((e) => campos.nome == e.nome && campos.diretor == e.diretor)).length != 0){
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
          .then(e => {setFilmes(e.data)
            navigate("/home");
          })
          .catch(e => console.log(e))
          navigate("/home");
        }}
        className="bg-white flex flex-col p-5"
      >   
        <p className="content-start ">Nome do filme</p>
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
          className="border-solid border-2 border-yellow-500 rounded"
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
          className="border-solid border-2 border-yellow-500 rounded"
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
          className="border-solid border-2 border-yellow-500 rounded"
        />
        <p>digite o imdb do filme</p>
        <input type="number" min={0} max={100} name="" id="" value={campos.imdb} 
        onChange={e=> {
          setCampos({
            ...campos, 
            imdb: e.target.value
          });
        }}
        className="border-solid border-2 border-yellow-500 rounded"
        />
        <div className="flex justify-center gap-5 m-5">
        <button type="submit" children={"criar"} className="bg-yellow-500 font-semibold p-3 rounded" />
        <button type="button" children={"cancelar"} onClick={()=> navigate("/home")} className="bg-yellow-500 font-semibold p-3 rounded" />
        </div>
      </form>
    </div>
  );
}
