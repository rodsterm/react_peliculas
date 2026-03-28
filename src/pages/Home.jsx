import "../css/Home.css"
import TarjetaPelicula from "../components/Tarjeta_pelicula"
import { useState, useEffect } from "react"
import { buscarPeliculas, getPeliculasPopulares } from "../servicios/api"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [peliculas, setPeliculas] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPeliculasPopulares = async () => {
            try {
                const peliculasPopulares = await getPeliculasPopulares();
                setPeliculas(peliculasPopulares);
            } catch (error) {
                setError("Error al cargar las películas");
            } finally {
                setLoading(false);
            }
        };
        loadPeliculasPopulares();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        try {
            setLoading(true);
            const resultados = await buscarPeliculas(searchQuery);
            setPeliculas(resultados);
        } catch (error) {
            setError("Error al buscar películas");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="formulario-busqueda">
                <input
                    type="text"
                    placeholder="Busca una película..."
                    className="input-busqueda"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="boton-busqueda">
                    Buscar
                </button>
            </form>

            {loading && <p style={{ color: "var(--clr-text-muted)", textAlign: "center", marginTop: "2rem" }}>Cargando películas...</p>}
            {error && <p style={{ color: "var(--clr-danger)", textAlign: "center", marginTop: "2rem" }}>{error}</p>}

            <div className="grid-peliculas">
                {peliculas.map((pelicula) => (
                    <TarjetaPelicula pelicula={pelicula} key={pelicula.id} />
                ))}
            </div>
        </div>
    );
}

export default Home