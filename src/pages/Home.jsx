import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
    <div>
        <p>This is the Home page.</p>
        <Link to="/watchlist" className="text-blue-600 font-semibold">Go To Watchlist</Link>
    </div>
);
