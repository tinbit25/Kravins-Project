import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Input from '../components/signup/input';
import { User, Mail, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // Removed extra character 'a' here
import FloatingShape from "../components/signup/FloatingShape";
import { FaSpinner } from 'react-icons/fa';

const adminEmails = ['admin@example.com', 'superuser@example.com']; // Add your admin emails here

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading state
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.text();
      if (response.ok) {
        alert(data); // Success message
        // Set the user role based on email
        const role = adminEmails.includes(email) ? 'admin' : 'user';
        onLogin(role);
        navigate(role === 'admin' ? '/admin' : '/');
      } else {
        alert(data); // Error message
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0D0D0D] justify-center items-center relative overflow-hidden">
      {/* Floating Shapes for Design */}
      <FloatingShape color="bg-[#C9A581]" size="w-64 h-64" top="-5%" left="10%" zIndex={1} />
      <FloatingShape color="bg-[#C9A581]" size="w-44 h-44" top="70%" left="80%" zIndex={2} />
      <FloatingShape color="bg-[#C9A581]" size="w-64 h-64" top="40%" left="-10%" zIndex={3} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md bg-gray-700 w-full bg-opacity-50 rounded-2xl overflow-hidden p-8 mx-auto mt-10"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleLogin}>
          <Input
            icon={Mail}
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <motion.button
            className="w-full p-3 rounded-lg font-bold bg-[#F16122] text-white hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200 flex justify-center items-center"
            type="submit"
            disabled={loading}
          >
            {loading ? <FaSpinner className="animate-spin mr-2" /> : 'Login'}
          </motion.button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#C9A581] hover-underline">
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
