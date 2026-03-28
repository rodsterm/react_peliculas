
// Renombrar a api.js para utilizar la api de themoviedb


const API_KEY = "XXXXXXXXXXXXXXXXXXXXXX";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPeliculasPopulares = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const buscarPeliculas = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}