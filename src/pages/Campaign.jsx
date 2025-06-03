import React, { useState } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';

const Campaign = () => {
  const [no, setNo] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const campaign = "Suncrypto";

    try {
      const response = await fetch(`https://dematcampaignbackend.onrender.com/api/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          upi: "",
          paytmNumber: no,
          campaignName: campaign,
        }),
      });

      if (response.ok) {
        alert(`✅ ${campaign} Details Submitted Successfully!`);
        setNo("");
        window.open("https://join.suncrypto.in/861331/refer", "_blank", "noopener,noreferrer");
      } else {
        alert("❌ Submission Failed! Try Again.");
      }
    } catch (error) {
      alert("❌ Error connecting to server.");
      console.error(error);
    }
  };

  return (
    <div className='min-h-screen sm:space-y-[10%] space-y-[25%] text-white bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] flex flex-col items-center'>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='w-full max-w-4xl mt-10 p-6 rounded-2xl bg-black/40 backdrop-blur-md shadow-2xl border border-cyan-600'
      >
        <div className='text-center mb-6'>
          <h1 className='text-4xl font-bold text-cyan-400 glow-text'>🚀 Join Suncrypto</h1>
          <p className='text-slate-300 mt-2'>
            Refer & Earn with Code <span className='font-semibold text-yellow-400'>861331</span>
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-6'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className='bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl p-6 shadow-inner border border-cyan-700 space-y-4'
          >
            <h3 className='text-lg font-semibold text-cyan-300'>🪙 Campaign Benefits</h3>
            <ul className='space-y-2 text-sm text-slate-200'>
              <li>✅ Complete KYC & Earn Instantly</li>
              <li>🛑 Use Refer Code: <span className='text-yellow-300'>861331</span></li>
              <li>💸 Reward: <span className='text-green-400 font-semibold'>₹100</span></li>
              <li>⏱ Reward Shown in Portfolio</li>
            </ul>
            <a className='block mt-4 text-blue-400 hover:text-blue-500 underline' href="https://t.me/earningedge123" target='_blank'>
              📲 Join Telegram Community
            </a>
          </motion.div>

          <motion.form
            onSubmit={submitHandler}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className='bg-[#0f1624] rounded-xl p-6 border border-cyan-600 shadow-lg flex flex-col justify-center space-y-4'
          >
            <label htmlFor="mobile" className='text-xl font-semibold text-cyan-200'>📱 Enter Mobile Number</label>
            <div className='relative'>
              <i className="ri-smartphone-line absolute left-3 top-[12px] text-2xl text-green-400"></i>
              <input
                type="text"
                id="mobile"
                value={no}
                onChange={(e) => setNo(e.target.value)}
                required
                placeholder='e.g., 9876543210'
                className='w-full py-3 pl-12 pr-4 rounded-lg text-black text-lg border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-green-400'
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
      </motion.div>
    </div>
  );
};

export default Campaign;
