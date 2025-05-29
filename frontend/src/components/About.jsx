import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationControls } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTheme } from "../context/ThemeContext"
import Image from "../assets/fina.png"

const About = () => {
  const containerRef = useRef(null)
  const { theme } = useTheme()
  const controls = useAnimationControls()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: false,
    rootMargin: "-50px 0px",
  })

  
  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])


  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      
      mouseX.set((clientX / innerWidth) * 2 - 1)
      mouseY.set((clientY / innerHeight) * 2 - 1)
    }
    
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  
  const smoothScrollProgress = useSpring(scrollYProgress, { 
    damping: 30, 
    stiffness: 100,
    mass: 0.5 
  })

 
  const rotate = useTransform(smoothScrollProgress, [0, 1], [0, 4])
  const opacity = useTransform(smoothScrollProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])
  
  
  const contentX = useTransform(mouseX, [-1, 1], [3, -3])
  const contentY = useTransform(mouseY, [-1, 1], [3, -3])

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        when: "beforeChildren",
      },
    },
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
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

  const imageVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 16,
        mass: 1.2,
        duration: 1.2,
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
        damping: 12,
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 12px 30px -6px rgba(0, 0, 0, 0.12), 0 10px 15px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 450,
        damping: 12,
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
      }
    },
  }

  
  const generateParticles = (count) => {
    return [...Array(count)].map((_, i) => {
      const size = Math.random() * 8 + 2
      const initialScale = Math.random() * 0.4 + 0.8
      const duration = Math.random() * 8 + 6
      const delay = Math.random() * 6
      
      return (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400"
          initial={{ 
            opacity: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: initialScale
          }}
          animate={{ 
            opacity: [0, Math.random() * 0.5 + 0.2, 0],
            scale: [initialScale, initialScale * 1.3, initialScale],
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
          }}
          transition={{ 
            opacity: { 
              duration: duration,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              times: [0, 0.5, 1],
              delay: delay
            },
            scale: { 
              duration: duration * 1.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: delay
            },
            x: {
              duration: duration * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: delay
            },
            y: {
              duration: duration * 2,
              repeat: Infinity,
              repeatType: "reverse", 
              ease: "easeInOut",
              delay: delay
            }
          }}
          style={{
            width: `${size}px`,
            height: `${size}px`,
          }}
        />
      )
    })
  }
  
  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-gray-900 dark:via-gray-900 dark:to-black transition-colors duration-700 pt-28 md:pt-32"
    >
      
      <div className="absolute inset-0 w-full h-full">
        
        <div className="absolute inset-0 opacity-30">
          {generateParticles(30)}
        </div>

    
        <motion.div
          className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.03] z-0"
          animate={{
            opacity: [0.02, 0.04, 0.02],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            backgroundSize: "40px 40px",
            backgroundImage:
              theme === "dark"
                ? "linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)"
                : "linear-gradient(to right, rgba(0, 0, 0, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.07) 1px, transparent 1px)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 relative" ref={ref}>
        
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-x-16 gap-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          
          <motion.div 
            className="lg:w-1/2 relative flex items-center justify-center"
            variants={imageVariants}
          >
            
            <motion.div
              className="relative max-w-md mx-auto lg:mx-0"
              animate={{
                x: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <img 
                src={Image || "/placeholder.svg"} 
                alt="Profile" 
                className="w-full h-auto" 
              />
            </motion.div>
          </motion.div>

        
          <motion.div 
            className="lg:w-1/2 flex items-center" 
            style={{ 
              
              x: contentX,
              rotateY: useTransform(mouseX, [-1, 1], [1, -1]),
              rotateX: useTransform(mouseY, [-1, 1], [-1, 1]),
            }}
          >
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
                variants={itemVariants}
              >
                About{" "}
                <span className="relative inline-block">
                  
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-xl opacity-40"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                    style={{ transform: "translateY(10px) scale(1.1)" }}
                  ></motion.span>
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
                className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mb-8 rounded-full"
                variants={itemVariants}
                whileInView={{
                  width: ["0%", "100%"],
                  opacity: [0, 1],
                  transition: {
                    width: { duration: 0.8, ease: "easeOut" },
                    opacity: { duration: 0.3 }
                  }
                }}
              />

              <motion.h3 
                className="text-2xl font-semibold mb-5 text-gray-800 dark:text-gray-200" 
                variants={itemVariants}
              >
                I'm a <span className="text-blue-600 dark:text-blue-400">Full-Stack Developer</span> with over 1 year of hands-on experience.
              </motion.h3>

              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed" 
                variants={itemVariants}
              >
                I am passionate about creating <span className="font-medium text-blue-600 dark:text-blue-400">beautiful and functional solutions</span> that solve real-world problems through
                clean code and intuitive design. With expertise in both frontend and backend technologies, I deliver
                complete web solutions that exceed expectations and provide <span className="font-medium text-purple-600 dark:text-purple-400">exceptional user experiences</span>.
              </motion.p>

              <div className="flex flex-wrap gap-5">
                <motion.a
                  href="#contact"
                  className="group relative px-8 py-3.5 text-white rounded-full font-medium flex items-center gap-2 overflow-hidden"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                >
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
                    whileHover={{
                      backgroundPosition: ["0% 50%", "100% 50%"],
                      transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                    style={{ backgroundSize: "200% 200%" }}
                  ></motion.span>
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 blur-xl"
                    whileHover={{
                      opacity: [0, 0.6, 0.4],
                      scale: [1, 1.2, 1.1],
                      transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" }
                    }}
                  ></motion.span>
                  <span className="relative flex items-center">
                    Contact Me
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      initial={{ x: 0 }}
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        repeatDelay: 0.5
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </motion.svg>
                  </span>
                </motion.a>

                <motion.a
                  href="/CV FINAL.pdf" 
                  download
                  className="group relative px-8 py-3.5 overflow-hidden rounded-full"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                >
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 opacity-50"
                    whileHover={{
                      opacity: 1,
                      scale: 1.05,
                    }}
                  ></motion.span>
                  <span className="relative font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 flex items-center">
                    Download CV
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      initial={{ y: 0 }}
                      animate={{ y: [0, 3, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        repeatDelay: 0.5
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </motion.svg>
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes floatParticle {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          33% {
            transform: translateY(-40px) translateX(20px) rotate(5deg);
          }
          66% {
            transform: translateY(40px) translateX(-20px) rotate(-5deg);
          }
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
        }
      `}</style>
    </section>
  )
}

export default About