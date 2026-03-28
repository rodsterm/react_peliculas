

import { createContext, useState, useContext, useEffect } from "react";

const ContextoPeliculas = createContext();

export const useContextoPeliculas = () => {
    return useContext(ContextoPeliculas);
}

export const MovieProvider = ({ children }) => {

    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        const storageFavoritos = localStorage.getItem("favoritos");
        if (storageFavoritos) {
            setFavoritos(JSON.parse(storageFavoritos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }, [favoritos]);

    const agregarFavorito = (pelicula) => {
        setFavoritos(prev => [...prev, pelicula]);
    }

    const eliminarFavorito = (movieId) => {
        setFavoritos(prev => prev.filter(pelicula => pelicula.id !== movieId));
    }

    const esFavorito = (movieId) => {
        return favoritos.some(pelicula => pelicula.id === movieId);
    }

    const valorContexto = {
        favoritos,
        agregarFavorito,
        eliminarFavorito,
        esFavorito
    }

    return (
        <ContextoPeliculas.Provider value={valorContexto}>
            {children}
        </ContextoPeliculas.Provider>
    )

}
