import axios from "axios";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const getPopularMovies = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/movie/popular`, {
            params: {
                api_key: API_KEY,
                language: "en-US",
                page: 1,
            },
        });
        return response.data.results;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        return [];
    }
};

export const searchMovies = async (query) => {
    if (!query) return [];
    try {
        const response = await axios.get(`${API_BASE_URL}/search/movie`, {
            params: {
                api_key: API_KEY,
                language: "en-US",
                query,
                page: 1,
            },
        });
        return response.data.results;
    } catch (error) {
        console.error("Error searching movies:", error);
        return [];
    }
};
