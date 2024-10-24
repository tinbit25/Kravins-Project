import React, { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';

const ChefFormSubmissions = () => {
  const [chefFormData, setChefFormData] = useState([]);
  const { data, loading, error } = useFetch('/submitchefform');

  // Log data from API to verify structure
  useEffect(() => {
    if (data) {
      console.log('Fetched data:', data); // Debugging: Log API response
      setChefFormData(data);
    }
  }, [data]);

  const handleDelete = async (id) => {
    if (!id) {
      console.error('Invalid ID:', id); // Log invalid id
      return;
    }
  
    // Confirmation dialog
    const confirmDelete = window.confirm('Are you sure you want to delete this submission?');
    if (!confirmDelete) return; 
  
    try {
      const response = await fetch(`http://localhost:5000/submitchefform/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete chef submission');
      }
  
      // Update state after successful deletion
      setChefFormData(chefFormData.filter(submission => submission.id !== id));
    } catch (error) {
      console.error('Error deleting chef submission:', error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Chef Form Submissions</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {renderTable(chefFormData, handleDelete)}
    </div>
  );
};

// Render table function with delete button
const renderTable = (data, handleDelete) => {
  return (
    <table className="mt-12 min-w-full border-collapse">
      <thead>
        <tr>
          <th className="px-4 py-2 border">Name</th>
          <th className="px-4 py-2 border">Phone</th>
          <th className="px-4 py-2 border">Location</th>
          <th className="px-4 py-2 border">Availability</th>
          <th className="px-4 py-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((item) => (
            <tr key={item.id || item._id}> {/* Adjust for different field names */}
              <td className="px-4 py-2 border">{item.name || 'N/A'}</td>
              <td className="px-4 py-2 border">{item.phone || 'N/A'}</td>
              <td className="px-4 py-2 border">{item.location || 'N/A'}</td>
              <td className="px-4 py-2 border">{item.availability || 'N/A'}</td>
              <td className="px-4 py-2 border">
                <button
                  onClick={() => {
                    const itemId = item.id || item._id; 
                    console.log('Deleting item with id:', itemId); 
                    handleDelete(itemId);
                  }}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center py-2">No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ChefFormSubmissions;
