import React from 'react';
import { useNavigate } from 'react-router-dom';
import { XCircle } from 'lucide-react'; // Lucide for icon, optional
import Header from '../components/Header';

const CampaignUnavailable = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white flex flex-col items-center justify-start p-4">
      <div className="w-full max-w-6xl mt-5">
        <Header />
      </div>

      <div className="flex flex-col items-center justify-center mt-20 text-center px-4">
        <XCircle className="w-20 h-20 text-red-500 mb-6" />
        <h1 className="text-4xl font-bold text-red-400 mb-4">
          Campaign Not Available
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-xl">
          The campaign you're trying to access is currently unavailable or has ended. Please check our other active campaigns or visit again later.
        </p>

        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg transition duration-200"
        >
          Go Back to Home
        </button>

        <a
          href="https://t.me/earningedge123"
          className="mt-6 text-green-400 underline hover:text-green-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join our Telegram for new updates
        </a>
      </div>
    </div>
  );
};

export default CampaignUnavailable;
