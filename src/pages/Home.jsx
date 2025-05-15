import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChartLine, FaDollarSign, FaAlipay } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const campaigns = [
  {
    label: "₹180 Angel One",
    path: "/unavailable",
    color: "bg-orange-500 hover:bg-orange-600",
    icon: <FaArrowRight />,
  },
  {
    label: "₹100 SunCrypto",
    path: "/campaign",
    color: "bg-red-500 hover:bg-red-600",
    icon: <FaChartLine />,
  },
  {
    label: "₹150 Five Paisa",
    path: "/fivepaisa",
    color: "bg-green-500 hover:bg-green-600",
    icon: <FaDollarSign />,
  },
  {
    label: "₹200 Tide Business",
    path: "/tidebusiness",
    color: "bg-blue-500 hover:bg-blue-600",
    icon: <FaAlipay />,
  },
  {
    label: "₹200 Upstox",
    path: "/upstox",
    color: "bg-violet-600 hover:bg-violet-800",
    icon: <FaDollarSign />,
  },
  {
    label: "₹100 Motilal",
    path: "/motilal",
    color: "bg-yellow-600 hover:bg-yellow-800",
    icon: <FaDollarSign />,
  },
  // Add more campaigns here to test scrolling
];

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-purple-900 via-blue-950 to-black text-white">
      <Header />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-20 md:mt-24 mb-10 w-[90%] max-w-lg rounded-xl bg-slate-800 border-2 border-purple-600 p-6 shadow-lg shadow-purple-600 backdrop-blur"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-500 text-black p-3 rounded-xl border-double border-2 border-orange-400 mb-6">
          🚀 Live Campaigns
        </h1>

        {/* Scrollable Campaign List */}
        <div className="flex flex-col w-full space-y-4 pb-10 text-lg overflow-y-auto overflow-x-hidden max-h-[300px] pr-2">
          {campaigns.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className={`flex items-center justify-between px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105 ${item.color}`}
            >
              <span>{item.label}</span>
              {item.icon}
            </Link>
          ))}
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Home;
