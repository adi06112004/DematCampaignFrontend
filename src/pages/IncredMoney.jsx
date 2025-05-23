import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaCheckCircle } from "react-icons/fa";

const IncredMoney = () => {
  const[email,setEmail]=useState("");
  const[upi,setUpi]=useState("");

  const [submitted, setSubmitted] = useState(false);


   const submitHandler = async (e, campaign) => {
    e.preventDefault();

    const response = await fetch(`https://dematcampaignbackend.onrender.com/api/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        upi,
        paytmNumber: email,
        campaignName: campaign,
      }),
    });

    if (response.ok) {
      alert(`✅ ${campaign} Details Submitted Successfully!`);
      setUpi('');
      setEmail('');
      window.open("https://incredmoney.app.link/Mgwv3FG2vTb", "_blank", "noopener,noreferrer");
    } else {
      alert("❌ Submission Failed! Try Again.");
    }
  };

  return (
    <div className="text-white">
         <Header />
    <div className="min-h-screen flex mt-10 flex-col justify-between bg-gradient-to-b from-green-100 via-blue-100 to-indigo-100 text-black">

      <main className="flex flex-col items-center justify-center px-4 py-10">
        <div className="w-full max-w-2xl rounded-3xl p-6 shadow-2xl border-4 border-green-500 bg-white">
          <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-6 tracking-wide animate-bounce">
            💸 InCred Money Campaign
          </h1>

          <ul className="space-y-4 text-lg text-gray-800 font-medium">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-600 mr-2" />
              ₹100 + ₹200 Amazon Voucher Per Valid Account Opening
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-600 mr-2" />
              Instant Account Activation
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-600 mr-2" />
              Buy ₹195 CSK Non Listed Stock
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-600 mr-2" />
              No Physical Documents Needed
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-600 mr-2" />
              Works Perfectly on Mobile
            </li>
          </ul>

          <div className="mt-8 flex flex-col items-center">
            <a
              href="/incred"
              className="text-white bg-gradient-to-r from-green-500 via-blue-500 to-indigo-600 hover:from-green-600 hover:to-indigo-700 px-6 py-3 rounded-full text-lg font-bold shadow-lg transition-transform hover:scale-105"
            >
              🚀 Open Account Now
            </a>
            <p className="text-sm mt-3 text-gray-600 italic">
              *Use your PAN & Aadhaar. Works best in Chrome mobile browser.
            </p>
          </div>

          {/* Email + UPI Form Below */}
          {!submitted ? (
            <form onSubmit={(e) => submitHandler(e, "Incred")} className="mt-6 space-y-4">
              <div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                  placeholder="Enter your Email"
                  className="w-full text-2xl px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="upi"
                  value={upi}
                  onChange={(e)=>setUpi(e.target.value)}
                  required
                  placeholder="Enter your UPI ID"
                  className="w-full text-2xl px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-full hover:bg-indigo-700 transition"
              >
                ✅ Submit Details
              </button>
            </form>
          ) : (
            <p className="mt-4 text-green-700 font-semibold text-center">
              🎉 Details submitted successfully!
            </p>
          )}

          <div className="mt-10 border-t pt-6 text-center">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">
              💡 Boost Your Earnings!
            </h2>
            <p className="text-gray-700">
              Share this link with friends and groups. Just ₹100 for each successful account — Easy & Fast!
            </p>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
};

export default IncredMoney;
