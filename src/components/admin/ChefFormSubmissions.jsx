// src/components/admin/ChefFormSubmissions.jsx
import React from 'react';
import useFetch from '../../hooks/useFetch';

const ChefFormSubmissions = () => {
  const { data: chefFormData, loading, error } = useFetch('/submitchefform');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Chef Form Submissions</h2>
      {renderTable(chefFormData, ['Name', 'Phone', 'Location', 'Availability'])}
    </div>
  );
};

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

export default ChefFormSubmissions;
