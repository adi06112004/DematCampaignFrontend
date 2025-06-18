import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Header from "../components/Header";

const Upstox = () => {
  const [upi, setUpi] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const steps = [
    "Earn ₹125 for every Upstox account opened successfully.",
    "Download the app and complete KYC.",
    "After OTP, confirm lead with admin.",
    "Avoid using WiFi (use mobile data).",
    "Cashback credited within 72 hours.",
  ];

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
          campaignName: "Upstox",
        }),
      });

      if (response.ok) {
        alert("✅ Upstox Details Submitted Successfully!");
        setUpi("");
        setName("");
        setTimeout(() => {
          setIsLoading(false);
          window.open("https://aryoleads.co.in/?uid=UPSTDAsgd7Z4qcXaMiOBIqXhiiPr3SbE32", "_blank", "noopener,noreferrer");
        }, 800);
      } else {
        alert("❌ Submission Failed! Try Again.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-slate-900 to-indigo-600 text-white flex flex-col items-center">
      {isLoading && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 text-xl font-bold">
          ⏳ Submitting...
        </div>
      )}

      <Header />

      <main className="w-full mt-[20%] sm:mt-14 max-w-5xl px-4 py-10">
        {/* Campaign Intro */}
        <section className="bg-white rounded-3xl shadow-2xl p-8 text-gray-800">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-indigo-600">Upstox Offer 🔥</h1>
            <p className="text-xl text-gray-600 mt-2">Get ₹125 instantly by completing a few simple steps</p>
          </div>

          {/* Form */}
          <form onSubmit={submitHandler} className="space-y-6">
            <div>
              <label className="block text-lg font-medium mb-1">Your UPI ID</label>
              <input
                type="text"
                value={upi}
                onChange={(e) => setUpi(e.target.value)}
                placeholder="e.g. name@upi"
                required
                className="w-full p-3 border-2 border-indigo-300 rounded-lg text-lg placeholder:text-gray-400"
              />
            </div>

            <div>
              <label className="block text-lg font-medium mb-1">Upstox Registered Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name used during Upstox signup"
                required
                className="w-full p-3 border-2 border-indigo-300 rounded-lg text-lg placeholder:text-gray-400"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-10 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition duration-300 text-lg"
              >
                Submit & Earn ₹125
              </button>
            </div>
          </form>
        </section>

        {/* Steps Section */}
        <section className="mt-10 bg-white rounded-3xl shadow-lg p-8 text-gray-800">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-6 text-center">📋 Steps to Earn</h2>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-3">
                <FaCheckCircle className="text-green-500 text-xl mt-1" />
                <p className="text-gray-700 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Payment Info Section */}
        <section className="mt-10 bg-white rounded-3xl shadow-lg p-8 text-center text-gray-800">
          <h3 className="text-xl font-semibold mb-2">💳 Payment Info</h3>
          <p>
            <strong>Type:</strong> <span className="text-indigo-600">UPI</span>
          </p>
          <p>
            <strong>Time:</strong> <span className="text-indigo-600">Up to 72 Hours</span>
          </p>
          <p>
            <strong>Note:</strong> No payments on <span className="text-red-600">Saturday & Sunday</span>
          </p>
          <a
            href="https://t.me/earningedge123"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 text-green-600 font-bold underline hover:text-green-800"
          >
            📢 Join Telegram Channel for Updates
          </a>
        </section>
      </main>
    </div>
  );
};

export default Upstox;
