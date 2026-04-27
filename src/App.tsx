
import { HashRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Pass from "./pages/Pass"

function App() {
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/pass" element={<Pass />} />
      </Routes>
    </HashRouter>
  )

}

export default App
