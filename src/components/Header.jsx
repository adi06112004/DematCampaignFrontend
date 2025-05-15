import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const navItems = [
  { label: "Angel One", path: "/angelone" },
  { label: "SunCrypto", path: "/campaign" },
  { label: "Five Paisa", path: "/fivepaisa" },
  { label: "Tide Business", path: "/tidebusiness" },
  { label: "Upstox", path: "/upstox" },
  { label: "Motilal", path: "/motilal" }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDarkMode = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

  // Sync theme on load
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="w-full fixed top-0 left-0 z-50 shadow-md bg-gradient-to-r from-black via-blue-900 to-black dark:bg-gray-900 dark:text-white transition-all">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">💰 Earning Edge</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`hover:text-cyan-400 transition ${
                location.pathname === item.path ? "text-cyan-400 font-semibold" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Dark Mode Toggle */}
        <button className="hidden md:block text-xl" onClick={toggleDarkMode}>
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
        </button>

        {/* Mobile Menu Button */}
        <button className="text-2xl md:hidden focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 right-0 w-64 h-screen bg-gradient-to-br from-purple-800 via-blue-900 to-black dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between p-5">
          <h2 className="text-xl font-bold">Menu</h2>
          <button className="text-2xl" onClick={toggleMenu}>
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col space-y-4 mt-5 px-6 text-lg">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={toggleMenu}
              className={`hover:text-cyan-400 transition ${
                location.pathname === item.path ? "text-cyan-400 font-semibold" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Dark Mode Toggle in Mobile */}
        <div className="flex justify-center mt-10">
          <button className="text-2xl" onClick={toggleDarkMode}>
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
