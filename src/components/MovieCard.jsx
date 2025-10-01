import React, { useState } from "react";

export const MovieCard = ({ movie, buttonText, buttonAction, buttonClass, buttonType = "primary" }) => {
    const [imgLoaded, setImgLoaded] = useState(false);

    let btnClasses = "";
    if (buttonType === "primary") {
        btnClasses = buttonClass === "disabled"
            ? "bg-secondary text-gray-700 cursor-default"
            : "bg-primary hover:bg-primary/90";
    } else if (buttonType === "danger") {
        btnClasses = "bg-danger text-white rounded hover:bg-danger/90";
    }

    return (
        <li className="bg-gray-100 p-2 rounded shadow flex flex-col transform transition-transform duration-200 hover:scale-[1.02] relative">
            {!imgLoaded && (
                <div className="w-full h-52 bg-gray-300 animate-pulse rounded mb-2 object-cover"></div>
            )}

            <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className={`w-full rounded mb-2 object-cover transition-opacity duration-500 ${imgLoaded ? "opacity-100" : "opacity-0 absolute"
                    }`}
                onLoad={() => setImgLoaded(true)}
            />

            <p className="mt-2 text-center font-medium flex-1">{movie.title}</p>
            <button
                onClick={buttonAction}
                className={`mt-2 px-3 py-1 rounded text-white ${btnClasses}`}
                disabled={buttonClass === "disabled" && buttonType === "primary"}
                aria-label={
                    buttonType === "primary"
                        ? buttonText === "Added"
                            ? `${movie.title} is already in your watchlist`
                            : `Add ${movie.title} to watchlist`
                        : `Remove ${movie.title} from watchlist`
                }
            >
                {buttonText}
            </button>

        </li>
    );
};
