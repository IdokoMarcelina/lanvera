import React, { useState } from 'react'
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { FaEye, FaEyeSlash, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';


const Signup = () => {
    const [phone, setPhone] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: ''
    });
  
    const handleChange = (e) => {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleSignup = async (e) => {
      e.preventDefault();
      setLoading(true);
  
      try {
        await signup({
          name: formData.name,
          email: formData.email,
          phone,
          password: formData.password
        });
      } catch (error) {

    } finally {
        setLoading(false);
      }
    };

  return (
    <div className=' w-[330px] lg:w-[450px] h-[509px] p-8 ml-5 mb-10 mr-10 shadow-lg'>
        <h5 className='font-bold text-[20px]'>Sign up</h5>
        <p className='text-[12px] mb-5'>Already have an account? <span className='text-[#d93e00]'> sign in</span></p>

        <form action="" onSubmit={handleSignup} className='flex flex-col'>
            <input type="text" placeholder='Full name'
                    className='w-[270px] lg:w-[380px] border-1 border-gray-300 p-1 rounded-[4px] mb-3 shadow-2xs' />
            <input type="text" placeholder='Email address'
                    className='w-[270px] lg:w-[380px] border-1 border-gray-300 p-1 rounded-[4px] mb-3 shadow-2xs'/>
            
        <label className="block">
          
            <PhoneInput
            country={'ng'}
            value={phone}
            onChange={setPhone}
            inputClass=" !w-[270px] lg:!w-[380px]  text-sm"
            containerClass="!w-[380px] !mb-3 "
            />
        </label>

        <div className='flex w-[270px] lg:w-[380px] rounded-[4px] mb-3 shadow-2xs items-center pr-1 justify-between border border-gray-300'>
             <input type={showPassword ? 'text' : 'password'}  className="  w-[346px] py-1 px-1  focus:ring-0"  placeholder='password' />
            
            <div className=" text-gray-500  cursor-pointer"
                onClick={()=> setShowPassword(!showPassword)}
            >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}

            </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-[270px] lg:w-[380px] h-[40px] mb-3 rounded-[4px] text-white flex items-center justify-center gap-2 ${
            loading ? 'bg-[#d93e00]' : 'bg-[#f1b69e]'
          }`}
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
          {loading ? 'Signing up...' : 'Continue'}
        </button>

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

        </form>

        <p className='text-gray-400 text-[8px] lg:text-[12px] ml-12 lg:ml-17 mt-5'>By continuing you agree to the <span className='font-bold text-black'>Policy and Rules</span></p>
    </div>
  )
}

export default Signup