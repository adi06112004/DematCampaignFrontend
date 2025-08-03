import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";

const FivePaisa = () => {
  const [upi, setUpi] = useState("");
  const [no, setNo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const campaign = "Five Paisa";

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`https://dematcampaignbackend.onrender.com/api/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          upi,
          paytmNumber: no,
          campaignName: campaign,
        }),
      });

      const data = await response.json();

      if (response.ok || (response.status === 400 && data.message === "Already submitted")) {
        setTimeout(() => {
          setUpi("");
          setNo("");
          setIsLoading(false);
          window.open("https://5paisa.page.link/ZWXDzJXF8T9tA1Uu7", "_blank", "noopener,noreferrer");
        }, 900);
      } else {
        alert("❌ Submission Failed! Try Again.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Server error:", error);
      alert("❌ Could not connect to server.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#07152a] via-[#0b1f3d] to-[#0a1124] text-white flex flex-col items-center">
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/80 flex items-center justify-center text-xl z-50">
          🔄 Please wait... Redirecting to 5Paisa
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full px-4 py-10 sm:py-20 flex justify-center items-start"
      >
        <div className="w-full max-w-3xl bg-[#101e36] border border-blue-400/30 rounded-2xl shadow-2xl p-6 sm:p-10 relative overflow-hidden">
          {/* Soft Red Glow */}
          <div className="absolute top-0 -right-10 w-60 h-60 bg-red-400/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Title */}
          <div className="text-center mb-10 relative z-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-blue-300 drop-shadow-md">
              🎯 ₹150 5Paisa Reward
            </h1>
            <p className="mt-2 text-slate-300 text-base sm:text-lg">
              Follow the steps and get cashback in your UPI!
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {/* Instructions */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-blue-200">📝 Steps to Earn</h2>
              <ul className="text-sm text-slate-100 list-disc list-inside space-y-1">
                <li>Enter your UPI ID and 5Paisa number</li>
                <li>Use Referral Code: <b className="text-red-400">50175752</b></li>
                <li>Complete full KYC (Aadhaar & PAN)</li>
                <li>Link your bank account</li>
                <li>Log in once account is approved</li>
                <li>Trade small amount (₹10–₹20)</li>
                <li>Get ₹150 cashback in 24–48 hrs</li>
              </ul>
              <div className="pt-2 text-red-300 text-sm">
                ⚠ For new users only | 💸 Cashback via UPI only
              </div>
              <a
                href="https://t.me/earningedge123"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3 text-blue-400 hover:underline text-sm"
              >
                🔔 Join Telegram for Campaign Updates
              </a>
            </div>

            {/* Form */}
            <form onSubmit={submitHandler} className="space-y-6 bg-[#0d172c] p-6 rounded-xl border border-blue-500/30">
              <div>
                <label htmlFor="upi" className="block text-sm text-blue-200 font-medium mb-1">
                  🔢 UPI ID
                </label>
                <input
                  id="upi"
                  type="text"
                  required
                  value={upi}
                  onChange={(e) => setUpi(e.target.value)}
                  placeholder="e.g. name@upi"
                  className="w-full px-4 py-3 rounded-md bg-white text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div>
                <label htmlFor="no" className="block text-sm text-blue-200 font-medium mb-1">
                  📱 5Paisa Registered Mobile
                </label>
                <input
                  id="no"
                  type="text"
                  required
                  value={no}
                  onChange={(e) => setNo(e.target.value)}
                  placeholder="Enter registered number"
                  className="w-full px-4 py-3 rounded-md bg-white text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-2 bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-lg shadow-lg transition-all"
              >
                🚀 Submit & Go to 5Paisa
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FivePaisa;
