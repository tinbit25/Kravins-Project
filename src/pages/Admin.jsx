import React, { useEffect, useState } from 'react';
import UserSignups from '../components/admin/UserSignups';
import FormSubmissions from '../components/admin/FormSubmissions';
import ChefFormSubmissions from '../components/admin/ChefFormSubmissions';
import MealOrders from '../components/admin/MealOrders';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('users'); // Tracks the active tab

  const renderContent = () => {
    switch (activeTab) {
      case 'users':
        return <UserSignups />;
      case 'form':
        return <FormSubmissions />;
      case 'chef':
        return <ChefFormSubmissions />;
      case 'meal':
        return <MealOrders />;
      default:
        return <UserSignups />;
    }
  };

  return (
    <div className="pt-72 admin-container p-4">
      <nav className="mb-6">
        <ul className="flex space-x-4">
          <li>
            <button
              className={`px-4 py-2 ${activeTab === 'users' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('users')}
            >
              User Signups
            </button>
          </li>
          <li>
            <button
              className={`px-4 py-2 ${activeTab === 'form' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('form')}
            >
              Form Submissions
            </button>
          </li>
          <li>
            <button
              className={`px-4 py-2 ${activeTab === 'chef' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('chef')}
            >
              Chef Form Submissions
            </button>
          </li>
          <li>
            <button
              className={`px-4 py-2 ${activeTab === 'meal' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('meal')}
            >
              Meal Orders
            </button>
          </li>
        </ul>
      </nav>

      <div className="table-container">
        {renderContent()}
      </div>
    </div>
  );
};

export default Admin;
