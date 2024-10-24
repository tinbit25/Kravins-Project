import React, { useEffect, useState } from 'react';

const MealOrders = () => {
  const [mealOrders, setMealOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/submitMealOrder');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched Meal Orders:', data); // Debug log
        setMealOrders(data);
      } catch (error) {
        console.error('Error fetching meal orders:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Meal Orders</h2>
      {loading && <p className="text-gray-500">Loading meal orders...</p>}
      {error && <p className="text-red-500">{`Error: ${error}`}</p>}
      {renderTable(mealOrders, ['MealPreference', 'NumberOfMeals', 'PersonalInfo', 'Address'])}
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
                <td key={colIdx} className="px-4 py-2 border">{item[col] || 'N/A'}</td>
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

export default MealOrders;
