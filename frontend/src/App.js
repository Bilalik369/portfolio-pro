"use client"

import { useEffect } from "react"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About" // Importation du composant About
import { ThemeProvider } from "./context/ThemeContext"
import "./App.css"

function App() {
  // Add this to ensure animations work properly with Framer Motion
  useEffect(() => {
    // Fix for Framer Motion animations
    const handleResize = () => {
      // Force a reflow
      document.body.style.height = window.innerHeight + "px"
      setTimeout(() => {
        document.body.style.height = ""
      }, 0)
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Home />
        <About /> {/* Ajout de la section About */}
        {/* Add other sections here */}
      </div>
    </ThemeProvider>
  )
}

export default App
