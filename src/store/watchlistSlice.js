import { createSlice } from "@reduxjs/toolkit";

const initialState = { movies: JSON.parse(localStorage.getItem("watchlist")) || [], };

const watchlistSlice = createSlice({
    name: "watchlist",
    initialState,
    reducers: {
        addToWatchlist: (state, action) => {
            const movie = action.payload;
            if (!state.movies.find((m) => m.id === movie.id)) {
                state.movies.push(movie);
                localStorage.setItem("watchlist", JSON.stringify(state.movies));
            }
        },
        removeFromWatchlist: (state, action) => {
            const id = action.payload;
            state.movies = state.movies.filter((m) => m.id !== id);
            localStorage.setItem("watchlist", JSON.stringify(state.movies));
        },
    },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
