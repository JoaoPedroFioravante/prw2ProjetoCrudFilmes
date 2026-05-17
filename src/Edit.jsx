import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Edit({ listaFilmes, mudarFilme }) {

  const id = useParams().id;
  const navigate = useNavigate();

  const filme = listaFilmes.find(
    (e) => Number(e.id) === Number(id)
  );

  const [campos, setCampos] = useState({
    id: "",
    nome: "",
    diretor: "",
    imdb: "",
    nacionalidade: ""
  });

  useEffect(() => {

    if (filme) {
      setCampos({
        id: filme.id,
        nome: filme.nome,
        diretor: filme.diretor,
        imdb: filme.imdb,
        nacionalidade: filme.nacionalidade
      });
    }

  }, [filme]);

  if (!filme) {
    return <h1>Carregando...</h1>;
  }
  return (
   
    <div className="min-h-screen bg-zinc-800 p-5">
      <h2 className=" text-center text:base sm:text-xl text-white lg:text-2xl xl:text-3xl">Preencha os dados do Filme desejado</h2>
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
          .then(e=> {mudarFilme(e.data)
            navigate("/home");
          })
          .catch(e=> console.log(e))
          
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
        <button type="submit" children={"salvar"} className="bg-yellow-500 font-semibold p-3 rounded" />
        <button type="button" children={"cancelar"} onClick={()=> navigate("/home")} className="bg-yellow-500 font-semibold p-3 rounded" />
        </div>
      </form>
    </div>
  );
}
