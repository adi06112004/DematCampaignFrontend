import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full fixed bottom-0 bg-gradient-to-r from-black via-blue-900 to-black py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo & Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">💰 Earning Edge</h2>
          <p className="text-sm text-gray-300">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm">
        <Link to="/about" className="hover:text-cyan-400 transition">About</Link>
        <Link to="/privacy-policy" className="hover:text-cyan-400 transition">Privacy Policy</Link>
        <Link to="/contact" className="hover:text-cyan-400 transition">Contact</Link>
        </div>


        {/* Social Media Links */}
        <div className="flex space-x-4 text-xl mt-4 md:mt-0">
          {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaFacebook />
          </a> */}
          <a href="https://www.instagram.com/adityaprasad1241/?next=%2F" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <FaInstagram />
          </a>
          <a href="https://x.com/128_prasad56819?t=bb_FjW8nLloI39KgoP-oPw&s=09" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <FaTwitter />
          </a>
          <a href="https://t.me/adityaprasadearningbadshah" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaTelegram />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
