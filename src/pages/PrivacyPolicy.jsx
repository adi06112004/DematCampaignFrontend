import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <h1 className="text-4xl font-bold mb-4">🔒 Privacy Policy</h1>
      <div className="max-w-3xl text-gray-300 text-left space-y-4">
        <p>
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.
        </p>
        
        <h2 className="text-xl font-bold text-cyan-400">📌 Information We Collect</h2>
        <p>We may collect your name, email, UPI ID, and other details when you sign up or participate in campaigns.</p>

        <h2 className="text-xl font-bold text-cyan-400">📌 How We Use Your Information</h2>
        <p>Your information is used solely for processing payments, verifying participation, and improving user experience.</p>

        <h2 className="text-xl font-bold text-cyan-400">📌 Security & Protection</h2>
        <p>We take serious measures to ensure your data is secure and never shared with third parties without your consent.</p>

        <h2 className="text-xl font-bold text-cyan-400">📌 Contact Us</h2>
        <p>If you have any questions about this policy, please <a href="/contact" className="text-blue-400 hover:underline">Contact Us</a>.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
