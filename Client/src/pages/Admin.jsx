import React, { useState } from 'react';
import UserSignups from '../components/admin/UserSignups';
import BookChefSubmission from '../components/admin/BookChefSubmission';
import ChefFormSubmissions from '../components/admin/ChefFormSubmissions';
import MealOrders from '../components/admin/MealOrders';
import ContactInfo from '../components/admin/ContactInfo'; 

const Admin = () => {
  const [activeTab, setActiveTab] = useState('users'); // Tracks the active tab

  // Function to render content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'users':
        return <UserSignups />;
      case 'form':
        return <BookChefSubmission />;
      case 'chef':
        return <ChefFormSubmissions />;
      case 'meal':
        return <MealOrders />;
      case 'contact': 
        return <ContactInfo />;
      default:
        return <UserSignups />;
    }
  };

  return (
    <div className="pt-36 py-72 relative right-0 top-12 admin-container p-4">
      <nav className="mb-6 text-black">
        <ul className="flex space-x-4">
          <li>
            <button
              className={`px-4 py-2 w-48 ${activeTab === 'users' ? 'bg-orange-300 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('users')}
            >
              User Signups
            </button>
          </li>
          <li>
            <button
              className={`px-4 py-2 w-48 ${activeTab === 'form' ? 'bg-orange-300 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('form')}
            >
              Book Chef Form Submissions
            </button>
          </li>
          <li>
            <button
              className={`px-4 py-2 w-48 ${activeTab === 'chef' ? 'bg-orange-300 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('chef')}
            >
             Become Chef Form Submissions
            </button>
          </li>
          <li>
            <button
              className={`px-4 py-2 w-48 ${activeTab === 'meal' ? 'bg-orange-300 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('meal')}
            >
              Meal Orders
            </button>
          </li>
          <li>
            <button
              className={`px-4 py-2 w-48 ${activeTab === 'contact' ? 'bg-orange-300 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('contact')}
            >
              Contact Info
            </button>
          </li>
        </ul>
      </nav>

      <div className="table-container">
        {renderContent()} {/* Renders content based on the active tab */}
      </div>
    </div>
  );
};

export default Admin;
