"use client"

import { motion } from "framer-motion"
import { FaCode, FaServer, FaPalette, FaMobileAlt } from "react-icons/fa"
import { useTheme } from "../context/ThemeContext"

const About = () => {
  const { theme } = useTheme()

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
    }
  }

  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "UI/UX Design", level: 70 },
  ]

  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden bg-slate-50 dark:bg-gray-900 transition-colors duration-500"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-bl-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-tr-full filter blur-3xl" />

      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-500">
            À Propos de{" "}
            <span className="relative">
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 blur-lg opacity-30"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Moi
              </span>
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* About Text */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-colors duration-500 relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-b from-blue-500/10 to-purple-500/10 rounded-bl-full" />

              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-500">
                Bonjour, je suis Bilal Iken
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-500">
                Développeur web passionné par la création d'expériences numériques innovantes et attrayantes. Je me spécialise dans le développement d'applications web modernes utilisant les dernières technologies et outils.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-500">
                Je cherche constamment à améliorer mes compétences et à apprendre de nouvelles technologies pour offrir des solutions créatives à des problèmes complexes. Je crois qu'un bon design et des fonctionnalités fluides sont la clé d'une expérience utilisateur parfaite.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium transition-colors duration-500">
                  Développeur Frontend
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium transition-colors duration-500">
                  Designer UI/UX
                </span>
                <span className="px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full text-sm font-medium transition-colors duration-500">
                  Développeur Backend
                </span>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-colors duration-500">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-500">
                Mes Compétences
              </h3>

              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700 dark:text-gray-300 transition-colors duration-500">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 font-medium transition-colors duration-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden transition-colors duration-500">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center transition-colors duration-500">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center mx-auto mb-3 text-blue-600 dark:text-blue-400 transition-colors duration-500">
                    <FaCode className="text-xl" />
                  </div>
                  <h4 className="font-medium text-gray-900 dark:text-white transition-colors duration-500">
                    Développement Frontend
                  </h4>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 text-center transition-colors duration-500">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-800 flex items-center justify-center mx-auto mb-3 text-purple-600 dark:text-purple-400 transition-colors duration-500">
                    <FaPalette className="text-xl" />
                  </div>
                  <h4 className="font-medium text-gray-900 dark:text-white transition-colors duration-500">
                    Design UI/UX
                  </h4>
                </div>

                <div className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-4 text-center transition-colors duration-500">
                  <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-800 flex items-center justify-center mx-auto mb-3 text-teal-600 dark:text-teal-400 transition-colors duration-500">
                    <FaServer className="text-xl" />
                  </div>
                  <h4 className="font-medium text-gray-900 dark:text-white transition-colors duration-500">
                    Développement Backend
                  </h4>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 text-center transition-colors duration-500">
                  <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-800 flex items-center justify-center mx-auto mb-3 text-amber-600 dark:text-amber-400 transition-colors duration-500">
                    <FaMobileAlt className="text-xl" />
                  </div>
                  <h4 className="font-medium text-gray-900 dark:text-white transition-colors duration-500">
                    Applications Mobiles
                  </h4>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
