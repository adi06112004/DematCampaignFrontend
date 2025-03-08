import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const TideBusiness = () => {

  // const navigate=useNavigate();

  const [upi, setupi] = useState('')
  const [no, setno] = useState('')
  const submitHandler = async (e, campaign) => {
    e.preventDefault();
  
    const response = await fetch(`https://dematcampaignbackend.onrender.com`, {
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
      setupi("");
      setno("");
      window.open("https://aryoleads.co.in/?uid=TIDEBAsgd7Z4qcXaMiOBIqXhiiPr3SbE32", "_blank", "noopener,noreferrer");
    } else {
      alert("❌ Submission Failed! Try Again.");
    }
  };
  
  
  return (
    <div className="flex flex-col items-center justify-start h-full w-full bg-gradient-to-br from-blue-500 via-slate-900 to-blue-500 text-blue-500">
      <div className='text-white mb-10'>
      <Header />
      </div>
      <div>
      {/* Header */}
      <div className="mt-10 text-yellow-400 text-3xl text-center">
        <h1>Earning Edge - Task & Earn</h1>
      </div>

      {/* Main Container */}
      <div className="flex flex-col space-y-5 items-center justify-start rounded-3xl border-double border-8 border-blue-400 mt-5 bg-[#FEF9E4] h-auto w-full max-w-[900px] p-5 sm:p-10">
        <div className="text-center px-[20px] sm:px-[60px] py-[10px] mt-5 bg-[#FEE8B7] text-2xl rounded-[50px]">
          <h2>Tide Business</h2>
        </div>
        <div className="text-3xl">
          <h1>Get ₹200.00</h1>
        </div>
        <div className="text-orange-300 text-center">
          <h4>Complete The Task And Earn Rewards in Your Bank Account</h4>
        </div>

        {/* Form Section */}
        <div className="w-full max-w-[500px] mx-auto">
          <form onSubmit={(e)=>{submitHandler(e)}} className="space-y-5">
            <div>
              <h3 className="text-xl">Enter Your UPI ID</h3>
              <input
                value={upi} onChange={(e)=>{setupi(e.target.value)}}
                required
                className="mt-2 mb-2 w-full px-4 py-[15px] border-2 rounded-xl border-blue-400 text-2xl placeholder:text-xl placeholder:text-[#9CA3AF]"
                type="text"
                placeholder="Enter UPI ID"
              />
            </div>
            <div>
              <h3 className="text-xl">Enter Tide Register Name</h3>
              <input
              value={no} onChange={(e)=>{setno(e.target.value)}}
              required
                className="mt-2 mb-2 text-2xl w-full px-4 py-[15px] border-2 rounded-xl border-blue-400 placeholder:text-xl placeholder:text-[#9CA3AF]"
                type="text"
                placeholder="Enter Tide Register Name"
              />
            </div>
            <div className="flex items-center justify-center mt-4">
            <button onClick={(e) => submitHandler(e, "Tide Business")} className="px-10 py-3 bg-blue-500 text-white rounded-full text-xl hover:bg-blue-600">
  Submit
</button>

            </div>
          </form>
        </div>

        {/* Steps Section */}
        <div className="relative w-full max-w-[600px] mx-auto mt-10">
          <div className="absolute top-0 left-5 w-0.5 h-full bg-blue-500"></div>
          {["Earn ₹200 For Every Tide Account Opened Succefully", "After Download App and Complete KYC", "Add ₹50 Or More Within 24 Hour", "Use Referral Code AR01 Will Be Eligible For Payout", "Cashback Credit Within 72 Hours"].map(
            (step, index) => (
              <div className="flex items-center mb-6 relative" key={index}>
                <div className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white font-bold rounded-full z-10">
                  {index + 1}
                </div>
                <p className="ml-6 text-blue-700 font-medium">{step}</p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Payment Info */}
      <div className="flex flex-col items-center justify-start rounded-3xl border-double border-8 border-blue-400 mt-5 mb-36 bg-[#FEF9E4] h-auto w-full max-w-[900px] p-5 sm:p-10">
        <h1 className="text-black font-semibold text-xl mt-1">
          Payment Type: <span className="text-blue-400">UPI</span>
        </h1>
        <h1 className="text-black font-semibold text-xl mt-1">
          Payment Time: <span className="text-blue-400">Upto 72 Hours</span>
        </h1>
        <h1 className="text-black font-semibold text-xl mt-1">
          Saturday & Sunday No Payments
        </h1>
        <hr className="border-t-2 border-gray-400 w-full mt-5" />
        <a
          className="mt-5 text-green-500 underline font-extrabold hover:text-green-800"
          href="https://t.me/earningedge123"
        >
          Join Telegram Channel For More Updates
        </a>
      </div>
    </div>
    </div>
  );
};

export default TideBusiness;
