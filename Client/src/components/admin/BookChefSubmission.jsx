import React, { useEffect, useState } from 'react';

const FormSubmissions = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const response = await fetch('http://localhost:5000/submit');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched Form Submissions:', data);
        setFormData(data);
      } catch (error) {
        console.error('Error fetching form data:', error);
      }
    };

    fetchData();
  }, []);

  // Handle delete submission
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this submission?');
    if (!confirmDelete) return; // Abort deletion if user cancels
    try {
      const response = await fetch(`http://localhost:5000/submit/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete submission');
      }

      // Update state after deletion
      setFormData(formData.filter(submission => submission.id !== id));
    } catch (error) {
      console.error('Error deleting submission:', error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Form Submissions</h2>
      {renderTable(formData, ['Name', 'Phone', 'Origin', 'Budget', 'Actions'], handleDelete)}
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
                  onClick={() => handleDelete(item.id)}
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

export default FormSubmissions;
