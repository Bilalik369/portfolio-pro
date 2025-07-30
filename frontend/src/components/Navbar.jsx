import { useState, useEffect } from "react";
import { Menu, X, Send, Home, User, Briefcase, Code, Mail } from "lucide-react";
import { FaRobot } from "react-icons/fa";
import Logo from "../assets/logon.png";

const Navbar = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [chatMessages, setChatMessages] = useState([
    { text: "Bonjour ! Comment puis-je vous aider ?", isBot: true },
  ]);
  const [userMessage, setUserMessage] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "projects", "skills", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleChat = () => setChatOpen(!chatOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!userMessage.trim()) return;

    setChatMessages([...chatMessages, { text: userMessage, isBot: false }]);

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          text: `Merci pour votre message. Je vais vous répondre concernant "${userMessage}" dès que possible.`,
          isBot: true,
        },
      ]);
    }, 1000);

    setUserMessage("");
  };

  const navLinks = [
    { id: "home", label: "Home", icon: <Home size={18} /> },
    { id: "about", label: "About", icon: <User size={18} /> },
    { id: "projects", label: "Projects", icon: <Briefcase size={18} /> },
    { id: "skills", label: "Skills", icon: <Code size={18} /> },
    { id: "contact", label: "Contact", icon: <Mail size={18} /> },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/90 backdrop-blur-md shadow-md py-2"
            : "bg-gray-900/70 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-10 w-auto mr-2" />
          </div>

          <ul className="hidden md:flex space-x-8 font-medium">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className={`relative py-2 flex items-center transition-colors duration-300 ${
                    activeSection === link.id
                      ? "text-amber-200"
                      : "text-gray-300 hover:text-amber-200"
                  }`}
                >
                  <span className="mr-2">{link.icon}</span>
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-200 rounded-full transform origin-left animate-[growWidth_0.3s_ease]"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-4 bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li
                  key={link.id}
                  className="transform transition-transform duration-300"
                  style={{
                    transitionDelay: `${index * 50}ms`,
                    transform: mobileMenuOpen
                      ? "translateY(0)"
                      : "translateY(20px)",
                  }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className={`flex items-center py-2 px-3 rounded-lg ${
                      activeSection === link.id
                        ? "bg-amber-900/30 text-amber-200"
                        : "text-gray-300"
                    }`}
                  >
                    <span className="mr-3">{link.icon}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <button
        onClick={toggleChat}
        className={`fixed bottom-5 right-5 bg-amber-400 text-white p-4 rounded-full shadow-lg hover:bg-amber-500 transition-all duration-300 z-50 ${
          chatOpen ? "rotate-180 bg-amber-300 hover:bg-amber-400" : ""
        }`}
        aria-label="Toggle chatbot"
      >
        {chatOpen ? (
          <X size={24} />
        ) : (
          <FaRobot size={24} className="animate-pulse" />
        )}
      </button>

      <div
        className={`fixed bottom-20 right-5 w-80 bg-gray-800 shadow-xl rounded-lg overflow-hidden z-50 transition-all duration-300 transform ${
          chatOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-amber-500 text-white p-3 flex justify-between items-center">
          <h3 className="text-lg font-semibold flex items-center">
            <FaRobot className="mr-2" /> Assistant
          </h3>
          <button
            onClick={toggleChat}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        </div>

        <div className="h-64 overflow-y-auto p-3 bg-gray-900">
          {chatMessages.map((msg, index) => (
            <div
              key={index}
              className={`mb-3 max-w-[85%] ${msg.isBot ? "mr-auto" : "ml-auto"}`}
            >
              <div
                className={`p-2 rounded-lg ${
                  msg.isBot
                    ? "bg-gray-700 text-gray-200 rounded-tl-none"
                    : "bg-amber-300 text-white rounded-tr-none"
                }`}
              >
                {msg.text}
              </div>
              <div
                className={`text-xs mt-1 text-gray-500 ${msg.isBot ? "text-left" : "text-right"}`}
              >
                {msg.isBot ? "Assistant" : "Vous"}
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleChatSubmit}
          className="p-2 border-t border-gray-700 flex"
        >
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Écrivez votre message..."
            className="flex-1 p-2 border border-gray-600 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 bg-gray-700 text-white"
          />
          <button
            type="submit"
            className="bg-amber-400 text-white p-2 rounded-r-lg hover:bg-amber-500 transition-colors"
            disabled={!userMessage.trim()}
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </>
  );
};

export default Navbar;
