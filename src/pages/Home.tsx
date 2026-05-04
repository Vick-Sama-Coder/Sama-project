import { Link } from "react-router-dom"
import { SlidersHorizontal } from 'lucide-react';
import Photo from "../assets/3d-music-related-scene.jpg"
import Logo from "../assets/icon-icons.svg"

export default function Home() {
  return(
  <>
  <div className="flex flex-col  bg-purple-950 h-screen text-white items-center ">
      <header>
    <nav className=" flex itens-center justify-between p-3" >
      <img className="w-8 pr-2  " src={Logo} alt="" />
      <span className="">Ticket <span>Hub</span></span>
      
    </nav>
  </header>

  <main className=" flex-1 flex  text-center flex-col w-full  ">
    <article className="w-full p-[5vw] ">
      <form className="flex justify-between " action="">
        <input className="placeholder-purple-800 p-4 w-[70vw] outline-indigo-700 border-purple-800 border rounded-xl" type="search" name="search" id="Search"  placeholder="Buscar eventos..."/> 
        <button className=" bg-purple-800 p-2  rounded-xl w-[18vw]  flex justify-center items-center ">
          <SlidersHorizontal></SlidersHorizontal>
        </button>
      </form>
    </article>
    <section className="text-left p-4 flex flex-col items-start w-full bg-green-600 h-64 bg-cover  "
    style={{backgroundImage: `url(${Photo})`}}>
      <h1 className=" font-bold text-4xl mb-2">Descubra eventos incriveis perto de ti</h1>
      <p>Compre bilhetes <br /> de forma segura e facil</p>
      <Link className="border p-4 mt-4 rounded-xl bg-purple-700 font-bold border-none" to="/eventos"><button>Explorar eventos</button></Link>

    </section>

    <section className="w-full">
      <h2>Eventos em Destaque</h2>
      <Link to="/eventos">Ver todos</Link>
      <div>
        <img src="" alt="" />
        <h2>Show do ....</h2>
        <p>Arena XX, Maputo</p>
        <article>
          <p>Preço</p>
          <button>comprar</button>
        </article>
      </div>
    </section>
  </main>
  </div>
  </>
  ) 
}