
import { HashRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Pass from "./pages/Pass"
import Eventos from "./pages/Eventos"
import CriarEvento from "./pages/CriarEvento"


function App() {
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/pass" element={<Pass />} />
        <Route path="/criarevento" element={<CriarEvento />} />
        <Route path="/eventos" element={<Eventos />} />
      </Routes>
    </HashRouter>
  )

}

export default App
