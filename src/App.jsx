import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home.jsx';
import Create from "./Create.jsx";
import Edit from "./Edit.jsx";
import Delete from "./Delete.jsx";
import DadosFilme from './DadosFilme.jsx';
import Banner from './Banner.jsx';

function App() {
  const [filmes, setFilmes] = useState([
  {
    "id": 1,
    "nome": "Interestelar",
    "diretor": "Christopher Nolan",
    "ano": 2014
  },
  {
    "id": 2,
    "nome": "Clube da Luta",
    "diretor": "David Fincher",
    "ano": 1999
  },
  {
    "id": 3,
    "nome": "Parasita",
    "diretor": "Bong Joon-ho",
    "ano": 2019
  },
  {
    "id": 4,
    "nome": "Cidade de Deus",
    "diretor": "Fernando Meirelles",
    "ano": 2002
  },
  {
    "id": 5,
    "nome": "Matrix",
    "diretor": "Lana Wachowski e Lilly Wachowski",
    "ano": 1999
  },
  {
    "id": 6,
    "nome": "O Poderoso Chefão",
    "diretor": "Francis Ford Coppola",
    "ano": 1972
  },
  {
    "id": 7,
    "nome": "Whiplash",
    "diretor": "Damien Chazelle",
    "ano": 2014
  },
  {
    "id": 8,
    "nome": "Blade Runner 2049",
    "diretor": "Denis Villeneuve",
    "ano": 2017
  }
]);
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Banner/>}>
      <Route index element={<Home listafilmes={filmes}/>}/>
      <Route path="home" element={<Home listafilmes={filmes}/>}/>
      <Route path='dados/:id' element={<DadosFilme filmesLista={filmes}/>}/>
      <Route path="create" element={<Create setFilmes={setFilmes}/>}/>
      <Route path="edit/:id" element={<Edit listaFilmes={filmes} mudarFilme={setFilmes}/>}/>
      <Route path="delete/:id" element={<Delete listaFilmes={filmes} setFilmes={setFilmes}/>}/>
      </Route>
      <Route path="*" element={<h1>URL FORNECIDA NÃO FOI ENCONTRADA</h1>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
