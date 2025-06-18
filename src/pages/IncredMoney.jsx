import React, { useState } from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const IncredMoney = () => {
  const [email, setEmail] = useState("");
  const [upi, setUpi] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const campaign = "Incred";

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`https://dematcampaignbackend.onrender.com/api/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          upi,
          paytmNumber: email,
          campaignName: campaign,
        }),
      });

      const data = await response.json();

      if (response.ok || (response.status === 400 && data.message === "Already submitted")) {
        setTimeout(() => {
          setEmail("");
          setUpi("");
          setIsLoading(false);
          window.open("https://incredmoney.app.link/Mgwv3FG2vTb", "_blank", "noopener,noreferrer");
        }, 900);
      } else {
        alert("❌ Submission Failed! Try Again.");
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Server Error:", err);
      alert("⚠ Something went wrong!");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-green-100 via-blue-100 to-indigo-100 text-black relative">
      <Header />

      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center z-50 text-white text-xl font-bold">
          ⏳ Submitting... Please Wait
        </div>
      )}

      <motion.main
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center px-4 py-10"
      >
        <div className="w-full mt-[20%] sm:mt-14 max-w-2xl bg-white border-4 border-green-500 shadow-2xl rounded-3xl p-8">
          <h1 className="text-3xl sm:text-4xl text-center font-bold text-indigo-700 mb-6 animate-bounce">
            💸 InCred Money Campaign
          </h1>

          <ul className="space-y-4 text-base sm:text-lg font-medium text-gray-800">
            <li className="flex items-center"><FaCheckCircle className="text-green-600 mr-2" /> ₹100 + ₹200 Amazon Voucher</li>
            <li className="flex items-center"><FaCheckCircle className="text-green-600 mr-2" /> Instant Account Activation</li>
            <li className="flex items-center"><FaCheckCircle className="text-green-600 mr-2" /> Buy ₹195 CSK Stock</li>
            <li className="flex items-center"><FaCheckCircle className="text-green-600 mr-2" /> No Physical Documents</li>
            <li className="flex items-center"><FaCheckCircle className="text-green-600 mr-2" /> Mobile Friendly</li>
          </ul>

          <div className="mt-8 text-center">
            <a
              href="https://incredmoney.app.link/Mgwv3FG2vTb"
              target="_blank"
              rel="noreferrer"
              className="text-white bg-gradient-to-r from-green-500 via-blue-500 to-indigo-600 hover:from-green-600 hover:to-indigo-700 px-6 py-3 rounded-full text-lg font-bold shadow-lg transition-transform hover:scale-105"
            >
              🚀 Open Account Now
            </a>
            <p className="text-sm mt-3 text-gray-600 italic">
              *Use PAN & Aadhaar. Best in Chrome browser (mobile).
            </p>
          </div>

          {/* Form */}
          <form onSubmit={submitHandler} className="mt-8 space-y-4">
            <input
              type="email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="w-full text-lg px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              name="upi"
              value={upi}
              required
              onChange={(e) => setUpi(e.target.value)}
              placeholder="Enter your UPI ID"
              className="w-full text-lg px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-full hover:bg-indigo-700 transition"
            >
              ✅ Submit Details
            </button>
          </form>

          <div className="mt-10 border-t pt-6 text-center">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">💡 Boost Your Earnings!</h2>
            <p className="text-gray-700">
              Share this link with friends & groups. Earn ₹100+ easily per signup!
            </p>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default IncredMoney;
