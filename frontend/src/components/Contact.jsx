import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationControls } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTheme } from "../context/ThemeContext"
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaInstagram,
  FaPaperPlane,
  FaUser,
  FaEdit
} from "react-icons/fa"

const Contact = () => {
  const containerRef = useRef(null)
  const { theme } = useTheme()
  const controls = useAnimationControls()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  
  const [ref, inView] = useInView({
    threshold: 0.1,
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

  const rotate = useTransform(smoothScrollProgress, [0, 1], [0, 2])
  const contentX = useTransform(mouseX, [-1, 1], [2, -2])
  const contentY = useTransform(mouseY, [-1, 1], [2, -2])

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        mass: 1,
      },
    },
  }

  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "bilal11iken@gmail.com",
      link: "mailto:bilal11iken@gmail.com",
      color: "from-amber-200 to-amber-300"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+212 605228749",
      link: "tel:+212605228749",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Beni Mellal, Morocco",
      link: "https://www.google.com/maps/place/Beni+Mellal,+Morocco",
      color: "from-amber-300 to-amber-400"
    }
  ]

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bilal-iken-548587332/",
      color: "#0A66C2"
    },
    {
      icon: <FaGithub />,
      name: "GitHub", 
      url: "https://github.com/Bilalik369",
      color: "#171515"
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      url: "https://www.instagram.com/by.lvl1?igsh=MTYzaDZ4cHhqeW5rZQ==", 
      color: "linear-gradient(45deg, #833AB4, #FD1D1D, #FCB045)"
    }
  ]

  
  const generateParticles = (count) => {
    return [...Array(count)].map((_, i) => {
      const size = Math.random() * 6 + 2
      const initialScale = Math.random() * 0.3 + 0.7
      const duration = Math.random() * 12 + 8
      const delay = Math.random() * 8
      
      return (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-amber-200 to-amber-300 dark:from-amber-200 dark:to-amber-300"
          initial={{ 
            opacity: 0,
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            scale: initialScale
          }}
          animate={{ 
            opacity: [0, Math.random() * 0.4 + 0.1, 0],
            scale: [initialScale, initialScale * 1.2, initialScale],
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
              duration: duration * 1.5,
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
      id="contact"
      ref={containerRef}
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-700 pt-28 md:pt-32"
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
            backgroundSize: "30px 30px",
            backgroundImage:
              theme === "dark"
                ? "linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)"
                : "linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)",
          }}
        />

        
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-200/5 dark:bg-amber-200/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-300/5 dark:bg-amber-300/10 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/3 dark:bg-teal-500/8 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 z-10 relative" ref={ref}>
        
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
            variants={itemVariants}
          >
            Get In{" "}
            <span className="relative inline-block">
              <motion.span
                className="absolute inset-0 blur-xl opacity-40" style={{ background: "linear-gradient(to right, #F3E2D4, #D4B896)" }}
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                style={{ transform: "translateY(8px) scale(1.05)" }}
              />
              <span
                className="relative"
                style={{
                  background: "linear-gradient(to right, #F3E2D4, #D4B896)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Touch
              </span>
            </span>
          </motion.h2>

          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-amber-200 to-amber-300 mx-auto mb-8 rounded-full"
            variants={itemVariants}
            whileInView={{
              width: ["0%", "100%"],
              opacity: [0, 1],
              transition: {
                width: { duration: 1, ease: "easeOut" },
                opacity: { duration: 0.5 }
              }
            }}
          />

          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
            I'm always excited to work on new projects and challenges.
          </motion.p>
        </motion.div>

       
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
         
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            style={{ x: contentX, y: contentY }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, creative projects, or potential collaborations.
              </p>
            </motion.div>

           
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="group flex items-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  variants={cardVariants}
                  whileHover={{
                    y: -2,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center text-white text-xl mr-6 group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            
            <motion.div variants={itemVariants} className="pt-8">
              <h4 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-14 h-14 rounded-xl flex items-center justify-center text-xl text-gray-600 dark:text-gray-300 overflow-hidden bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-amber-300/50 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: social.color }}
                    />
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          
          <motion.div
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-8 shadow-2xl"
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            style={{ rotate }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FaUser className="inline mr-2" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-900/50 border border-gray-300/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter your name"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FaEnvelope className="inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-900/50 border border-gray-300/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <FaEdit className="inline mr-2" />
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-900/50 border border-gray-300/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-900/50 border border-gray-300/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              
              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full px-8 py-4 text-white rounded-xl font-semibold flex items-center justify-center gap-3 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500"
                    whileHover={{
                      backgroundPosition: ["0% 50%", "100% 50%"],
                      transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                    style={{ backgroundSize: "200% 200%" }}
                  />
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-500 opacity-0 blur-xl"
                    whileHover={{
                      opacity: [0, 0.6, 0.4],
                      scale: [1, 1.1, 1.05],
                      transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" }
                    }}
                  />
                  <span className="relative flex items-center">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            repeatDelay: 0.5
                          }}
                        >
                          <FaPaperPlane className="w-5 h-5" />
                        </motion.div>
                      </>
                    )}
                  </span>
                </motion.button>
              </motion.div>

              
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-4 rounded-xl text-center font-medium ${
                    submitStatus === "success"
                      ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 border border-green-200 dark:border-green-800"
                      : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 border border-red-200 dark:border-red-800"
                  }`}
                >
                  {submitStatus === "success"
                    ? "🎉 Message sent successfully! I'll get back to you soon."
                    : "❌ Something went wrong. Please try again."}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
