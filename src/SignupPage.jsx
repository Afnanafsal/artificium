import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const SignupPage = () => {
  return (
    <div className="h-screen bg-[#131619] flex relative" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Right Section */}
      <div className="flex-1 flex flex-col justify-center px-28 relative">
        {/* Logo and Login Link */}
        <div className="absolute flex gap-[650px] top-4 ml-4 mt-4 left-4">
          <img src="/logo.png" alt="Logo" className="w-12 h-12" />
          <a href="/" className="text-white ml-4 mt-4" style={{
            background: '-webkit-linear-gradient(left, #82DBF7, #B6F09C)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Login</a>
        </div>

        {/* Title */}
        <div className="text-4xl text-white font-normal mb-24">Connect with your team and bring your creative ideas to life.</div>

        {/* Form */}
        <form className="flex flex-col space-y-4">
          {/* First Name and Last Name Inputs */}
          <div className="flex space-x-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="firstName" className="text-gray-500 mb-2">First Name</label>
              <input type="text" id="firstName" placeholder="First Name" className="input-field bg-transparent text-white border border-gray-500 rounded p-2" />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="lastName" className="text-gray-500  mb-2">Last Name</label>
              <input type="text" id="lastName" placeholder="Last Name" className="input-field bg-transparent text-white border border-gray-500 rounded p-2" />
            </div>
          </div>

          {/* Password and Repeat Password Inputs */}
          <div className="flex space-x-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="password" className="text-gray-500 mb-2">Password</label>
              <input type="password" id="password" placeholder="Password" className="input-field bg-transparent text-white border border-gray-500 rounded p-2" />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="repeatPassword" className="text-gray-500 mb-2">Repeat Password</label>
              <input type="password" id="repeatPassword" placeholder="Repeat Password" className="input-field bg-transparent text-white border border-gray-500 rounded p-2" />
            </div>
          </div>

          {/* Terms and Conditions Checkbox */}
          <label className="flex items-center text-gray-500">
            <input type="checkbox" className="mr-2" />
            <label >
            I Agree with <span style={{
            background: '-webkit-linear-gradient(left, #82DBF7, #B6F09C)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}> Terms and conditions</span></label>
          </label>

          {/* Sign Up Button */}
          <button className="btn-login bg-[#B6F09C] text-black px-4 py-2 rounded-md w-full">
           Create Free Account
          </button>
        </form>
        {/* Text at bottom-left */}
        <p className="absolute text-base bottom-0 left-0 mb-4 ml-4 text-gray-500">Artificium.app © 2023</p>
          {/* Text at bottom-right */}
          <p className="absolute text-base bottom-0 right-0 mb-4 mr-4 text-gray-500">Privacy Policy</p>
      </div>

      {/* Right Section */}
      <div className="flex-1">
        {/* Placeholder for image */}
        <img src="/abstract-02.png" alt="Placeholder" className="h-full object-cover" />
      
      </div>
    </div>
  );
};

export default SignupPage;
