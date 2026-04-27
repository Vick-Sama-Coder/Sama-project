import { Link } from "react-router-dom"

export default function CriarEvento(){
    return(
        <>
            <h1>Criar Eventos</h1>
            <Link to="/eventos">Eventos</Link>
            <Link to="/" >Home</Link>
        </>
    ) 
}