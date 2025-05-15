import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Header from '../components/Header';

const Upstox = () => {
  const [upi, setUpi] = useState('');
  const [name, setName] = useState('');

  const submitHandler = async (e, campaign) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:5000/api/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        upi,
        paytmNumber: name,
        campaignName: campaign,
      }),
    });

    if (response.ok) {
      alert(`✅ ${campaign} Details Submitted Successfully!`);
      setUpi('');
      setName('');
      window.open("https://link.upstox.com/QQb3", "_blank", "noopener,noreferrer");
    } else {
      alert("❌ Submission Failed! Try Again.");
    }
  };

  const steps = [
    "Earn ₹200 For Every Upstox Account Opened Successfully",
    "Download App & Complete KYC",
    "After Enter Otp Confirm Lead With Admin",
    "Don't Use Wifi",
    "Cashback credited within 72 hours"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-slate-900 to-indigo-600 text-white flex flex-col items-center">
      <Header />
      <main className="w-full max-w-5xl px-4 py-10">
        <section className="bg-white rounded-3xl mt-8 shadow-2xl p-8 text-gray-800">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-indigo-600">Upstox Offer</h1>
            <p className="text-xl text-gray-600 mt-2">Get ₹200 Instantly for Completing Simple Steps</p>
          </div>

          <form onSubmit={(e) => submitHandler(e, "Upstox")} className="space-y-6">
            <div>
              <label className="block text-lg font-medium mb-1">Your UPI ID</label>
              <input
                type="text"
                value={upi}
                onChange={(e) => setUpi(e.target.value)}
                placeholder="Enter your UPI ID"
                required
                className="w-full p-3 border-2 border-indigo-300 rounded-lg text-lg"
              />
            </div>

            <div>
              <label className="block text-lg font-medium mb-1">Upstox Registered Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter registered name"
                required
                className="w-full p-3 border-2 border-indigo-300 rounded-lg text-lg"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-10 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition duration-300 text-lg"
              >
                Submit & Start Earning
              </button>
            </div>
          </form>
        </section>

        <section className="mt-10 bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-6 text-center">Steps to Earn</h2>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-3">
                <FaCheckCircle className="text-green-500 text-xl mt-1" />
                <p className="text-gray-700 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 bg-white rounded-3xl shadow-lg p-8 text-center text-gray-800">
          <h3 className="text-xl font-semibold mb-2">Payment Info</h3>
          <p><strong>Type:</strong> <span className="text-indigo-600">UPI</span></p>
          <p><strong>Time:</strong> <span className="text-indigo-600">Up to 72 Hours</span></p>
          <p><strong>Note:</strong> No Payments on Saturday & Sunday</p>
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
