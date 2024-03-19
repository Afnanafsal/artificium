import React from 'react';

const LoginPage = () => {
  return  (
    <div className="h-screen bg-[#131619] flex relative" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Right Section */}
      <div className="flex-1 flex flex-col justify-center px-10 relative">
        {/* Logo */}
        <div className="absolute top-0 left-0 mt-4 ml-4">
          <img src="/logo.png" alt="Logo" className="w-12 h-12" />
        </div>

        {/* Title */}
        <div className="text-white ml-16  whitespace-nowrap">
          <h1 className="text-5xl font-normal mb-2">Let's get <span style={{
              background: '-webkit-linear-gradient(left, #4D62E5, #87DDEE, #B6F09C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>creative!</span></h1>
        </div>


        {/* Description */}
        <p className="ml-16 text-base text-gray-400 mt-4 mb-8">Log in to Artificium to start creating magic.</p>

        {/* Form */}
        <form className="flex flex-col space-y-4 items-center"> {/* Added text-center class */}
          {/* Email Input */}
          <input 
            type="email" 
            placeholder="afnnafsal@gmail.com" 
            className="input-field" 
            style={{ 
              width: 'calc(100% - 120px)', // Reduce width
              height: '40px', 
              borderRadius: '8px', 
              padding: '10px', 
              border: '1px solid #ccc' 
            }} 
          />

          {/* Password Input */}
          <input 
            type="password" 
            placeholder="••••••••••" 
            className="input-field" 
            style={{ 
              width: 'calc(100% - 120px)', // Reduce width
              height: '40px', 
              borderRadius: '8px', 
              padding: '10px', 
              border: '1px solid #ccc' 
            }} 
          />

         {/* Remember Me and Forgot Password */}
         <div className="flex gap-[300px] ml-32 items-center w-full"> 
            <div className="flex items-center">
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="text-gray-500">Remember me</label>
            </div>
            <a href="#" style={{
                background: '-webkit-linear-gradient(left, #82DBF7, #B6F09C)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Forgot password?</a> 
          </div>

          {/* Login Button */}
          <button 
            type="submit" 
            className="btn-login bg-[#B6F09C]  text-black px-4 py-2 rounded-md"
            style={{ 
                width: 'calc(100% - 120px)', 
               
              }} 
          >
            Log In
          </button>
        </form>

        {/* Separator Line */}
        <hr className="my-6 border-gray-400" />

        {/* Social Login */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <button className="btn-social-login bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">Sign in with Google</button>
          <button className="btn-social-login bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">Sign in with Apple</button>
        </div>

        {/* Sign Up Link */}
        <p className="text-gray-500 text-right absolute bottom-10 left-4">
          Don't have an account? 
          <a href="/signup" style={{
                background: '-webkit-linear-gradient(left, #82DBF7, #B6F09C)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}> Sign Up</a>
        </p>
      </div>
      
      {/* Left Section */}
<div className="flex-1 flex items-center justify-center">
  {/* Placeholder for image */}
  <img src="/abstract-01.png" alt="Placeholder" className="h-[835px] border-none" />
</div>
</div>

  );
};

export default LoginPage;
