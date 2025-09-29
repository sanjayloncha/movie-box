import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Watchlist } from './pages/Watchlist'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <Router>
      <AppRoutes />
    </Router>
  )

}

export default App
