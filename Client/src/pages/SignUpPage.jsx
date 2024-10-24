import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Input from '../components/signup/input';
import { User, Mail, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import FloatingShape from "../components/signup/FloatingShape";

const adminEmails = ['admin@example.com', 'superuser@example.com']; 

const SignUpPage = ({ onSignup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.text();
      if (response.ok) {
        alert(data); // Success message
        // Set the user role based on email
        const role = adminEmails.includes(email) ? 'admin' : 'user';
        onSignup(role);
        navigate(role === 'admin' ? '/admin' : '/');
      } else {
        alert(data); // Error message
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0D0D0D] relative">
      <div className="flex-grow flex items-center justify-center relative overflow-hidden">
        {/* Floating Shapes */}
        <FloatingShape color="bg-[#C9A581]" size="w-64 h-64" top="-5%" left="10%" zIndex={1} />
        <FloatingShape color="bg-[#C9A581]" size="w-44 h-44" top="70%" left="80%" zIndex={2} />
        <FloatingShape color="bg-[#C9A581]" size="w-64 h-64" top="40%" left="-10%" zIndex={3} />

        {/* Signup Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md p-6 md:p-8 bg-gray-700 bg-opacity-50 rounded-2xl mx-auto mt-10 sm:mt-0"
        >
          <h2 className="text-lg sm:text-xl font-bold text-[#C9A581] text-center mb-4">
            Create Account
          </h2>
          <form onSubmit={handleSignUp}>
            <Input
              icon={User}
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
              className="w-full py-2 sm:py-3 rounded-lg font-bold bg-[#F16122] hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200 text-white"
              type="submit"
            >
              Sign Up
            </motion.button>
          </form>
          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="text-[#C9A581] hover:underline">
                Login
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUpPage;
