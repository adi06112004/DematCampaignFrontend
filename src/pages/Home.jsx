import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChartLine, FaDollarSign ,FaAlipay } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer"; // ✅ Import Footer

const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-4 justify-center min-h-screen bg-gradient-to-b from-purple-800 via-blue-900 to-black text-white">
      <Header />
      <div className="flex fixed top-[8%] flex-col items-center h-[450px] w-[99%] max-w-lg bg-slate-800 rounded-xl border-double border-purple-600 shadow-lg shadow-purple-500 p-6">
        <h1 className="mt-5 text-3xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black p-3 rounded-2xl border-double border-orange-400 border-[2px] font-bold">
          Live Campaign 🚀
        </h1>
        <div className="flex overflow-auto w-full h-full flex-col px-6 py-4 mt-6 text-xl font-medium space-y-4">
          <Link className="flex items-center justify-between bg-orange-500 px-[50px] py-3 hover:scale-[1.05] hover:bg-orange-600 transition-transform shadow-md rounded-full" to="/angelone">
            <span>₹180 Angel One</span>
            <FaArrowRight />
          </Link>
          <Link className="flex items-center justify-between bg-red-500 px-[50px] py-3 hover:scale-[1.05] hover:bg-red-600 transition-transform shadow-md rounded-full" to="/campaign">
            <span>₹100 SunCrypto</span>
            <FaChartLine />
          </Link>
          <Link className="flex items-center justify-between bg-green-500 px-[50px] py-3 hover:scale-[1.05] hover:bg-green-600 transition-transform shadow-md rounded-full" to="/fivepaisa">
            <span>₹150 Five Paisa</span>
            <FaDollarSign />
          </Link>
          <Link className="flex items-center justify-between bg-blue-500 px-[50px] py-3 hover:scale-[1.05] hover:bg-blue-600 transition-transform shadow-md rounded-full" to="/tidebusiness">
            <span>₹200 Tide Business</span>
            <FaAlipay />
          </Link>
        </div>
      </div>
      
      {/* ✅ Add Footer Here */}
      <Footer />
    </div>
  );
};

export default Home;
