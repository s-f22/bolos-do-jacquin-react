import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cadastro from "./pages/Cadastro/Cadastro"
import Produtos from "./pages/Produtos/Produtos"
import Home from "./pages/Home/Home"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/produtos/:categoria" element={<Produtos />} />
        <Route path="/produtos/pesquisa" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
