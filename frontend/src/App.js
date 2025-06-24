"use client"

import { useEffect } from "react"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About" 
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

import { ThemeProvider } from "./context/ThemeContext"
import "./App.css"

function App() {
  
  useEffect(() => {
    
    const handleResize = () => {
      
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
        <About />
        <Projects/>
        <Skills/>
        
        
        <Contact/>
        
         
        
      </div>
    </ThemeProvider>
  )
}

export default App
