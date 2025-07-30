"use client";

import { useRef, useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCode,
  FaLaptopCode,
  FaServer,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import Image from "../assets/hadik.png";

const Home = () => {
  const ref = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { theme } = useTheme();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  useEffect(() => {
    // Check if animations have been shown before
    const animationsShown = localStorage.getItem("portfolio-animations-shown");

    if (animationsShown) {
      // Skip loading animation and go straight to content
      setIsLoaded(true);
      setHasAnimated(true);
    } else {
      // Show loading animation for first time
      const timer = setTimeout(() => {
        setIsLoaded(true);
        setHasAnimated(true);
        // Mark animations as shown
        localStorage.setItem("portfolio-animations-shown", "true");
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  const fadeIn = (direction, delay) => {
    return {
      hidden: {
        y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
        opacity: 0,
        x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };

  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: <FaLaptopCode />,
      title: "Frontend Design",
      color: "from-yellow-600 to-yellow-700",
    },
    {
      icon: <FaServer />,
      title: "Backend Solutions",
      color: "from-yellow-700 to-yellow-800",
    },
  ];

  const buttonGradient = "from-yellow-600 to-yellow-700";

  return (
    <>
      <AnimatePresence>
        {!isLoaded && !hasAnimated && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-gray-950 z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-24 h-24 border-t-4 border-solid rounded-full animate-spin mb-6 mx-auto" style={{ borderTopColor: "#F3E2D4" }}></div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent" style={{ background: "linear-gradient(to right, #F3E2D4, #D4B896)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Loading Portfolio
              </h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section
        className="relative min-h-screen flex items-center py-10 overflow-hidden bg-gradient-to-b from-slate-50 via-slate-100 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500 pt-28 md:pt-32"
        id="home"
        ref={ref}
      >
        {/* Particle background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{ backgroundColor: "#F3E2D4" }}
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 6 + 2}px`,
                    height: `${Math.random() * 6 + 2}px`,
                    opacity: Math.random() * 0.5 + 0.2,
                    animation: `floatParticle ${Math.random() * 10 + 10}s linear infinite`,
                    animationDelay: `${Math.random() * 10}s`,
                  }}
                />
              ))}
            </div>
          </div>
          <motion.div
            style={{ y: backgroundY }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-200/10 to-slate-300/30 dark:from-black/10 dark:to-black/30 z-0 transition-colors duration-500"
          />
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full filter blur-3xl transition-colors duration-500" style={{ backgroundColor: "rgba(243, 226, 212, 0.05)" }} />
          <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full filter blur-3xl transition-colors duration-500" style={{ backgroundColor: "rgba(212, 184, 150, 0.05)" }} />
        </div>

        <div
          className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.02] z-0 transition-opacity duration-500"
          style={{
            backgroundSize: "50px 50px",
            backgroundImage:
              theme === "dark"
                ? "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)"
                : "linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
          }}
        />

        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-20">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="lg:w-1/2 max-w-lg"
            >
              <div className="relative">
                <motion.h1
                  style={{ y: textY }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-gray-900 dark:text-white transition-colors duration-500"
                >
                  IKEN{" "}
                  <span className="relative inline-block">
                    <span
                      className="absolute inset-0 blur-xl opacity-30"
                      style={{
                        transform: "translateY(10px) scale(1.05)",
                        background: "linear-gradient(to right, #F3E2D4, #D4B896)"
                      }}
                    ></span>
                    <span
                      className="relative"
                      style={{
                        background:
                          "linear-gradient(to right, #F3E2D4, #D4B896)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      BILAL
                    </span>
                  </span>
                </motion.h1>

                <motion.div
                  variants={fadeIn("up", 0.4)}
                  className="mb-6 text-2xl md:text-3xl lg:text-4xl font-medium leading-tight"
                >
                  <span className="text-gray-700 dark:text-gray-200 mr-2 transition-colors duration-500">
                    I am a
                  </span>
                  <span className="relative">
                    <span className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 blur rounded-lg"></span>
                    <TypeAnimation
                      sequence={[
                        "Developer",
                        2000,
                        "Designer",
                        2000,
                        "Programmer",
                        2000,
                        "Problem Solver",
                        2000,
                      ]}
                      speed={50}
                      className="text-yellow-600 dark:text-yellow-400 font-semibold relative transition-colors duration-500"
                      wrapper="span"
                      repeat={Number.POSITIVE_INFINITY}
                    />
                  </span>
                </motion.div>

                <motion.p
                  variants={fadeIn("up", 0.5)}
                  className="mb-8 text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-500"
                >
                  I am passionate about creating beautiful and functional
                  solutions that solve real-world problems through clean code
                  and intuitive design. With expertise in both frontend and
                  backend technologies, I deliver complete web solutions.
                </motion.p>

                <motion.div
                  variants={fadeIn("up", 0.55)}
                  className="grid grid-cols-3 gap-4 mb-10"
                >
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl p-3 text-center hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-sm hover:shadow-md"
                    >
                      <div
                        className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white`}
                      >
                        {service.icon}
                      </div>
                      <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors duration-500">
                        {service.title}
                      </h3>
                    </div>
                  ))}
                </motion.div>

                {/* Added animated text for "Let's work together" */}
                <motion.div variants={fadeIn("up", 0.58)} className="mb-6">
                  <motion.p
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      textShadow: [
                        "0px 0px 0px rgba(184, 134, 11, 0)",
                        "0px 0px 12px rgba(184, 134, 11, 0.7)",
                        "0px 0px 0px rgba(184, 134, 11, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                    className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-700 bg-clip-text text-transparent"
                  >
                    Let's work together and make something great.
                  </motion.p>
                </motion.div>

                <motion.div variants={fadeIn("up", 0.7)} className="flex gap-5">
                  <a
                    href="https://www.linkedin.com/in/bilal-iken-548587332/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 rounded-full flex items-center justify-center text-xl text-gray-600 dark:text-gray-300 overflow-hidden"
                    aria-label="LinkedIn"
                  >
                    <span className="absolute inset-0 bg-gray-100 dark:bg-gray-800/80 transition-transform duration-300 group-hover:scale-0"></span>
                    <span className="absolute inset-0 bg-[#0A66C2] transform scale-0 transition-transform duration-300 group-hover:scale-100"></span>
                    <FaLinkedin className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:text-white" />
                  </a>

                  <a
                    href="https://github.com/Bilalik369"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 rounded-full flex items-center justify-center text-xl text-gray-600 dark:text-gray-300 overflow-hidden"
                    aria-label="GitHub"
                  >
                    <span className="absolute inset-0 bg-gray-100 dark:bg-gray-800/80 transition-transform duration-300 group-hover:scale-0"></span>
                    <span className="absolute inset-0 bg-[#171515] transform scale-0 transition-transform duration-300 group-hover:scale-100"></span>
                    <FaGithub className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:text-white" />
                  </a>

                  <a
                    href="https://www.instagram.com/by.lvl1?igsh=MTYzaDZ4cHhqeW5rZQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 rounded-full flex items-center justify-center text-xl text-gray-600 dark:text-gray-300 overflow-hidden"
                    aria-label="Instagram"
                  >
                    <span className="absolute inset-0 bg-gray-100 dark:bg-gray-800/80 transition-transform duration-300 group-hover:scale-0"></span>
                    <span className="absolute inset-0 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] transform scale-0 transition-transform duration-300 group-hover:scale-100"></span>
                    <FaInstagram className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:text-white" />
                  </a>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="lg:w-1/2 flex justify-center"
            >
              <img
                src={Image || "/placeholder.svg"}
                alt="Profile"
                className="w-[350px] lg:w-[500px] rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

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

        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }

        @keyframes pulse-slower {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.6;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default Home;
