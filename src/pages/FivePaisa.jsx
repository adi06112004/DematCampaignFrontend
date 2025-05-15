import React, { useState } from "react";
import Header from "../components/Header";
import fivePaisaLogo from "../images/logo.jpg"; 

const FivePaisa = () => {
  const [upi, setupi] = useState("");
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
      window.open("https://5paisa.page.link/r9yGd33bivfpef1h6", "_blank", "noopener,noreferrer");
    } else {
      alert("❌ Submission Failed! Try Again.");
    }
  };
  
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-800 via-blue-900 to-black text-white">
      <Header />
      <div className="mt-20 mb-3 flex flex-col items-center w-[90%] max-w-[600px] bg-white rounded-2xl shadow-lg p-6 md:p-10">

        <div className="flex items-center justify-center w-full mb-4">
          <img
            className="w-12 h-12 rounded-full border-2 border-black"
            src={fivePaisaLogo} alt="Five Paisa Logo"
          />
          <h1 className="text-2xl font-bold ml-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-4xl font-bold">
          Earning Edge
          </span>

          </h1>
        </div>

        <h3 className="text-xl text-center text-[#324E63] font-light mb-4">
          ★FREE Rs.150 INSTANT in UPI★
        </h3>

        <div className="flex justify-center mb-4">
          <img
            className="w-[60%] max-w-[220px] h-auto"
            src="https://rfox.in/upirew.png"
            alt="UPI Logo"
          />
        </div>

        <div className="text-center my-4">
          <h4 className="text-lg text-[#324E63] font-bold">
            Get INSTANT Rs.150 Cashback in UPI
          </h4>
          <h5 className="text-[#324E63] font-bold">
            "Just Open Free Account"
          </h5>
          <h6 className="text-[#324E63] font-bold">Only For NEW Users</h6>
        </div>

        <hr className="border-2 border-[#E5E5E5] w-full my-4" />

        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col items-center w-full"
        >
          <h3 className="text-[#324E63] mb-2">Enter Your UPI ID</h3>
          <input
            value={upi}
            onChange={(e) => setupi(e.target.value)}
            className="w-full max-w-[400px] text-black px-4 py-2 border border-gray-300 text-lg rounded-lg placeholder:text-gray-400"
            type="text"
            placeholder="Enter here UPI ID"
            required
          />
          <h3 className="text-[#324E63] mb-2 mt-2">Enter Your Register 5 Paisa No.</h3>
          <input
            value={no}
            onChange={(e) => setno(e.target.value)}
            className="w-full text-black max-w-[400px] px-4 py-2 border border-gray-300 text-lg rounded-lg placeholder:text-gray-400"
            type="text"
            placeholder="Enter 5 Paisa No."
            required
          />
          <button onClick={(e) => submitHandler(e, "Five Paisa")} className="w-full max-w-[400px] mt-2 py-3 bg-yellow-500 text-black rounded-lg text-xl hover:bg-[#54D088]">
  Submit
</button>

        </form>

        <hr className="border-2 border-[#E5E5E5] w-full my-4" />

        <div className="text-[#323E63] font-bold w-full">
          <h3 className="mb-2">♕ How to Avail this Offer:</h3>
          <ol className="list-decimal pl-5 text-[#3a5163] space-y-2">
            <li>Enter UPI and Submit.</li>
            <li>Must Use Refer Code(50175752).</li>
            <li>
              Complete the basic steps, KYC with PAN and Aadhar, and add a Bank
              Account. Wait for the account to get Approved. After the Account
              is approved, you will get Login Details by email.
            </li>
            <li>Login to your account.</li>
            <li>DONE - You will get Rs.150 Cashback Within 24 to 48 Hours.</li>
          </ol>
        </div>

        <hr className="border-2 border-[#E5E5E5] w-full my-4" />

        <a
          className="text-blue-700 underline hover:text-blue-500"
          href="https://t.me/earningedge123"
        >
          Join Telegram Channel For More Updates
        </a>
      </div>
    </div>
  );
};

export default FivePaisa;
