import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import BookChefForm from './pages/BookChefForm';
import BecomeChefForm from './pages/BecomeChefForm';
import bgImage from './assets/images/bg.jpg'
import logoImage from './assets/images/Logo/white_orange_logo.png';
import './index.css'; 


function App() {
  return (
    <Router>
      <div
        className="h-screen bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.4) 50%), url(${bgImage})` 
        }}
      >
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/menu" element={<BookChefForm />} />
          <Route path="/order" element={<BookChefForm />} />
          <Route path="/become-chef" element={<BecomeChefForm />} />
        </Routes>

        {/* Logo in the center */}
        <div className="text-center absolute top-0 left-5 mb-4">
          <img src={logoImage} alt="LOGO" className="mx-auto w-96 h-auto" />
        </div>
      </div>
    </Router>
  );

}
console.log(bgImage);

export default App;
