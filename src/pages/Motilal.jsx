import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaRupeeSign, FaCheckCircle } from "react-icons/fa";

const Motilal = () => {
  const [name, setName] = useState("");
  const [upi, setUpi] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = async (e, campaign) => {
    e.preventDefault();

     const response = await fetch(`https://dematcampaignbackend.onrender.com/api/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        upi,
        paytmNumber: no,
        campaignName: campaign, // Store campaign name
      }),
    });

    if (response.ok) {
      alert(`✅ ${campaign} Details Submitted Successfully!`);
      setUpi('');
      setName('');
      window.open("https://moriseapp.page.link/dEm5bA5cmfgQKa4Z7", "_blank", "noopener,noreferrer");
    } else {
      alert("❌ Submission Failed! Try Again.");
    }
  };

  return (
    <div className="text-white space-y-10">
        <Header />
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-yellow-100 via-orange-100 to-red-100 text-black">

      <main className="flex flex-col items-center justify-center px-4 py-10">
        <div className="w-full max-w-2xl rounded-3xl p-6 shadow-2xl border-4 border-yellow-500 bg-white">
          <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-6 tracking-wide animate-bounce">
            🏆 ₹100 Motilal Oswal Campaign
          </h1>

          <ul className="space-y-4 text-lg text-gray-800 font-medium mb-8">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-600 mr-2" />
              ₹100 Per Account — Instant Payout
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-600 mr-2" />
              Must Enter This Refer Code — A1068654
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-600 mr-2" />
              Instant Lead Confirmation via Dashboard
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-600 mr-2" />
              Only PAN & Aadhaar Required
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-600 mr-2" />
              100% Paperless Process — Works on Mobile
            </li>
          </ul>

          <div className="mt-2 mb-6 flex flex-col items-center">
            <a
                href="/motilal"
              className="text-white bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:to-red-600 px-6 py-3 rounded-full text-lg font-bold shadow-lg transition-transform hover:scale-105"
            >
              🚀 Open Account Now
            </a>
            <p className="text-sm mt-3 text-gray-600 italic">
              *Use PAN & Aadhaar. Works best in mobile browser.
            </p>
          </div>

          <form onSubmit={(e) => submitHandler(e, "Motilal")}  className="space-y-4">
            <input
              type="text"
              placeholder="Enter Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-2xl font-extrabold px-4 py-3 border-2 border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              placeholder="Enter Your UPI ID (e.g. abc@upi)"
              value={upi}
              onChange={(e) => setUpi(e.target.value)}
              className="w-full text-2xl font-extrabold px-4 py-3 border-2 border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              ✅ Submit to Confirm
            </button>

            {submitted && (
              <div className="text-green-600 text-center font-semibold">
                🎉 Submitted Successfully!
              </div>
            )}
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
      </main>

    </div>
    </div>
  );
};

export default Motilal;
