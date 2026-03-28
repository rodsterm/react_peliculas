import "../css/Tarjeta_pelicula.css"
import { useContextoPeliculas } from "../contexts/ContextoPeliculas"

function TarjetaPelicula({ pelicula }) {
    const { agregarFavorito, eliminarFavorito, esFavorito } = useContextoPeliculas();
    const favorito = esFavorito(pelicula.id);

    function OnClickFavorito(e) {
        e.preventDefault();
        if (favorito) {
            eliminarFavorito(pelicula.id);
        } else {
            agregarFavorito(pelicula);
        }
    }

    return <div className="tarjeta-pelicula">
        <div className="poster-pelicula">
            <img src={pelicula.url} alt={pelicula.titulo} />
            <div className="overlay-pelicula">
                <button className={`favorito-btn ${favorito ? "favorito" : ""}`} onClick={OnClickFavorito}>
                    {favorito ? "❤️" : "❤︎"}
                </button>
            </div>
        </div>
        <div className="info-pelicula">
            <h3>{pelicula.titulo}</h3>
            <p>{pelicula.fecha_lanzamiento}</p>

        </div>
    </div>
}

export default TarjetaPelicula
// 24.47