import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home.jsx';
import Create from "./Create.jsx";
import Edit from "./Edit.jsx";
import Delete from "./Delete.jsx";
import DadosFilme from './DadosFilme.jsx';
import Banner from './Banner.jsx';

function App() {
  const [filmes, setFilmes] = useState([]);

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>teste</h1>}>
      <Route path="home" element={<Home listafilmes={filmes}/>}/>
      <Route path='dados/:id' element={<DadosFilme filmesLista={filmes}/>}/>
      <Route path="create" element={<Create adicionarFilme={setFilmes}/>}/>
      <Route path="edit/:id" element={<Edit listaFilmes={filmes} mudarFilme={setFilmes}/>}/>
      <Route path="delete/:id" element={<Delete excluirFilme={setFilmes}/>}/>
      </Route>
      <Route path="*" element={<h1>URL FORNECIDA NÃO FOI ENCONTRADA</h1>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
