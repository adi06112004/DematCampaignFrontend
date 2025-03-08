import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-black text-white p-6">
      <h1 className="text-4xl font-bold mb-4">📞 Contact Us</h1>
      <p className="text-lg text-gray-300 text-center max-w-2xl">
        Have any questions or concerns? Feel free to reach out!
      </p>

      <form className="mt-6 bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <label className="block text-gray-700 font-bold mb-2">Your Name</label>
        <input type="text" className="w-full p-3 border rounded-md mb-4 text-black" placeholder="Enter your name" />

        <label className="block text-gray-700 font-bold mb-2">Your Email</label>
        <input type="email" className="w-full p-3 border rounded-md mb-4 text-black" placeholder="Enter your email" />

        <label className="block text-gray-700 font-bold mb-2">Your Message</label>
        <textarea className="w-full p-3 border rounded-md text-black" rows="4" placeholder="Write your message"></textarea>

        <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
