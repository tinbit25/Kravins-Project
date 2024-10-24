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
        console.log('Fetched Meal Orders:', data);
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

  // Handle delete order
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this submission?');
    if (!confirmDelete) return; // Abort deletion if user cancels
    try {
      const response = await fetch(`http://localhost:5000/submitMealOrder/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete meal order');
      }

      // Update state after deletion
      setMealOrders(mealOrders.filter(order => order.id !== id));
    } catch (error) {
      console.error('Error deleting meal order:', error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Meal Orders</h2>
      {loading && <p className="text-gray-500">Loading meal orders...</p>}
      {error && <p className="text-red-500">{`Error: ${error}`}</p>}
      {renderTable(mealOrders, ['MealPreference', 'NumberOfMeals', 'PersonalInfo', 'Address', 'Actions'], handleDelete)}
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
                <td key={colIdx} className="px-4 py-2 border">{item[col] || 'N/A'}</td>
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

export default MealOrders;
