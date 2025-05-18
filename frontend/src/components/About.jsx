"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import CountUp from "react-countup"
import { useTheme } from "../context/ThemeContext"
import Image from "../assets/full.jpg" // Using the same image from your Home component

const About = () => {
  const containerRef = useRef(null)
  const { theme } = useTheme()

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 1.2,
      },
    },
  }

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.6,
      },
    },
  }

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 transition-colors duration-500 pt-28 md:pt-32"
    >
      {/* Background elements */}
      <div className="absolute inset-0 w-full h-full">
        {/* Particles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500 dark:bg-blue-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: Math.random() * 0.5 + 0.2 }}
              transition={{ duration: 1, delay: i * 0.1 }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                animation: `floatParticle ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient blobs */}
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/5 dark:bg-purple-500/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        />

        {/* Grid background */}
        <div
          className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.02] z-0"
          style={{
            backgroundSize: "50px 50px",
            backgroundImage:
              theme === "dark"
                ? "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)"
                : "linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 relative" ref={ref}>
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-x-16 gap-y-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Image Section */}
          <motion.div className="lg:w-1/2 relative" style={{ y: y1 }} variants={imageVariants}>
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="relative rounded-xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img src={Image || "/placeholder.svg"} alt="Profile" className="w-full h-auto rounded-xl" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Text Section */}
          <motion.div className="lg:w-1/2" style={{ y: y2 }}>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
              variants={itemVariants}
            >
              About{" "}
              <span className="relative inline-block">
                <span
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-xl opacity-30"
                  style={{ transform: "translateY(10px) scale(1.05)" }}
                ></span>
                <span
                  className="relative"
                  style={{
                    background: "linear-gradient(to right, #0071ff, #7c3aed)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Me
                </span>
              </span>
            </motion.h2>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-6 rounded-full"
              variants={itemVariants}
            />

            <motion.h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200" variants={itemVariants}>
              I'm a developer front-end and back-end with over 1 year of experience.
            </motion.h3>

            <motion.p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed" variants={itemVariants}>
              I am passionate about creating beautiful and functional solutions that solve real-world problems through
              clean code and intuitive design. With expertise in both frontend and backend technologies, I deliver
              complete web solutions that exceed expectations and provide exceptional user experiences.
            </motion.p>

            {/* Stats Section */}
            <motion.div className="flex gap-x-12 mb-10" variants={statsVariants}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-md" />
                <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-1">
                    {inView ? <CountUp start={0} end={13} duration={2.5} /> : 0}+
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                    Projects
                    <br />
                    Completed
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl blur-md" />
                <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600 mb-1">
                    {inView ? <CountUp start={0} end={12} duration={2.5} /> : 0}+
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                    Months of
                    <br />
                    Experience
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="group relative px-8 py-3 text-white rounded-full font-medium flex items-center gap-2 overflow-hidden"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:scale-105"></span>
                <span className="relative flex items-center">
                  Contact Me
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </motion.a>

              <motion.a
                href="#projects"
                className="group relative px-8 py-3 overflow-hidden rounded-full"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 opacity-50 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 flex items-center">
                  My Portfolio
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes floatParticle {
          0% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(20px);
          }
          75% {
            transform: translateY(20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>
    </section>
  )
}

export default About
