import React, { useState, useEffect } from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Import Leaflet images
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Set default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Set visibility on mount
    return () => {
      setIsVisible(false); // Optionally set visibility to false on unmount
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send formData as JSON
      });
      
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        const data = await response.json();
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again later.');
    }
  };
  

  return (
    <div className="py-16 pt-48 px-6 bg-[#0D0D0D] text-white">
      <div className={`transition-transform duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl Tfont font-bold text-[#C9A581] mb-4">Contact Us</h2>
          <p className="text-lg">
            We’d love to hear from you! Please fill out the form below or contact us directly.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start space-x-0 md:space-x-10">
          <form
            onSubmit={handleSubmit}
            className={`shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full md:w-1/2`}
          >
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="shadow appearance-none border w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:bg-transparent transition duration-300 ease-in-out bg-transparent border-[#C9A581] hover:bg-[#2D2D2D]"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="shadow appearance-none border w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out bg-transparent border-[#C9A581] hover:bg-[#2D2D2D]"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out bg-transparent border-[#C9A581] hover:bg-[#2D2D2D]"
                rows="4"
              ></textarea>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="border border-[#C9A581] hover:bg-red-700 transition duration-300 ease-in-out text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
              >
                Send
              </button>
            </div>
          </form>

          <div className={`mt-8 md:mt-0 w-full md:w-1/2 transition-transform duration-500`}>
            <div className="space-y-9 text-left grid grid-cols-2">
              <div className="p-4 pt-16 shadow rounded">
                <h4 className="font-semibold text-lg text-[#C9A581]">For More Info</h4>
                <p>Email: <a href="mailto:info@kravinz.com" className="text-white">info@kravinz.com</a></p>
              </div>

              <div className="p-4 shadow rounded-lg">
                <h4 className="font-semibold text-lg text-[#C9A581]">Daniel</h4>
                <p>Phone: <a href="tel:+250790139857" className="text-white">+250790139857</a></p>
                <p>Email: <a href="mailto:daniel@kravinz.com" className="text-white">daniel@kravinz.com</a></p>
              </div>

              <div className="p-4 shadow rounded-lg">
                <h4 className="font-semibold text-lg text-[#C9A581]">Kay</h4>
                <p>Phone: <a href="tel:+250790139525" className="text-white">+250790139525</a></p>
                <p>Email: <a href="mailto:your-email@kravinz.com" className="text-white">your-email@kravinz.com</a></p>
              </div>

              <div className="p-4 shadow rounded-lg">
                <h4 className="font-semibold text-lg text-[#C9A581]">Franck</h4>
                <p>Phone: <a href="tel:+250790801228" className="text-white">+250790801228</a></p>
                <p>Email: <a href="mailto:akarekezi@kravinz.com" className="text-white">akarekezi@kravinz.com</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Map Section */}
        <div className="mt-12 w-full">
          <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                Our Location. <br /> Visit us!
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Follow Us Section */}
        <div className="p-4 mx-auto shadow rounded-lg mt-8">
          <h4 className="font-semibold text-4xl mb-5 text-[#C9A581]">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com" className="text-white hover:text-pink-500 hover:scale-125 transition duration-300 ease-in-out">
              <FaInstagram size={40} />
            </a>
            <a href="https://www.facebook.com" className="text-white hover:text-blue-500 hover:scale-125 transition duration-300 ease-in-out">
              <FaFacebook size={40} />
            </a>
            <a href="https://www.twitter.com" className="text-white hover:text-blue-500 hover:scale-125 transition duration-300 ease-in-out">
              <FaTwitter size={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;