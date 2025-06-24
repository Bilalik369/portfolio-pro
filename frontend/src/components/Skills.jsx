import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useAnimationControls,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaNodeJs,
  FaServer,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaCode,
  FaCloud,
  FaTools,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGithub,
  FaNpm,
  FaBootstrap,
  FaMobile,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiTailwindcss,
  SiPostman,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiJest,
  SiGraphql,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiKubernetes,
  SiFigma,
  SiJquery,
  SiReactos,
} from "react-icons/si";

const Skills = () => {
  const containerRef = useRef(null);
  const controls = useAnimationControls();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [activeCategory, setActiveCategory] = useState("frontend");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: "-50px 0px",
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      mouseX.set((clientX / innerWidth) * 2 - 1);
      mouseY.set((clientY / innerHeight) * 2 - 1);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const contentX = useTransform(mouseX, [-1, 1], [2, -2]);
  const contentY = useTransform(mouseY, [-1, 1], [2, -2]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

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
  };

  const skillVariants = {
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
  };

  const skillsData = {
    frontend: {
      title: "Frontend Development",
      icon: <FaCode />,
      color: "from-blue-500 to-purple-600",
      description: "Building responsive and interactive user interfaces",
      skills: [
        { name: "React", icon: <FaReact />, level: 95, color: "#61DAFB" },
        { name: "React Native", icon: <FaMobile />, level: 85, color: "#61DAFB" },
        {
          name: "TypeScript",
          icon: <SiTypescript />,
          level: 65,
          color: "#3178C6",
        },
        { name: "JavaScript", icon: <FaJs />, level: 95, color: "#F7DF1E" },
        { name: "HTML5", icon: <FaHtml5 />, level: 98, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, level: 95, color: "#1572B6" },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          level: 92,
          color: "#06B6D4",
        },
        { name: "Bootstrap", icon: <FaBootstrap />, level: 88, color: "#7952B3" },
        { name: "jQuery", icon: <SiJquery />, level: 85, color: "#0769AD" },
        { name: "Redux", icon: <SiRedux />, level: 80, color: "#764ABC" },
      ],
    },
    backend: {
      title: "Backend Development",
      icon: <FaServer />,
      color: "from-green-500 to-teal-600",
      description: "Creating robust server-side applications and APIs",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 90, color: "#339933" },
        {
          name: "Express.js",
          icon: <SiExpress />,
          level: 88,
          color: "#ffffff",
        },
        { name: "MongoDB", icon: <SiMongodb />, level: 85, color: "#47A248" },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql />,
          level: 75,
          color: "#336791",
        },
        { name: "MySQL", icon: <SiMysql />, level: 80, color: "#4479A1" },
        { name: "GraphQL", icon: <SiGraphql />, level: 70, color: "#E10098" },
        { name: "Redis", icon: <SiRedis />, level: 65, color: "#DC382D" },
        { name: "Python", icon: <FaPython />, level: 75, color: "#3776AB" },
      ],
    },
    devops: {
      title: "DevOps & Cloud",
      icon: <FaCloud />,
      color: "from-orange-500 to-red-600",
      description: "Deployment, monitoring, and infrastructure management",
      skills: [
        { name: "Docker", icon: <FaDocker />, level: 80, color: "#2496ED" },
        { name: "AWS", icon: <FaAws />, level: 75, color: "#FF9900" },
        {
          name: "Kubernetes",
          icon: <SiKubernetes />,
          level: 65,
          color: "#326CE5",
        },
        { name: "Git", icon: <FaGitAlt />, level: 95, color: "#F05032" },
        { name: "GitHub", icon: <FaGithub />, level: 95, color: "#ffffff" },
        { name: "Vercel", icon: <SiVercel />, level: 85, color: "#ffffff" },
        { name: "Firebase", icon: <SiFirebase />, level: 80, color: "#FFCA28" },
      ],
    },
    tools: {
      title: "Tools & Others",
      icon: <FaTools />,
      color: "from-purple-500 to-pink-600",
      description: "Development tools and productivity software",
      skills: [
        { name: "VS Code", icon: <FaCode />, level: 98, color: "#007ACC" },
        { name: "Postman", icon: <SiPostman />, level: 90, color: "#FF6C37" },
        { name: "Jest", icon: <SiJest />, level: 75, color: "#C21325" },
        { name: "Figma", icon: <SiFigma />, level: 85, color: "#F24E1E" },
        { name: "npm", icon: <FaNpm />, level: 90, color: "#CB3837" },
      ],
    },
  };

  const categories = [
    { id: "frontend", label: "Frontend", icon: <FaCode /> },
    { id: "backend", label: "Backend", icon: <FaServer /> },
    { id: "devops", label: "DevOps", icon: <FaCloud /> },
    { id: "tools", label: "Tools", icon: <FaTools /> },
  ];

  const generateParticles = (count) => {
    return [...Array(count)].map((_, i) => {
      const size = Math.random() * 4 + 2;
      const initialScale = Math.random() * 0.3 + 0.7;
      const duration = Math.random() * 15 + 10;
      const delay = Math.random() * 10;

      return (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-10"
          initial={{
            opacity: 0,
            x: Math.random() * 1000,
            y: Math.random() * 800,
            scale: initialScale,
          }}
          animate={{
            opacity: [0, 0.2, 0],
            scale: [initialScale, initialScale * 1.2, initialScale],
            x: [Math.random() * 100, Math.random() * 100, Math.random() * 100],
            y: [Math.random() * 100, Math.random() * 100, Math.random() * 100],
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: delay,
          }}
          style={{
            width: `${size}px`,
            height: `${size}px`,
          }}
        />
      );
    });
  };

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black transition-colors duration-700 pt-28 md:pt-32"
    >
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 opacity-20">
          {generateParticles(20)}
        </div>

        <motion.div
          className="absolute inset-0 w-full h-full opacity-[0.03] z-0"
          animate={{
            opacity: [0.02, 0.05, 0.02],
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
              "linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
          }}
        />

        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-500/8 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 z-10 relative" ref={ref}>
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            variants={itemVariants}
          >
            My{" "}
            <span className="relative inline-block">
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-xl opacity-40"
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
                  background: "linear-gradient(to right, #0071ff, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Skills
              </span>
            </span>
          </motion.h2>

          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"
            variants={itemVariants}
            whileInView={{
              width: ["0%", "100%"],
              opacity: [0, 1],
              transition: {
                width: { duration: 1, ease: "easeOut" },
                opacity: { duration: 0.5 },
              },
            }}
          />

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Expertise in modern web technologies and development tools for
            building scalable, performant applications.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex justify-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="flex flex-wrap gap-4 p-2 bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-gray-700/50">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{category.icon}</span>
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          style={{ x: contentX, y: contentY }}
        >
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl"
          >
            <div className="text-center mb-12">
              <div
                className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${skillsData[activeCategory].color} text-white text-3xl mb-6 shadow-lg`}
              >
                {skillsData[activeCategory].icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {skillsData[activeCategory].title}
              </h3>
              <p className="text-gray-300 text-lg">
                {skillsData[activeCategory].description}
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {skillsData[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="group relative bg-gray-900/60 backdrop-blur-xl border border-gray-600/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
                  variants={skillVariants}
                  custom={index}
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  whileHover={{
                    y: -5,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                >
                  <div className="flex items-center justify-center mb-4">
                    <div
                      className="text-4xl mb-2 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                  </div>

                  <h4 className="text-white font-semibold text-center mb-4 group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </h4>

                  <div className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Proficiency</span>
                      <span className="text-sm font-medium text-white">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}40, ${skill.color})`,
                        }}
                        initial={{ width: 0 }}
                        animate={{
                          width:
                            hoveredSkill === skill.name || inView
                              ? `${skill.level}%`
                              : 0,
                        }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>

                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${skill.color}10, transparent)`,
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;