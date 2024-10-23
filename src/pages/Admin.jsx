import React, { useEffect, useState } from 'react';

const Admin = () => {
  const [chefsData, setChefsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchChefsData = async () => {
      try {
        const response = await fetch('http://localhost:5000/submitchefform');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setChefsData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChefsData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Submitted Chef Applications</h2>
      {chefsData.length > 0 ? (
        <table className="min-w-full text-black border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2">Name</th>
              <th className="border border-gray-200 px-4 py-2">Phone</th>
              <th className="border border-gray-200 px-4 py-2">Location</th>
              <th className="border border-gray-200 px-4 py-2">Availability</th>
              <th className="border border-gray-200 px-4 py-2">Cooking Level</th>
              <th className="border border-gray-200 px-4 py-2">Reasons</th>
              <th className="border border-gray-200 px-4 py-2">Additional Comments</th>
            </tr>
          </thead>
          <tbody>
            {chefsData.map((chef, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-200 px-4 py-2">{chef.name}</td>
                <td className="border border-gray-200 px-4 py-2">{chef.phone}</td>
                <td className="border border-gray-200 px-4 py-2">{chef.location}</td>
                <td className="border border-gray-200 px-4 py-2">{chef.availability}</td>
                <td className="border border-gray-200 px-4 py-2">{chef.cookingLevel}</td>
                <td className="border border-gray-200 px-4 py-2">{chef.reason.join(', ')}</td>
                <td className="border border-gray-200 px-4 py-2">{chef.additionalComments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No chef applications submitted.</p>
      )}
    </div>
  );
};

export default Admin;
