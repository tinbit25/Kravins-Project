import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import MealOrderPage from './pages/MealOrderPage';
import MakeRequest from './pages/MakeRequest';
import BecomeAChef from './pages/BecomeAChef';
import HowItWorks from './components/Home/HowItWorks';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/Admin';
import logoImage from './assets/images/Logo/white_orange_logo.png';
import './index.css'; 

const Layout = ({ children }) => {
  const location = useLocation();
  const excludePaths = ['/login', '/signup'];
  const shouldShowNavAndFooter = !excludePaths.includes(location.pathname);

  return (
    <>
      {shouldShowNavAndFooter && <Navbar />}
      <div className="bg-[#0D0D0D]">
        {children}
      </div>
      {shouldShowNavAndFooter && <Footer />}
      <div className="text-center absolute top-0 left-0 mb-4">
        <Link to="/">
          <img src={logoImage} alt="LOGO" className="w-1/3 sm:w-96 h-auto" />
        </Link>
      </div>
    </>
  );
};

function App() {
  const [userRole, setUserRole] = useState(null);

  // Check if the user is already logged in (from localStorage)
  useEffect(() => {
    const savedRole = localStorage.getItem('userRole');
    if (savedRole) {
      setUserRole(savedRole);
    }
  }, []);

  const handleSignup = (role) => {
    setUserRole(role);
    localStorage.setItem('userRole', role); // Save to localStorage
  };

  const handleLogin = (role) => {
    setUserRole(role);
    localStorage.setItem('userRole', role); // Save to localStorage
  };

  const handleLogout = () => {
    setUserRole(null);
    localStorage.removeItem('userRole'); // Clear from localStorage
  };

  return (
    <div className='bg-[#0D0D0D]'>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/makerequest" element={<MakeRequest />} />
            <Route path="/order" element={<MealOrderPage />} />
            <Route path="/become-chef" element={<BecomeAChef />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/signups" element={<SignUpPage onSignup={handleSignup} />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            {userRole === 'admin' && <Route path="/admin" element={<AdminPage />} />} 
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
