import React, { useEffect, useState } from 'react';

const UserSignups = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/signup');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched user data:', data);
        setUserData(data); // Save the fetched data to state
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  // Handle user deletion
  const handleDelete = async (email) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this submission?');
    if (!confirmDelete) return; // Abort deletion if user cancels
    try {
      const response = await fetch(`http://localhost:5000/signup/${email}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete user');
      }

      // Update the userData state to remove the deleted user
      setUserData(userData.filter(user => user.email !== email));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">User Signups</h2>
      {renderTable(userData, ['Name', 'Email', 'Password', 'Actions'], handleDelete)}
    </div>
  );
};

// Render table function with delete button
const renderTable = (data, columns, handleDelete) => {
  return (
    <table className="mt-12 min-w-full border-collapse">
      <thead>
        <tr>
          {columns.map((col, idx) => (
            <th key={idx} className="px-4 py-2 border">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((item, idx) => (
            <tr key={idx}>
              {columns.slice(0, -1).map((col, colIdx) => (
                <td key={colIdx} className="px-4 py-2 border">{item[col.toLowerCase()] || 'N/A'}</td>
              ))}
              <td className="px-4 py-2 border">
                <button
                  onClick={() => handleDelete(item.email)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length} className="text-center py-2">No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserSignups;
