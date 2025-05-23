import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaChartLine,
  FaDollarSign,
  FaAlipay,
  FaAlgolia,
} from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const campaigns = [
  {
    label: "₹180 Angel One",
    path: "/unavailable",
    color: "from-orange-400 to-pink-500",
    icon: <FaArrowRight />,
  },
  {
    label: "₹100 Incred Money",
    path: "/incred",
    color: "from-purple-600 to-blue-500",
    icon: <FaAlgolia />,
  },
  {
    label: "₹100 SunCrypto",
    path: "/campaign",
    color: "from-yellow-400 to-red-500",
    icon: <FaChartLine />,
  },
  {
    label: "₹150 Five Paisa",
    path: "/fivepaisa",
    color: "from-green-400 to-blue-600",
    icon: <FaDollarSign />,
  },
  {
    label: "₹200 Tide Business",
    path: "/tidebusiness",
    color: "from-cyan-400 to-indigo-500",
    icon: <FaAlipay />,
  },
  {
    label: "₹200 Upstox",
    path: "/upstox",
    color: "from-indigo-400 to-purple-600",
    icon: <FaDollarSign />,
  },
  {
    label: "₹100 Motilal",
    path: "/motilal",
    color: "from-pink-500 to-yellow-500",
    icon: <FaDollarSign />,
  },
];

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen pt-20 pb-24 bg-gradient-to-br from-black via-gray-900 to-black text-white bg-fixed bg-stars"
    >
      <Header />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-10 mb-10 w-[90%] max-w-2xl mx-auto rounded-2xl bg-white/10 border border-purple-800 backdrop-blur-xl shadow-2xl p-8"
      >
        <motion.h1
  initial={{ y: -10 }}
  animate={{ y: [0, -8, 0] }}
  transition={{ repeat: Infinity, duration: 2 }}
  className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-green-400 to-cyan-700 bg-clip-text text-transparent mb-8 animate-pulse"
>
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400"> {/* to keep gradient on text */}
    Earning Edge Live Campaigns
  </span>
  <span className="text-white ml-2">🚀</span> {/* Emoji with normal color */}
</motion.h1>


        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="space-y-5 pb-10 max-h-[320px] overflow-x-hidden overflow-y-auto pr-2"
        >
          {campaigns.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={item.path}
                className={`flex justify-between items-center px-6 py-4 rounded-xl bg-gradient-to-r ${item.color} shadow-lg shadow-indigo-800/40`}
              >
                <span className="text-white text-lg font-semibold">
                  {item.label}
                </span>
                {item.icon}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <Footer />
    </motion.div>
  );
};

export default Home;
