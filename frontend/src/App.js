
import React from 'react';
  import Navbar from './components/Navbar';
  import About from './components/About';
  import Home from './components/Home';

  function App() {
    return (
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 scroll-smooth">
        <Navbar />

        <section id="home" className="h-screen flex items-center justify-center">
          <Home/>
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects" className="h-screen flex items-center justify-center">
          <h2 className="text-3xl">Mes Projets</h2>
        </section>

        <section id="skills" className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <h2 className="text-3xl">Compétences</h2>
        </section>

        <section id="contact" className="h-screen flex items-center justify-center">
          <h2 className="text-3xl">Contactez-moi</h2>
        </section>
      </div>
    );
  }

  export default App;
