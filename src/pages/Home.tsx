import { Link } from "react-router-dom"
import { SlidersHorizontal } from 'lucide-react';
import Photo from "../assets/3d-music-related-scene.jpg"
import Logo from "../assets/icon-icons.svg"

export default function Home() {
  return(
  <>
  <div className="flex flex-col bg-gray-950 h-full text-white items-center ">
      <header>
    <nav className=" flex itens-center justify-between p-3" >
      <img className="w-9 pr-2  " src={Logo} alt="" />
      <h1 className="font-bold">Ticket <span>Hub</span></h1>
      
    </nav>
  </header>

  <main className=" flex-1 flex  text-center flex-col w-full  ">
    <article className="w-full p-4 ">
      <form className="flex justify-between " action="">
        <input className="placeholder-purple-800 p-4 w-[70vw] outline-indigo-700 border-purple-800 border rounded-xl" type="search" name="search" id="Search"  placeholder="Buscar eventos..."/> 
        <button className=" bg-purple-800 p-2 ml-2 rounded-xl w-[18vw]  flex justify-center items-center ">
          <SlidersHorizontal ></SlidersHorizontal>
        </button>
      </form>
    </article>
    <section className="rounded-xl m-2 border-red-500 text-left px-4 py-5 flex flex-col items-start w-auto bg-green-600 bg-cover h-auto "
    style={{backgroundImage: `url(${Photo})`}}>
      <h1 className=" font-bold text-4xl mb-2">Descubra eventos incriveis perto de ti</h1>
      <p>Compre bilhetes <br /> de forma segura e facil</p>
      <Link className="border p-4 mt-4 rounded-xl bg-purple-700 font-bold border-none" to="/eventos"><button>Explorar eventos</button></Link>

    </section>

    <section className="w-full flex justify-between p-4">
      <h2>Eventos em Destaque</h2>
      <Link className="text-purple-800 underline" to="/eventos">Ver todos</Link>
      </section>
      <section className="flex flex-col">
        <div className="flex flex-col m-2 ">
          <img src="" alt="" />
          <h2>Show do ....</h2>
          <p>Arena XX, Maputo</p>
          <article>
            <p>Preço</p>
            <button>comprar</button>
          </article>
        </div>
        <div className="flex flex-col m-2 ">
          <img src="" alt="" />
          <h2>Show do ....</h2>
          <p>Arena XX, Maputo</p>
          <article>
            <p>Preço</p>
            <button>comprar</button>
          </article>
        </div>  

        <div className="flex flex-col m-2 ">          
          <img src="" alt="" />
          <h2>Show do ....</h2>
          <p>Arena XX, Maputo</p>
          <article>
            <p>Preço</p>
            <button>comprar</button>
          </article>

        </div >           
          <div className="flex flex-col m-2 ">
          <img src="" alt="" />
          <h2>Show do ....</h2>
          <p>Arena XX, Maputo</p>
          <article>
            <p>Preço</p>
            <button>comprar</button>
          </article>    
        </div >     
        <div className="flex flex-col m-2 ">
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