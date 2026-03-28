import TarjetaPelicula from "../components/Tarjeta_pelicula"
import {useState} from "react"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    
    const peliculas = [
        {id:1, titulo: "Matrix", fecha_lanzamiento: "1999"},
        {id:2, titulo: "Bastardos sin gloria", fecha_lanzamiento: "2009"},
        {id:3, titulo: "¿Qué pasó ayer?", fecha_lanzamiento: "2009"},
        {id:4, titulo: "Up: Una aventura de altura", fecha_lanzamiento: "2009"},
        {id:5, titulo: "Avatar", fecha_lanzamiento: "2009"},
        {id:6, titulo: "Tierra de zombies", fecha_lanzamiento: "2009"},
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")

    }

    return (
    < div className="home">
        <form onSubmit={handleSearch} className="formulario-busqueda">
            <input type="text" placeholder="Busca una pelicula..." className="input-busqueda"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type = "submit" className="boton-busqueda">
                Busqueda
                </button>
        </form>


        <div className="grid-peliculas"> 
            {peliculas.map(
                (pelicula) => 
                pelicula.titulo.toLowerCase().startsWith(searchQuery.toLowerCase()) && (
                <TarjetaPelicula pelicula={pelicula} key={pelicula.id}/>
                )
            )}
        </div>
        
    </div>
    );
}

export default Home

// 38:12