import { Link } from "react-router-dom"


export default function Cadastro() {
  return(
    <>
      <main>

        <section className="container">
           <h1>Criar uma Conta</h1>
          <p>Crie já a sua conta</p>
          <form method="POST" action="">
            <div className="inputgroup">
              <label htmlFor="nome">Nome Completo</label>
              <input type="text" name="nome" id="nome" />
            </div>
            <div className="inputgroup">
              <label htmlFor="email">Seu email</label>
              <input type="email" name="" id="" />
            </div>
          </form>
          <Link to='/'>Home</Link>
        </section>
      </main>
    </>
  ) 
}