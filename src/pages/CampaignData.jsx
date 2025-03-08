import { useEffect, useState } from "react";

const CampaignData = ({ campaign }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!campaign) {
      setError("❌ Campaign not provided.");
      setLoading(false);
      return;
    }

    fetch(`https://dematcampaignbackend.onrender.com/${campaign}`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("❌ Failed to load data. Try again later.");
        setLoading(false);
      });
  }, [campaign]);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
        {campaign ? `${campaign} Submissions` : "Campaign Submissions"}
      </h2>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && users.length === 0 && <p className="text-center text-gray-500">No submissions yet.</p>}

      <div className="grid sm:grid-cols-2 gap-4">
        {users.map((user, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded-lg shadow-sm">
            <p className="text-lg font-medium"><span className="text-blue-500">UPI ID:</span> {user.upi}</p>
            <p className="text-lg font-medium"><span className="text-green-500">Paytm Number Or Name:</span> {user.paytmNumber}</p>
            <p className="text-sm text-gray-500">Joined on: {new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignData;
