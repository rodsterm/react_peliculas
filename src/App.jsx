import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './css/App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import { MovieProvider } from './contexts/ContextoPeliculas'


function App() {

  return (
    <MovieProvider>
      <div>
        <NavBar />
        <main className="contenido-principal">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </MovieProvider>
  )
}

function Text({ display }) {
  return (<div>
    <p>{display}</p>
  </div>
  )
}


export default App
