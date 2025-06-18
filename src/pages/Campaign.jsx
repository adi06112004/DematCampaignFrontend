import React, { useState } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';

const Campaign = () => {
  const [no, setNo] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  const campaign = "Suncrypto";

  try {
    const response = await fetch(`http://localhost:5000/api/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        upi: "",
        paytmNumber: no,
        campaignName: campaign,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setNo("");
      setTimeout(() => {
        window.open("https://join.suncrypto.in/861331/refer", "_blank", "noopener,noreferrer");
        setIsLoading(false);
      }, 1500);
    } else if (response.status === 400 && data.message === "Already submitted") {
      setNo("");
      setTimeout(() => {
        window.open("https://join.suncrypto.in/861331/refer", "_blank", "noopener,noreferrer");
        setIsLoading(false);
      }, 1500);
    } else {
      setIsLoading(false);
    }
  } catch (error) {
    alert("❌ Error connecting to server.");
    console.error(error);
    setIsLoading(false);
  }
};


  return (
    <div className='min-h-screen bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex flex-col'>

      {/* ✅ Loading Overlay */}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/80 text-white flex items-center justify-center text-xl z-50">
          ⏳ Please wait... Redirecting you to Suncrypto
        </div>
      )}

      {/* ✅ Header at top */}
      <div className="w-full">
        <Header />
      </div>

      {/* ✅ Main Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='flex-grow w-full flex justify-center items-center px-4 sm:px-6 py-10'
      >
        <div className='w-full max-w-4xl p-6 rounded-2xl bg-black/40 backdrop-blur-md shadow-2xl border border-cyan-600'>
          <div className='text-center mb-6'>
            <h1 className='text-3xl sm:text-4xl font-bold text-cyan-400 glow-text'>🚀 Join Suncrypto</h1>
            <p className='text-slate-300 mt-2 text-sm sm:text-base'>
              Refer & Earn with Code <span className='font-semibold text-yellow-400'>861331</span>
            </p>
          </div>

          {/* ✅ Responsive Grid: 1 column on mobile, 2 on medium */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className='bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl p-5 shadow-inner border border-cyan-700 space-y-4'
            >
              <h3 className='text-lg font-semibold text-cyan-300'>🪙 Campaign Benefits</h3>
              <ul className='space-y-2 text-sm text-slate-200'>
                <li>✅ Complete KYC & Earn Instantly</li>
                <li>🛑 Use Refer Code: <span className='text-yellow-300'>861331</span></li>
                <li>💸 Reward: <span className='text-green-400 font-semibold'>₹100</span></li>
                <li>⏱ Reward Shown in Portfolio</li>
              </ul>
              <a
                className='block mt-4 text-blue-400 hover:text-blue-500 underline text-sm'
                href="https://t.me/earningedge123"
                target='_blank'
                rel="noreferrer"
              >
                📲 Join Telegram Community
              </a>
            </motion.div>

            <motion.form
              onSubmit={submitHandler}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className='bg-[#0f1624] rounded-xl p-5 border border-cyan-600 shadow-lg flex flex-col space-y-4'
            >
              <label htmlFor="mobile" className='text-lg font-semibold text-cyan-200'>📱 Enter Mobile Number</label>
              <div className='relative'>
                <i className="ri-smartphone-line absolute left-3 top-[12px] text-xl text-green-400"></i>
                <input
                  type="text"
                  id="mobile"
                  value={no}
                  onChange={(e) => setNo(e.target.value)}
                  required
                  placeholder='e.g., 9876543210'
                  className='w-full py-3 pl-12 pr-4 rounded-lg text-black text-base border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-green-400'
                />
              </div>
              <button
                type="submit"
                className='w-full py-3 bg-gradient-to-r from-cyan-400 to-green-400 hover:from-cyan-500 hover:to-green-500 rounded-lg text-white font-semibold text-lg shadow-md transition transform hover:scale-95'
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

export default Campaign;
