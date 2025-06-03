import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import logo from "../images/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <header className={`w-full fixed top-0 left-0 z-50 shadow-lg transition-all ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-r from-black via-blue-900 to-black"}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl flex items-center space-x-3 font-bold">
          <img
            className="w-10 h-10 rounded-full border-2 border-white"
            src={logo}
            alt="Logo"
          />
          <Link to="/">Earning Edge</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link className="hover:text-cyan-400 transition" to="/unavailable">
            Angel One
          </Link>
          <Link className="hover:text-cyan-400 transition" to="/campaign">
            SunCrypto
          </Link>
          <Link className="hover:text-cyan-400 transition" to="/fivepaisa">
            Five Paisa
          </Link>
          <Link className="hover:text-cyan-400 transition" to="/tidebusiness">
            Tide Business
          </Link>
          <Link className="hover:text-cyan-400 transition" to="/unavailable">
            Upstox
          </Link>
          <Link className="hover:text-cyan-400 transition" to="/motilal">
            Motilal
          </Link>
        </nav>

        {/* Dark Mode Toggle */}
        {/* <button className="hidden md:block text-xl" onClick={toggleDarkMode}>
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
        </button> */}

        {/* Mobile Menu Button */}
        <button className="text-2xl md:hidden focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-0 right-0 w-64 h-screen bg-gradient-to-br from-black via-blue-900 to-black shadow-lg transform transition-transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
        <div className="flex justify-between p-5">
          <h2 className="text-xl font-bold">Menu</h2>
          <button className="text-2xl" onClick={toggleMenu}>
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col space-y-4 mt-5 px-6 text-lg">
          <Link className="hover:text-cyan-400 transition" to="/unavailable" onClick={toggleMenu}>
            Angel One
          </Link>
          <Link className="hover:text-cyan-400 transition" to="/campaign" onClick={toggleMenu}>
            SunCrypto
          </Link>
          <Link className="hover:text-cyan-400 transition" to="/fivepaisa" onClick={toggleMenu}>
            Five Paisa
          </Link>
          <Link className="hover:text-cyan-400 transition" to="/tidebusiness" onClick={toggleMenu}>
            Tide Business
          </Link>
          <Link className="hover:text-cyan-400 transition" to="/unavailable">
            Upstox
          </Link>
          <Link className="hover:text-cyan-400 transition" to="/motilal">
            Motilal
          </Link>
        </div>

        {/* Dark Mode Toggle in Mobile Menu */}
        {/* <div className="flex justify-center mt-10">
          <button className="text-2xl" onClick={toggleDarkMode}>
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
