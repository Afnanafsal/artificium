import React from 'react';

const SignupPage = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      {/* Left Section */}
      <div className="flex-1 flex items-center justify-center">
        {/* Placeholder for image */}
        <img src="/placeholder-image.jpg" alt="Placeholder" className="max-h-full" />
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col justify-center px-10">
        {/* Logo */}
        <div className="mb-10">
          <img src="/logo.png" alt="Logo" className="mx-auto" />
        </div>

        {/* Title */}
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-2">Connect with your team</h1>
          <h2 className="text-4xl font-bold mb-2">and bring your creative ideas to life.</h2>
        </div>

        {/* Form */}
        <form className="flex flex-col space-y-4">
          {/* Name Inputs */}
          <div className="flex space-x-4">
            <input type="text" placeholder="First Name" className="input-field" />
            <input type="text" placeholder="Last Name" className="input-field" />
          </div>

          {/* Password Inputs */}
          <div className="flex space-x-4">
            <input type="password" placeholder="Password" className="input-field" />
            <input type="password" placeholder="Repeat Password" className="input-field" />
          </div>

          {/* Terms and Conditions Checkbox */}
          <label className="flex items-center text-gray-500">
            <input type="checkbox" className="mr-2" />
            I am agreeing to the terms and conditions
          </label>

          {/* Sign Up Button */}
          <button type="submit" className="btn-login bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
            Sign Up
          </button>
        </form>

        {/* Copyright and Privacy Policy */}
        <div className="flex justify-between mt-8 text-gray-500">
          <span>Artificium.app © 2023</span>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
