import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AngelOne = () => {

  // const navigate=useNavigate();

  const [upi, setupi] = useState('')
  const [no, setno] = useState('')
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
      setupi("");
      setno("");
      window.open("https://angel-one.onelink.me/Wjgr/xkuvr9zl", "_blank", "noopener,noreferrer");
    } else {
      alert("❌ Submission Failed! Try Again.");
    }
  };
  
  
  return (
    <div className="flex flex-col items-center justify-start h-full w-full bg-[#00763E] text-[#29C66F]">
      <div className='text-white mb-10'>
      <Header />
      </div>
      <div>
      {/* Header */}
      <div className="mt-10 text-yellow-200 text-3xl text-center">
        <h1>Earning Edge - Task & Earn</h1>
      </div>

      {/* Main Container */}
      <div className="flex flex-col space-y-5 items-center justify-start rounded-3xl border-double border-8 border-[#70BC8C] mt-5 bg-[#FEF9E4] h-auto w-full max-w-[900px] p-5 sm:p-10">
        <div className="text-center px-[20px] sm:px-[60px] py-[10px] mt-5 bg-[#FEE8B7] text-2xl rounded-[50px]">
          <h2>Angel One</h2>
        </div>
        <div className="text-3xl">
          <h1>Get ₹180.00</h1>
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
                className="mt-2 mb-2 w-full px-4 py-[15px] border-2 rounded-xl border-[#29C66F] text-2xl placeholder:text-xl placeholder:text-[#9CA3AF]"
                type="text"
                placeholder="Enter UPI ID"
              />
            </div>
            <div>
              <h3 className="text-xl">Enter AngelOne Register Name</h3>
              <input
              value={no} onChange={(e)=>{setno(e.target.value)}}
              required
                className="mt-2 mb-2 text-2xl w-full px-4 py-[15px] border-2 rounded-xl border-[#29C66F] placeholder:text-xl placeholder:text-[#9CA3AF]"
                type="text"
                placeholder="Enter AngelOne Register Name"
              />
            </div>
            <div className="flex items-center justify-center mt-4">
            <button onClick={(e) => submitHandler(e, "Angel One")} className="px-10 py-3 bg-green-500 text-white rounded-full text-xl hover:bg-[#54D088]">
  Submit
</button>

            </div>
          </form>
        </div>

        {/* Steps Section */}
        <div className="relative w-full max-w-[600px] mx-auto mt-10">
          <div className="absolute top-0 left-5 w-0.5 h-full bg-green-500"></div>
          {["AngelOne Page Enter Number Use to Register", "After Download App and Complete KYC", "Don't Use WIFI", "Cashback Credit Within 72 Hours"].map(
            (step, index) => (
              <div className="flex items-center mb-6 relative" key={index}>
                <div className="flex items-center justify-center w-10 h-10 bg-green-500 text-white font-bold rounded-full z-10">
                  {index + 1}
                </div>
                <p className="ml-6 text-green-700 font-medium">{step}</p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Payment Info */}
      <div className="flex flex-col items-center justify-start rounded-3xl border-double border-8 border-[#70BC8C] mt-5 mb-36 bg-[#FEF9E4] h-auto w-full max-w-[900px] p-5 sm:p-10">
        <h1 className="text-black font-semibold text-xl mt-1">
          Payment Type: <span className="text-[#07C161]">UPI</span>
        </h1>
        <h1 className="text-black font-semibold text-xl mt-1">
          Payment Time: <span className="text-[#07c161]">Upto 72 Hours</span>
        </h1>
        <h1 className="text-black font-semibold text-xl mt-1">
          Saturday & Sunday No Payments
        </h1>
        <hr className="border-t-2 border-gray-400 w-full mt-5" />
        <a
          className="mt-5 text-blue-500 underline font-extrabold hover:text-blue-800"
          href="https://t.me/earningedge123"
        >
          Join Telegram Channel For More Updates
        </a>
      </div>
    </div>
    {/* <div className='fixed left-0 text-white'><Footer/></div> */}
    </div>
  );
};

export default AngelOne;
