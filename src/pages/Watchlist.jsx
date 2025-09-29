import React from 'react';
import { Link } from 'react-router-dom';

export const Watchlist = () => {
    return (
        <div>
            <h1>Watchlist</h1>
            <Link to="/" className="text-blue-600 font-semibold">Go To Home</Link>
        </div>
    );
};
