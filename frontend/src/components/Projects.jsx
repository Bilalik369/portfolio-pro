import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationControls } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTheme } from "../context/ThemeContext"
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaJs, FaDatabase, FaCode, FaEye, FaMobile, FaDesktop, FaBook, FaBuilding, FaDumbbell, FaFilm, FaTruck, FaChartBar } from "react-icons/fa"
import { SiTailwindcss, SiMongodb, SiExpress, SiTypescript, SiFirebase, SiPostgresql, SiSocketdotio, SiStripe, SiReactrouter, SiJsonwebtokens } from "react-icons/si"
import troImage from "../assets/tro.png"
import xprt from "../assets/cons.jpg"
import sprt from "../assets/gym.jpg";
import so from "../assets/soon.png"
import mobil from "../assets/bbo.jpg"
import tro from "../assets/image.png"

const Projects = () => {
  const containerRef = useRef(null)
  const { theme } = useTheme()
  const controls = useAnimationControls()
  const [hoveredProject, setHoveredProject] = useState(null)

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "-50px 0px",
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const smoothScrollProgress = useSpring(scrollYProgress, { 
    damping: 30, 
    stiffness: 100,
    mass: 0.5 
  })

  const backgroundY = useTransform(smoothScrollProgress, [0, 1], ["0%", "100%"])

  // Vos vrais projets
  const projects = [

    {
      id: 1,
      title: "Plateforme de Transport & Livraison",
      description: "Plateforme complète de transport et livraison avec système de réservation en temps réel, tracking GPS, paiements intégrés via Stripe, authentification OAuth et interface d'administration avancée.",
      image: so,
      technologies: [
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
        { name: "Express", icon: <SiExpress />, color: "text-gray-600" },
        { name: "React", icon: <FaReact />, color: "text-blue-500" },
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
        { name: "JWT", icon: <SiJsonwebtokens />, color: "text-purple-500" },
        { name: "Stripe", icon: <SiStripe />, color: "text-blue-600" },
        { name: "Firebase", icon: <SiFirebase />, color: "text-orange-500" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-500" }
      ],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Full-Stack",
      type: "web"
    },
    {
      id: 2,
      title: "TransportConnect - Plateforme de Logistique",
      description: "Application web MERN multi-rôles pour la logistique de transport de marchandises. Inclut authentification, création d'annonces, gestion des demandes, évaluations, dashboard administrateur et messagerie temps réel.",
      image: tro,
      technologies: [
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
        { name: "Express", icon: <SiExpress />, color: "text-gray-600" },
        { name: "React", icon: <FaReact />, color: "text-blue-500" },
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
        { name: "JWT", icon: <SiJsonwebtokens />, color: "text-purple-500" },
        { name: "Socket.io", icon: <SiSocketdotio />, color: "text-black dark:text-white" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-500" },
        { name: "Docker", icon: <FaCode />, color: "text-blue-600" }
      ],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Full-Stack",
      type: "web"
    },
    
    {
      id: 3,
      title: "Smart Transformer Dashboard",
      description: "Dashboard intelligent pour la surveillance de transformateurs électriques avec données en temps réel via Socket.io, visualisations interactives avec Chart.js et interface moderne responsive.",
      image: troImage,
      technologies: [
        { name: "React", icon: <FaReact />, color: "text-blue-500" },
        { name: "Socket.io", icon: <SiSocketdotio />, color: "text-black dark:text-white" },
        { name: "Chart.js", icon: <FaChartBar />, color: "text-orange-500" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-500" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" }
      ],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Frontend",
      type: "web"
    },
    {
      id: 4,
      title: "Gestion de Projets de Construction",
      description: "Application complète pour la gestion de projets de construction avec suivi des tâches, gestion des équipes, planning interactif, rapports de progression et gestion budgétaire.",
      image: xprt,
      technologies: [
        { name: "React", icon: <FaReact />, color: "text-blue-500" },
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
        { name: "Express", icon: <SiExpress />, color: "text-gray-600" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-500" }
      ],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Full-Stack",
      type: "web"
    },
    {
      id: 5,
      title: "Plateforme de Gestion de Salle de Sport",
      description: "Système complet de gestion pour salles de sport avec inscription des membres, planning des cours, suivi des abonnements, système de paiement et tableaux de bord analytiques.",
      image: sprt,
      technologies: [
        { name: "React", icon: <FaReact />, color: "text-blue-500" },
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
        { name: "Express", icon: <SiExpress />, color: "text-gray-600" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-500" }
      ],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Full-Stack",
      type: "web"
    },
    {
      id: 6,
      title: "Portfolio Personnel",
      description: "Site portfolio moderne et interactif avec animations fluides, mode sombre/clair, formulaire de contact fonctionnel, optimisation SEO et design responsive élégant.",
      image: "/api/placeholder/600/400",
      technologies: [
        { name: "React", icon: <FaReact />, color: "text-blue-500" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-500" },
        { name: "Framer Motion", icon: <FaCode />, color: "text-purple-500" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" }
      ],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Frontend",
      type: "web"
    },
    {
      id: 7,
      title: "BookShare - Partage de Livres",
      description: "Application mobile sociale pour le partage de livres préférés entre utilisateurs. Fonctionnalités de recommandations, reviews, chat intégré et système de notation communautaire.",
      image: mobil,
      technologies: [
        { name: "React Native", icon: <FaReact />, color: "text-blue-500" },
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
        { name: "Express", icon: <SiExpress />, color: "text-gray-600" },
        { name: "Firebase", icon: <SiFirebase />, color: "text-orange-500" }
      ],
      github: "https://github.com",
      live: "https://play.google.com",
      category: "Mobile",
      type: "mobile"
    }
  ]

  const categories = ["All", "Web", "Mobile", "Full-Stack", "Frontend"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = projects.filter(project => {
    if (activeCategory === "All") return true
    if (activeCategory === "Web") return project.type === "web"
    if (activeCategory === "Mobile") return project.type === "mobile"
    return project.category === activeCategory
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: "beforeChildren",
      },
    },
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        mass: 0.8,
      },
    },
  }

  const generateParticles = (count) => {
    return [...Array(count)].map((_, i) => {
      const size = Math.random() * 6 + 2
      const duration = Math.random() * 8 + 6
      const delay = Math.random() * 4
      
      return (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400"
          initial={{ 
            opacity: 0,
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          }}
          animate={{ 
            opacity: [0, Math.random() * 0.4 + 0.1, 0],
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
          }}
          transition={{ 
            duration: duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: delay
          }}
          style={{
            width: `${size}px`,
            height: `${size}px`,
          }}
        />
      )
    })
  }

  const getProjectIcon = (type) => {
    return type === "mobile" ? <FaMobile className="text-blue-500" /> : <FaDesktop className="text-green-500" />
  }

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 dark:from-black dark:via-gray-900 dark:to-gray-800 transition-colors duration-700 pt-28 md:pt-32"
    >
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 opacity-20">
          {generateParticles(25)}
        </div>

        <motion.div
          className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.03] z-0"
          animate={{
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            backgroundSize: "60px 60px",
            backgroundImage:
              theme === "dark"
                ? "linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)"
                : "linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)",
          }}
        />

        <motion.div
          className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 relative" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
            variants={itemVariants}
          >
            Mes{" "}
            <span className="relative inline-block">
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-xl opacity-40"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                style={{ transform: "translateY(10px) scale(1.1)" }}
              />
              <span
                className="relative"
                style={{
                  background: "linear-gradient(to right, #0071ff, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Projets
              </span>
            </span>
          </motion.h2>

          <motion.div
            className="w-40 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mb-8 rounded-full mx-auto"
            variants={itemVariants}
            whileInView={{
              width: ["0%", "100%"],
              opacity: [0, 1],
              transition: {
                width: { duration: 1, ease: "easeOut" },
                opacity: { duration: 0.3 }
              }
            }}
          />

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Découvrez une sélection de mes projets récents, allant du développement web full-stack aux applications mobiles, 
            incluant des plateformes de gestion, des dashboards intelligents et des solutions innovantes.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-800/80 border border-gray-200 dark:border-gray-700"
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    {getProjectIcon(project.type)}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-sm px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700/50 rounded-md text-xs ${tech.color}`}
                    >
                      {tech.icon}
                      <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                  {project.technologies.length > 4 && (
                    <div className="flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-700/50 rounded-md text-xs text-gray-600 dark:text-gray-400">
                      +{project.technologies.length - 4} plus
                    </div>
                  )}
                </div>

                <div className="flex gap-2 justify-end">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    <FaGithub size={16} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Discutons de votre projet
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects