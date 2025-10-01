import React from "react";
import { Link } from "react-router-dom";
import { FaBookmark, FaHome } from "react-icons/fa";

export const Header = ({ leftElement, rightButton }) => {
    const getIcon = (text) => {
        if (text.toLowerCase().includes("watchlist")) return <FaBookmark size={20} />;
        if (text.toLowerCase().includes("home")) return <FaHome size={20} />;
        return null;
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center px-4 py-3 h-16">
                <div className="flex-1 text-primary">{leftElement}</div>
                <Link
                    to={rightButton.link}
                    className="ml-4 flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md shadow-sm hover:bg-primary/90"
                >
                    <span className="block sm:hidden">{getIcon(rightButton.text)}</span>
                    <span className="hidden sm:block">{rightButton.text}</span>
                </Link>

            </div>
        </header>
    );
};
