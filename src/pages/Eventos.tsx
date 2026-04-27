import { Link } from "react-router-dom";


export default function Eventos(){
    return(
        <>
            <h1>Eventos</h1>
            <Link to="/criarevento">Criar Eventos</Link>
            <Link to="/" >Home</Link>
        </>
    ) 
}