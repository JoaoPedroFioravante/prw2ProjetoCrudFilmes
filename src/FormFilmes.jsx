
import { useState } from "react";
import {useNavigate } from "react-router-dom";

export default function FormFilmes({nomeP= "", diretorP= "",imdbP= 0, nacionalidadeP= "", onSubmitFunction, filmes, setFilmes}){
    const navigate = useNavigate();
    const [campos, setCampos] = useState({
        nome: nomeP,
        diretor: diretorP,
        imdb: imdbP, 
        nacionalidade: nacionalidadeP
      });
    return(
    <div className="h-screen bg-zinc-800 p-5">
      <h2 className=" text-center text:base sm:text-xl text-white lg:text-2xl xl:text-3xl">Preencha os dados do Filme desejado</h2>
      <form
        onSubmit={onSubmitFunction}
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
    )
}