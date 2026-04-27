import { Link } from "react-router-dom"
import './login.css'

export default function Login() {
  return(
    <>
         <main className="container">
        <article>
          <h1>
            Bem Vindo de Volta!
          </h1>
            <form method='POST' action="">
              <div className="inputgroup">
                <label htmlFor="nome">
                    Nome
                </label>
                <input 
                  type="text" 
                  name="nome" 
                  id="nome" 
                  placeholder='Digite o seu Nome' 
                  required 
                  minLength={2}
                   />
              </div>
              <div className="inputgroup">
                <label htmlFor="senha">
                  Senha
                </label>
                <input 
                type="password" 
                name="senha" 
                id="senha" 
                placeholder='Digite a sua senha' 
                required />
              </div>
              <div className="link">
                <Link to="/pass"><p>
                  Esqueceu-se da password? Clique aqui!
                  </p></Link>
                <p>Não tem conta? <Link to="/cadastro">Inscreva-se!</Link> </p>
              </div>
              <div className="submit"><input className='btn' type="submit" value="Entrar" /></div>
            </form>
        </article>
      </main>
    </>
  ) 
  
}