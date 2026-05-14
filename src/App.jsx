import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Create from "./Create.jsx";
import Edit from "./Edit.jsx";
import Delete from "./Delete.jsx";
import DadosFilme from "./DadosFilme.jsx";
import Banner from "./Banner.jsx";
import axios from "axios";

function App() {
  const [filmes, setFilmes] = useState([]);
  useEffect(() => {
    axios
      .get("https://6a05127baa826ca75c0973d3.mockapi.io/web2/filmes/filmes")
      .then((data) => setFilmes(data.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Banner />}>
          <Route index element={<Home listafilmes={filmes} />} />
          <Route path="home" element={<Home listafilmes={filmes} />} />
          <Route
            path="dados/:id"
            element={<DadosFilme filmesLista={filmes} />}
          />
          <Route path="create" element={<Create filmes={filmes} setFilmes={setFilmes} />} />
          <Route
            path="edit/:id"
            element={<Edit listaFilmes={filmes} mudarFilme={setFilmes} />}
          />
          <Route
            path="delete/:id"
            element={<Delete listaFilmes={filmes} setFilmes={setFilmes} />}
          />
        </Route>
        <Route
          path="*"
          element={<h1>URL FORNECIDA NÃO FOI ENCONTRADA</h1>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
