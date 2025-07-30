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
  FaGithub,
  FaNpm,
  FaBootstrap,
  FaMobile,

  FaEnvelope,
  FaTrello,
  FaUsers,
  FaLightbulb,
  FaBullhorn,
  FaClock,
  FaHandshake,
  FaEye,
  FaBrain,
  FaHeart,
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
  SiPostgresql,
  SiRedis,
  SiKubernetes,
  SiFigma,
  SiJquery,
  SiSocketdotio,
  SiJsonwebtokens,
  SiSass,
} from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";

const Skills = () => {
  const containerRef = useRef(null);
  const controls = useAnimationControls();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [activeCategory, setActiveCategory] = useState("frontend");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedSoftSkill, setSelectedSoftSkill] = useState(null);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: "-50px 0px",
  });

  const [softSkillsRef, softSkillsInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
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
      color: "from-red-500 to-red-800",
      description: "Building responsive and interactive user interfaces",
      skills: [
        { name: "React", icon: <FaReact />, level: 95, color: "#61DAFB" },
        {
          name: "React Native",
          icon: <FaMobile />,
          level: 80,
          color: "#61DAFB",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript />,
          level: 65,
          color: "#3178C6",
        },
        { name: "JavaScript", icon: <FaJs />, level: 95, color: "#F7DF1E" },
        { name: "HTML5", icon: <FaHtml5 />, level: 90, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, level: 90, color: "#1572B6" },
        { name: "Sass", icon: <SiSass />, level: 85, color: "#CC6699" },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          level: 92,
          color: "#06B6D4",
        },
        {
          name: "Bootstrap",
          icon: <FaBootstrap />,
          level: 80,
          color: "#7952B3",
        },
        { name: "jQuery", icon: <SiJquery />, level: 80, color: "#0769AD" },
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
        {
          name: "REST API",
          icon: <BiNetworkChart />,
          level: 92,
          color: "#00D4AA",
        },
        { name: "JWT", icon: <SiJsonwebtokens />, level: 88, color: "#000000" },
        {
          name: "Socket.IO",
          icon: <SiSocketdotio />,
          level: 82,
          color: "#010101",
        },
        { name: "Firebase", icon: <SiFirebase />, level: 80, color: "#FFCA28" },
        {
          name: "Nodemailer",
          icon: <FaEnvelope />,
          level: 85,
          color: "#0F9D58",
        },
        { name: "Redis", icon: <SiRedis />, level: 65, color: "#DC382D" },
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
      color: "from-red-600 to-red-800",
      description: "Development tools and productivity software",
      skills: [
        { name: "VS Code", icon: <FaCode />, level: 98, color: "#007ACC" },
        { name: "Postman", icon: <SiPostman />, level: 90, color: "#FF6C37" },
        { name: "Trello", icon: <FaTrello />, level: 85, color: "#0079BF" },
        { name: "Figma", icon: <SiFigma />, level: 85, color: "#F24E1E" },
        { name: "npm", icon: <FaNpm />, level: 90, color: "#CB3837" },
      ],
    },
  };

  const softSkillsData = [
    {
      name: "Team Leadership",
      icon: <FaUsers />,
      color: "#FF6B6B",
      description:
        "Experienced in leading development teams, delegating tasks effectively, and fostering a collaborative environment that drives project success and team growth.",
      details: [
        "Led cross-functional teams of 5+ developers",
        "Implemented agile methodologies",
        "Mentored junior developers",
        "Resolved team conflicts effectively",
      ],
    },
    {
      name: "Creative Problem Solving",
      icon: <FaLightbulb />,
      color: "#4ECDC4",
      description:
        "Approach complex technical challenges with innovative solutions, thinking outside the box to overcome obstacles and optimize performance.",
      details: [
        "Designed scalable architecture solutions",
        "Optimized application performance by 40%",
        "Created custom tools for team productivity",
        "Solved critical production issues",
      ],
    },
    {
      name: "Effective Communication",
      icon: <FaBullhorn />,
      color: "#45B7D1",
      description:
        "Excellent at translating technical concepts to stakeholders, facilitating clear communication between teams, and presenting ideas persuasively.",
      details: [
        "Present to executive stakeholders",
        "Create technical documentation",
        "Facilitate team meetings",
        "Bridge communication gaps",
      ],
    },
    {
      name: "Time Management",
      icon: <FaClock />,
      color: "#96CEB4",
      description:
        "Expert at prioritizing tasks, meeting deadlines consistently, and managing multiple projects simultaneously while maintaining quality standards.",
      details: [
        "Manage multiple projects concurrently",
        "Meet 98% of project deadlines",
        "Optimize workflow processes",
        "Balance urgent vs important tasks",
      ],
    },
    {
      name: "Adaptability",
      icon: <FaHandshake />,
      color: "#FFEAA7",
      description:
        "Quick to adapt to new technologies, changing requirements, and evolving project scopes while maintaining productivity and positive attitude.",
      details: [
        "Quickly learn new frameworks",
        "Adapt to changing requirements",
        "Work in diverse team environments",
        "Handle project pivots smoothly",
      ],
    },
    {
      name: "Attention to Detail",
      icon: <FaEye />,
      color: "#DDA0DD",
      description:
        "Meticulous approach to code quality, thorough testing, and ensuring pixel-perfect implementations that meet exact specifications.",
      details: [
        "Code review expert",
        "Zero critical bugs in production",
        "Pixel-perfect UI implementations",
        "Comprehensive testing strategies",
      ],
    },
    {
      name: "Critical Thinking",
      icon: <FaBrain />,
      color: "#98D8C8",
      description:
        "Analytical mindset for evaluating complex problems, making data-driven decisions, and implementing sustainable long-term solutions.",
      details: [
        "Analyze complex business requirements",
        "Make data-driven decisions",
        "Evaluate technology trade-offs",
        "Plan scalable architectures",
      ],
    },
    {
      name: "Emotional Intelligence",
      icon: <FaHeart />,
      color: "#F7DC6F",
      description:
        "Strong ability to understand team dynamics, manage stress effectively, and maintain positive relationships in high-pressure environments.",
      details: [
        "Manage team dynamics",
        "Handle pressure gracefully",
        "Empathetic leadership style",
        "Conflict resolution skills",
      ],
    },
  ];

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
          className="absolute rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-10"
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

        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-600/10 rounded-full filter blur-3xl" />
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
                className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-800 blur-xl opacity-40"
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
                  background: "linear-gradient(to right, #FF4D4D, #B30000)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Skills
              </span>
            </span>
          </motion.h2>

          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-red-500 to-red-800 mx-auto mb-8 rounded-full"
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
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
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
          className="max-w-6xl mx-auto mb-20"
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

                  <h4 className="text-white font-semibold text-center mb-4 group-hover:text-red-400 transition-colors">
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

        {/* Soft Skills Section */}
        <motion.div
          ref={softSkillsRef}
          className="max-w-full mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Soft Skills
            </motion.h3>
            <motion.p
              className="text-gray-300 text-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Personal and interpersonal skills that drive success
            </motion.p>
          </div>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-4 pb-4"
              animate={{
                x: [0, -2400],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              style={{ width: "fit-content" }}
            >
              {/* First set of skills */}
              {softSkillsData.map((skill, index) => (
                <motion.div
                  key={`first-${index}`}
                  className="flex-shrink-0 bg-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-xl p-4 shadow-lg min-w-[200px] cursor-pointer hover:border-blue-500/50 transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  onClick={() => setSelectedSoftSkill(skill)}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="text-lg p-2 rounded-lg"
                      style={{
                        backgroundColor: `${skill.color}20`,
                        color: skill.color,
                      }}
                    >
                      {skill.icon}
                    </div>
                    <h4 className="text-white font-semibold text-sm hover:text-red-400 transition-colors">
                      {skill.name}
                    </h4>
                  </div>
                </motion.div>
              ))}

              {/* Second set of skills for continuous loop */}
              {softSkillsData.map((skill, index) => (
                <motion.div
                  key={`second-${index}`}
                  className="flex-shrink-0 bg-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-xl p-4 shadow-lg min-w-[200px] cursor-pointer hover:border-blue-500/50 transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  onClick={() => setSelectedSoftSkill(skill)}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="text-lg p-2 rounded-lg"
                      style={{
                        backgroundColor: `${skill.color}20`,
                        color: skill.color,
                      }}
                    >
                      {skill.icon}
                    </div>
                    <h4 className="text-white font-semibold text-sm hover:text-red-400 transition-colors">
                      {skill.name}
                    </h4>
                  </div>
                </motion.div>
              ))}

              {/* Third set for smoother loop */}
              {softSkillsData.map((skill, index) => (
                <motion.div
                  key={`third-${index}`}
                  className="flex-shrink-0 bg-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-xl p-4 shadow-lg min-w-[200px] cursor-pointer hover:border-blue-500/50 transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  onClick={() => setSelectedSoftSkill(skill)}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="text-lg p-2 rounded-lg"
                      style={{
                        backgroundColor: `${skill.color}20`,
                        color: skill.color,
                      }}
                    >
                      {skill.icon}
                    </div>
                    <h4 className="text-white font-semibold text-sm hover:text-red-400 transition-colors">
                      {skill.name}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Skill Detail Modal */}
        {selectedSoftSkill && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSoftSkill(null)}
          >
            <motion.div
              className="bg-gray-800 border border-gray-600 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className="text-3xl p-3 rounded-xl"
                    style={{
                      backgroundColor: `${selectedSoftSkill.color}20`,
                      color: selectedSoftSkill.color,
                    }}
                  >
                    {selectedSoftSkill.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedSoftSkill.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedSoftSkill(null)}
                  className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-700 transition-all duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedSoftSkill.description}
                </p>

                {selectedSoftSkill.details && (
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">
                      Key Achievements & Experience
                    </h4>
                    <ul className="space-y-3">
                      {selectedSoftSkill.details.map((detail, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-3 text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: selectedSoftSkill.color }}
                          />
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <button
                  onClick={() => setSelectedSoftSkill(null)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-xl transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;
