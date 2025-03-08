import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-black text-white p-6">
      <h1 className="text-4xl font-bold mb-4">ℹ️ About Us</h1>
      <p className="text-lg text-gray-300 text-center max-w-3xl">
        Welcome to <span className="text-cyan-400 font-bold">Earning Edge</span> – your ultimate platform for earning rewards through various campaigns. 
        We provide the best referral programs, cashback offers, and financial earning opportunities.
      </p>

      <div className="mt-6 max-w-2xl text-gray-300 text-center">
        <p>🚀 <strong>Our Mission:</strong> Help users earn money through verified campaigns.</p>
        <p>💡 <strong>How It Works:</strong> Join, complete tasks, and get paid directly to your account.</p>
        <p>📈 <strong>Join Us Today:</strong> Sign up and start earning immediately!</p>
      </div>
    </div>
  );
};

export default About;
