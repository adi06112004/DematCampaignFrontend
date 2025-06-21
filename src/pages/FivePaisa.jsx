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
          window.open("https://5paisa.page.link/hQNFaawjLeKcxPGr9", "_blank", "noopener,noreferrer");
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
    <div className="min-h-screen bg-gradient-to-br from-[#431c73] via-[#232659] to-black text-white flex flex-col">
      
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/80 text-white flex items-center justify-center text-xl z-50">
          ⏳ Please wait... Redirecting to 5Paisa
        </div>
      )}

      <Header />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-grow w-full flex justify-center items-center px-4 sm:px-6 py-10"
      >
        <div className="w-full mt-[20%] sm:mt-16 max-w-4xl p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl border border-yellow-400">
          <div className="text-center mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-yellow-300 glow-text">💰 5Paisa Offer</h1>
            <p className="text-slate-300 mt-2 text-sm sm:text-base">
              Complete Task & Earn <span className="text-green-400 font-semibold">₹150</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Info Box */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-gradient-to-br from-[#553099] to-[#2b2a58] rounded-xl p-5 shadow-md space-y-4 border border-yellow-400"
            >
              <h3 className="text-lg font-semibold text-yellow-200">🎯 Steps to Earn</h3>
              <ol className="list-decimal list-inside text-slate-100 space-y-1 text-sm">
                <li>Enter UPI and Submit.</li>
                <li>Use Refer Code <b>50175752</b></li>
                <li>Complete KYC with PAN & Aadhar</li>
                <li>Add your bank account</li>
                <li>After approval, login</li>
                <li>Do A Trade With ₹10-₹20(Buy And Sell)</li>
                <li>₹150 cashback in 24-48 hrs</li>
              </ol>
              <div className="text-yellow-300 mt-4 text-sm">
                ⚠ Cashback via UPI only <br />
                🛑 New Users Only
              </div>
              <a
                className="mt-4 block text-blue-400 hover:underline text-sm"
                href="https://t.me/earningedge123"
                target="_blank"
                rel="noreferrer"
              >
                📢 Join Telegram for Updates
              </a>
            </motion.div>

            {/* Form */}
            <motion.form
              onSubmit={submitHandler}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-[#1c1530] rounded-xl p-6 border border-yellow-400 shadow-md flex flex-col space-y-4"
            >
              <div>
                <label htmlFor="upi" className="text-sm font-medium text-yellow-200">🔢 Enter UPI ID</label>
                <input
                  id="upi"
                  type="text"
                  required
                  value={upi}
                  onChange={(e) => setUpi(e.target.value)}
                  placeholder="e.g. name@upi"
                  className="w-full mt-1 px-4 py-3 rounded-md border border-yellow-500 text-black placeholder:text-gray-500"
                />
              </div>

              <div>
                <label htmlFor="name" className="text-sm font-medium text-yellow-200">📱 Registered 5Paisa Number</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={no}
                  onChange={(e) => setNo(e.target.value)}
                  placeholder="Enter 5Paisa Registered Number"
                  className="w-full mt-1 px-4 py-3 rounded-md border border-yellow-500 text-black placeholder:text-gray-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 rounded-lg text-black font-semibold text-base shadow-md"
              >
                🚀 Submit & Open Account
              </button>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FivePaisa;
