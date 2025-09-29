import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home.jsx'
import { Watchlist } from '../pages/Watchlist.jsx'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
    )
}
