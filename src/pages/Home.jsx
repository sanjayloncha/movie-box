import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies, searchMovies } from "../api/movieApi";
import { addToWatchlist } from "../store/watchlistSlice";
import { Header } from "../components/Header";
import { MovieCard } from "../components/MovieCard";

export const Home = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const dispatch = useDispatch();
    const watchlist = useSelector((state) => state.watchlist.movies);
    const [loading, setLoading] = useState(false);


    const handleAdd = (movie) => {
        dispatch(addToWatchlist(movie));
    };

    const isInWatchlist = (id) => {
        return watchlist.some((movie) => movie.id === id);
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        setLoading(true);
    };


    useEffect(() => {
        let delayDebounce;

        const fetchData = async () => {
            setLoading(true);
            try {
                let results = [];
                if (query.trim()) {
                    results = await searchMovies(query);
                } else {
                    results = await getPopularMovies();
                }
                setMovies(results);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        if (query === "") {
            fetchData();
        } else {
            delayDebounce = setTimeout(fetchData, 500);
        }

        return () => clearTimeout(delayDebounce);
    }, [query]);


    return (
        <div className="p-6 pt-16">
            <Header
                leftElement={
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="Search movies..."
                        className="w-full max-w-xl px-4 py-2 border border-primary rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                }
                rightButton={{ text: "Watchlist", link: "/watchlist" }}
            />

            {/* Movie grid */}
            {loading ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="bg-gray-300 animate-pulse h-64 rounded"></div>
                    ))}
                </div>
            ) : movies.length === 0 ? (
                <p className="text-center text-gray-600 mt-6">No movies found 😢</p>
            ) : (
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                    {movies.map((movie) => {
                        const inWatchlist = isInWatchlist(movie.id);
                        return (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                buttonText={inWatchlist ? "Added" : "+ Watchlist"}
                                buttonAction={() => !inWatchlist && handleAdd(movie)}
                                buttonClass={inWatchlist ? "disabled" : "primary"}
                            />
                        );
                    })}
                </ul>
            )}

        </div>
    );
};
