import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header } from "../components/Header";
import { removeFromWatchlist } from "../store/watchlistSlice";
import { MovieCard } from "../components/MovieCard";

export const Watchlist = () => {
    const watchlist = useSelector((state) => state.watchlist.movies);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeFromWatchlist(id));
    };

    return (
        <div className="p-6 pt-16">
            <Header
                leftElement={<h1 className="text-2xl font-bold">My Watchlist</h1>}
                rightButton={{ text: "← Back to Home", link: "/" }}
            />

            <div className="mt-6">
                {watchlist.length === 0 ? (
                    <p className="text-gray-600 text-center">Your watchlist is empty 😢</p>
                ) : (
                    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                        {watchlist.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                buttonText="Remove"
                                buttonAction={() => handleRemove(movie.id)}
                                buttonType="danger"
                            />
                        ))}
                    </ul>
                )}
            </div>

        </div>
    );
};
