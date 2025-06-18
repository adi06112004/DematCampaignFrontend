import React, { useState } from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const Motilal = () => {
  const [name, setName] = useState("");
  const [upi, setUpi] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const campaign = "Motilal";

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`https://dematcampaignbackend.onrender.com/api/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          upi,
          paytmNumber: name,
          campaignName: campaign,
        }),
      });

      const data = await response.json();

      if (response.ok || (response.status === 400 && data.message === "Already submitted")) {
        setTimeout(() => {
          setName("");
          setUpi("");
          setIsLoading(false);
          window.open("https://moriseapp.page.link/dEm5bA5cmfgQKa4Z7", "_blank", "noopener,noreferrer");
        }, 900);
      } else {
        alert("❌ Submission Failed! Try Again.");
        setIsLoading(false);
      }
    } catch (err) {
      console.error(err);
      alert("⚠ Something went wrong. Please try later.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 text-black relative">
      <Header />

      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center z-50 text-white text-xl font-bold">
          ⏳ Submitting... Please wait
        </div>
      )}

      <motion.main
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex justify-center px-4 py-10"
      >
        <div className="w-full mt-[20%] sm:mt-14 max-w-2xl bg-white border-4 border-yellow-500 shadow-2xl rounded-3xl p-8">
          <h1 className="text-4xl text-center font-extrabold text-orange-600 mb-6 animate-bounce">
            🏆 ₹100 Motilal Oswal Campaign
          </h1>

          <ul className="space-y-4 text-base sm:text-lg font-medium text-gray-800">
            <li className="flex items-center"><FaCheckCircle className="text-green-600 mr-2" /> ₹100 Per Account — Instant Payout</li>
            <li className="flex items-center"><FaCheckCircle className="text-green-600 mr-2" /> Must Use Refer Code: <b className="text-orange-700 ml-1">A1068654</b></li>
            <li className="flex items-center"><FaCheckCircle className="text-green-600 mr-2" /> Lead Confirmation via Dashboard</li>
            <li className="flex items-center"><FaCheckCircle className="text-green-600 mr-2" /> Only PAN & Aadhaar Required</li>
            <li className="flex items-center"><FaCheckCircle className="text-green-600 mr-2" /> 100% Paperless — Mobile Friendly</li>
          </ul>

          <div className="mt-6 text-center">
            <a
              href="https://moriseapp.page.link/dEm5bA5cmfgQKa4Z7"
              target="_blank"
              rel="noreferrer"
              className="text-white bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:to-red-600 px-6 py-3 rounded-full text-lg font-bold shadow-lg transition-transform hover:scale-105"
            >
              🚀 Open Account Now
            </a>
            <p className="text-sm mt-3 text-gray-600 italic">
              *Use PAN & Aadhaar. Best in Chrome mobile browser.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={submitHandler} className="mt-8 space-y-4">
            <input
              type="text"
              required
              placeholder="Enter Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-lg px-4 py-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              required
              placeholder="Enter Your UPI ID (e.g. abc@upi)"
              value={upi}
              onChange={(e) => setUpi(e.target.value)}
              className="w-full text-lg px-4 py-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-full transition duration-300"
            >
              ✅ Submit to Confirm
            </button>
          </form>

          <div className="mt-10 border-t pt-6 text-center">
            <h2 className="text-xl font-semibold text-orange-700 mb-2">
              ⚡ Pro Tip:
            </h2>
            <p className="text-gray-700">
              Share this link in WhatsApp groups and college circles. It's a FREE demat account — people love free stuff!
            </p>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default Motilal;
