import "../css/Tarjeta_pelicula.css"

function TarjetaPelicula({ pelicula }) {

    function agregarAFavoritos() {
        alert(`Agregaste "${pelicula.titulo}" a tus favoritos!`);
    }

    return <div className = "tarjeta-pelicula">
        <div className = "poster-pelicula">
            <img src={pelicula.url} alt={pelicula.titulo} />
            <div className = "overlay-pelicula">
                <button className="favorito-btn" onClick={agregarAFavoritos}>
                    ♡︎
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