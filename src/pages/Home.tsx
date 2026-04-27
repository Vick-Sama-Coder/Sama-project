import { Link } from "react-router-dom"

export default function Home() {
  return(
  <>
    <h1>Seja Bem Vindo!</h1>
    <Link to="/login" >Login</Link>
    <Link to="/pass" >Recuperar Senha</Link>
    <Link to="/cadastro" >Cadastro</Link>
    <Link to="/criarevento" >Criar Eventos</Link>
    <Link to="/eventos" >Eventos</Link>
    
  </>
  ) 
}