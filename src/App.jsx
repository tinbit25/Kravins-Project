import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import MealOrderPage from './pages/MealOrderPage';
import MakeRequest from './pages/MakeRequest';
import BecomeAChef from './pages/BecomeAChef';
import HowItWorks from './components/Home/HowItWorks';
import logoImage from './assets/images/Logo/white_orange_logo.png';
import './index.css'; 

function App() {
  return (
    <Router>
      <Navbar className="bg-transparent" />
      <div className="bg-[#0D0D0D]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/menu" element={<MakeRequest />} />
          <Route path="/order" element={<MealOrderPage />} />
          <Route path="/become-chef" element={<BecomeAChef />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
        <Footer />
      </div>
      {/* Logo in the center */}
      <div className="text-center absolute top-0 left-0  mb-4">
        <Link to="/"><img src={logoImage} alt="LOGO" className="w-1/2 sm:w-96 h-auto" /></Link>
  
</div>
    </Router>
  );
}

export default App;