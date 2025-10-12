import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cadastro from "./pages/Cadastro/Cadastro"
import Produtos from "./pages/Produtos/Produtos"
import Home from "./pages/Home/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={
          <ProtectedRoute>
            <Cadastro />
          </ProtectedRoute>
        } />
        <Route path="/produtos/:categoria" element={<Produtos />} />
        <Route path="/produtos/pesquisa" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
