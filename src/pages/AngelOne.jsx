import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';

const AngelOne = () => {
  const [upi, setUpi] = useState('');
  const [no, setNo] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const campaign = "Angel One";

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
          setUpi('');
          setNo('');
          setIsLoading(false);
          window.open("https://angel-one.onelink.me/Wjgr/9qtu6rzf", "_blank", "noopener,noreferrer");
        }, 900);
      } else {
        alert("❌ Submission failed! Try again.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("❌ Server error:", error);
      alert("❌ Could not connect to server.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e402f] via-[#00763E] to-[#0b1e14] text-white flex flex-col">
      
      {/* ⏳ Loading Overlay */}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/80 text-white flex items-center justify-center text-xl z-50">
          ⏳ Please wait... Redirecting to AngelOne
        </div>
      )}

      {/* 🧭 Header */}
      <Header />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-grow w-full flex justify-center items-center px-4 sm:px-6 py-10"
      >
        <div className="w-full max-w-4xl p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl border border-green-400">
          <div className="text-center mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-green-300 glow-text">📈 Angel One Offer</h1>
            <p className="text-slate-300 mt-2 text-sm sm:text-base">
              Complete Task & Earn <span className="text-yellow-400 font-semibold">₹180</span>
            </p>
          </div>

          {/* 🔁 Form & Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 📋 Left Info Box */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-gradient-to-br from-[#245c45] to-[#1c3c2b] rounded-xl p-5 shadow-md space-y-4 border border-green-500"
            >
              <h3 className="text-lg font-semibold text-green-200">🎯 Steps to Earn</h3>
              <ol className="list-decimal list-inside text-slate-100 space-y-1 text-sm">
                <li>Go to Angel One link</li>
                <li>Register using your number</li>
                <li>Download the app & complete KYC</li>
                <li>Don't use WiFi (use mobile data)</li>
                <li>Reward credited within 72 hours</li>
              </ol>
              <div className="text-yellow-300 mt-4 text-sm">
                ⚠ Payments processed via UPI <br />
                🚫 No Payments on Sat & Sun
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

            {/* ✍️ Form */}
            <motion.form
              onSubmit={submitHandler}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-[#0f1f16] rounded-xl p-6 border border-green-400 shadow-md flex flex-col space-y-4"
            >
              <div>
                <label htmlFor="upi" className="text-sm font-medium text-green-200">🔢 Enter UPI ID</label>
                <input
                  id="upi"
                  type="text"
                  required
                  value={upi}
                  onChange={(e) => setUpi(e.target.value)}
                  placeholder="e.g. name@upi"
                  className="w-full mt-1 px-4 py-3 rounded-md border border-green-500 text-black placeholder:text-gray-500"
                />
              </div>

              <div>
                <label htmlFor="name" className="text-sm font-medium text-green-200">🧑 Register Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={no}
                  onChange={(e) => setNo(e.target.value)}
                  placeholder="Enter AngelOne name"
                  className="w-full mt-1 px-4 py-3 rounded-md border border-green-500 text-black placeholder:text-gray-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 rounded-lg text-white font-semibold text-base shadow-md"
              >
                🚀 Submit & Join Now
              </button>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AngelOne;
