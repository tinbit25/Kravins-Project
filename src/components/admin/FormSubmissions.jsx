// FormSubmissions.jsx
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
        console.log('Fetched Form Submissions:', data); // Debug log
        setFormData(data);
      } catch (error) {
        console.error('Error fetching form data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Form Submissions</h2>
      {renderTable(formData, ['Name', 'Phone', 'Origin', 'Budget'])}
    </div>
  );
};

// Render table function
const renderTable = (data, columns) => {
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
              {columns.map((col, colIdx) => (
                <td key={colIdx} className="px-4 py-2 border">{item[col.toLowerCase()] || 'N/A'}</td>
              ))}
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
