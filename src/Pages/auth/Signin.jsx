import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext'; // if you're using auth context

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { login } = useAuth(); 

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      toast.error("Please fill in both fields.");
      return;
    }

    setLoading(true);

    try {
      await login({ email, password }); 
      toast.success("Login successful!");
      // allows
    } catch (error) {
      toast.error(error?.message || "Invalid credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-[330px] lg:w-[450px] h-auto p-8 ml-5 mb-10 mr-10 shadow-lg'>
      <h5 className='font-bold text-[20px]'>Sign in</h5>
      <p className='text-[12px] mb-5'>Don't have an account? <span className='text-[#d93e00]'> sign up</span></p>

      <form onSubmit={handleSubmit} className='flex flex-col'>
        <input
          type="text"
          placeholder='Email address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-[270px] lg:w-[380px] border border-gray-300 p-1 rounded-[4px] mb-3 shadow-2xs'
        />

        <div className='flex w-[270px] lg:w-[380px] rounded-[4px] mb-3 shadow-2xs items-center pr-1 justify-between border border-gray-300'>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[346px] py-1 px-1 focus:ring-0"
          />
          <div
            className="text-gray-500 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </div>
        </div>

        <button
          type="submit"
          disabled={!isFormValid || loading}
          className={`w-[270px] lg:w-[380px] h-[40px] mb-3 rounded-[4px] text-white flex items-center justify-center gap-2
            ${isFormValid ? 'bg-[#d93e00]' : 'bg-[#f1b69e] cursor-not-allowed'}
          `}
        >
          {loading && (
            <svg
              className="animate-spin h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
          )}
          {loading ? 'Signing in...' : 'Continue'}
        </button>
      </form>

      <div className='flex gap-2 text-[8px] lg:text-[12px] ml-5 mb-5 mt-2 items-center'>
        <p className='border border-gray-300 mt-1 h-0.5 w-[80px] lg:w-[120px]'></p>
        <p className='text-gray-400'>Or continue with</p>
        <p className='border border-gray-300 mt-1 h-0.5 w-[80px] lg:w-[120px]'></p>
      </div>

      <div className="flex gap-5">
        <button className="flex items-center gap-2 border border-gray-400 px-4 py-2 rounded w-[180px] justify-center">
          <FcGoogle size={20} />
          <span>Google</span>
        </button>

        <button className="flex items-center gap-2 border px-4 py-2 rounded w-[180px] justify-center text-white bg-[#3a5597]">
          <FaFacebook size={20} />
          <span>Facebook</span>
        </button>
      </div>

      <p className='text-gray-400 text-[8px] lg:text-[12px] ml-12 lg:ml-17 mt-5'>
        By continuing you agree to the <span className='font-bold text-black'>Policy and Rules</span>
      </p>
    </div>
  );
};

export default Signin;
