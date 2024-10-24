import React from 'react';

const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className='relative mb-6'>
      <div className='absolute inset-y-0 flex items-center pl-3'>
        <Icon className="w-5 h-5 text-[#C9A581]" />
      </div>
      <input
        {...props}
        className='w-full pl-10 py-5 bg-[#1E1E1E] rounded-lg focus:border-[#C9A581] focus:ring-2 focus:ring-[#C9A581] text-white placeholder-gray-400 transition duration-200'
      />
    </div>
  );
}

export default Input;
