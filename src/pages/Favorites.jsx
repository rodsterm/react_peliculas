import "../css/Favorites.css"
import { useContextoPeliculas } from "../contexts/ContextoPeliculas"
import TarjetaPelicula from "../components/Tarjeta_pelicula"

function Favorites() {
    const { favoritos } = useContextoPeliculas();

    if (favoritos.length > 0) {
        return (
            <div className="favorites">
                <h2 className="titulo-seccion">Tus Películas Favoritas</h2>
                <div className="grid-peliculas">
                    {favoritos.map((pelicula) => (
                        <TarjetaPelicula pelicula={pelicula} key={pelicula.id} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="favoritos-vacio">
            <h2>No tienes películas favoritas</h2>
            <p>Agrega películas a tus favoritos para verlas aquí</p>
        </div>
    );
}

export default Favorites;