import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cadastro from "./pages/Cadastro/Cadastro"
import Produtos from "./pages/Produtos/Produtos"
import Home from "./pages/Home/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login/Login";
import RotaProtegida from "./components/RotaProtegida/RotaProtegida";
import NotFound from "./pages/NotFound/NotFound";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/produtos/cadastro" element={
          <RotaProtegida>
            <Cadastro />
          </RotaProtegida>
        } />
        <Route path="/produtos/:categoria" element={<Produtos />} />
        <Route path="/produtos/pesquisa" element={<Produtos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
