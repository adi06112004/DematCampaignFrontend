import React, { useState } from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";

const TideBusiness = () => {
  const [upi, setUpi] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const campaign = "Tide Business";

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

      if (response.ok) {
        setTimeout(() => {
          setUpi("");
          setName("");
          setIsLoading(false);
          window.open("https://skro.in/IT1622NVA7/HMPTXX?ln=English", "_blank", "noopener,noreferrer");
        }, 900);
      } else {
        alert("❌ Submission Failed! Try Again.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-slate-900 to-blue-500 text-white">
      {isLoading && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 text-xl font-bold">
          ⏳ Submitting...
        </div>
      )}

      <Header />

      <motion.main
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center px-4 pt-8 pb-32"
      >
        <div className="text-3xl mt-[20%] sm:mt-16 text-yellow-400 mb-6 font-bold text-center">
          Earning Edge - Task & Earn
        </div>

        <div className="w-full max-w-2xl bg-[#FEF9E4] text-black rounded-3xl border-8 border-blue-400 p-6 space-y-8 shadow-2xl">
          <div className="bg-[#FEE8B7] text-2xl text-center rounded-full py-3 font-bold">
            Tide Business Campaign 💼
          </div>

          <div className="text-3xl font-semibold text-center text-blue-700">Get ₹200.00</div>

          <p className="text-center text-orange-500 text-lg font-medium">
            Complete the task and earn directly in your bank account.
          </p>

          <form onSubmit={submitHandler} className="space-y-5">
            <div>
              <label className="block text-xl mb-1">Your UPI ID</label>
              <input
                type="text"
                value={upi}
                onChange={(e) => setUpi(e.target.value)}
                required
                placeholder="e.g. name@upi"
                className="w-full border-2 border-blue-400 px-4 py-3 rounded-xl text-lg placeholder:text-gray-400"
              />
            </div>

            <div>
              <label className="block text-xl mb-1">Tide Registered Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Name used in Tide signup"
                className="w-full border-2 border-blue-400 px-4 py-3 rounded-xl text-lg placeholder:text-gray-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-full text-xl transition-all"
            >
              ✅ Submit & Claim ₹200
            </button>
          </form>

          <div className="pt-6">
            <h3 className="text-xl font-bold text-blue-700 mb-4">🚀 Steps to Earn:</h3>
            <div className="space-y-4">
              {[
                "Earn ₹200 for every successful Tide account.",
                "Download the app and complete KYC.",
                "Add ₹50 or more within 24 hours.",
                "Use Referral Code: AR01 to be eligible.",
                "Cashback will be credited within 72 hours.",
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white font-bold rounded-full">
                    {index + 1}
                  </div>
                  <p className="text-blue-700 font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full max-w-2xl mt-10 bg-[#FEF9E4] text-black border-8 border-blue-400 p-6 rounded-3xl space-y-3 shadow-xl">
          <h3 className="font-semibold text-lg">Payment Type: <span className="text-blue-600">UPI</span></h3>
          <h3 className="font-semibold text-lg">Payment Time: <span className="text-blue-600">Up to 72 Hours</span></h3>
          <h3 className="font-semibold text-lg">Note: <span className="text-red-600">No payments on Saturday & Sunday</span></h3>
          <div className="mt-4 border-t pt-4 text-center">
            <a
              href="https://t.me/earningedge123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 underline font-bold hover:text-green-800"
            >
              📢 Join Telegram for Updates
            </a>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default TideBusiness;
