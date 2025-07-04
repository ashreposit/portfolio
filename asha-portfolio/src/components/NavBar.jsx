import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const NavBar = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-white dark:bg-gray-900 shadow relative z-50">
      {/* Left: Logo */}
      <div className="text-2xl font-bold text-gray-900 dark:text-white">
        Asha Laxmi
      </div>

      {/* Center: Desktop Navigation */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
        <ul className="flex space-x-6 text-gray-800 dark:text-gray-200">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href="https://github.com/ashreposit" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/asha-laxmi-a5005517b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>

      {/* Right: Theme toggle + Mobile hamburger */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <span className="text-gray-800 dark:text-gray-100 text-sm">
          {theme === "light" ? "Light" : "Dark"}
        </span>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className={`w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
            theme === "dark" ? "bg-gray-700" : "bg-gray-300"
          }`}
        >
          <div
            className={`w-6 h-6 rounded-full transition-transform duration-300 transform ${
              theme === "dark"
                ? "translate-x-8 bg-yellow-400"
                : "translate-x-0 bg-gray-800"
            } flex items-center justify-center text-white text-xs`}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </div>
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl text-gray-800 dark:text-gray-100"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden z-50">
          <ul className="flex flex-col items-center space-y-6 py-6 text-gray-800 dark:text-gray-200">
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            <li>
              <a href="https://github.com/ashreposit" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/asha-laxmi-a5005517b/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
