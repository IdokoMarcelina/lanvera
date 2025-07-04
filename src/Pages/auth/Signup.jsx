import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { FaEye, FaEyeSlash, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';
import 'react-phone-input-2/lib/style.css';

const Signup = ({ onSwitchToSignin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccessCard, setShowSuccessCard] = useState(false);
  const { signup } = useAuth();
  const { handleGoogleLogin } = useAuth();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    role: 'user',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
    setErrors((prev) => ({ ...prev, phone: '' }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newErrors = {};
    if (!formData.username) newErrors.username = "Enter your full name.";
    if (!formData.email) newErrors.email = "Enter your email.";
    if (!formData.phone) newErrors.phone = "Enter your phone number.";
    if (!formData.password) newErrors.password = "Enter your password.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      await signup(formData);
      setShowSuccessCard(true);
      toast.success("Signup successful!");
    } catch (error) {
      toast.error(error.message || "Signup failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='relative w-[330px] lg:w-[450px] h-auto p-8 mx-auto my-[40px] shadow-lg bg-white rounded'>
      {showSuccessCard && (
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 shadow-md rounded z-10">
          <h2 className="text-xl font-bold text-green-600 mb-2">Signup Successful</h2>
          <p className="text-gray-700 text-sm text-center">
            Check your email and click the verification link to complete signup.
          </p>
          <button
            onClick={() => setShowSuccessCard(false)}
            className="mt-4 bg-[#d93e00] text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      )}

      <h5 className='font-bold text-[20px]'>Sign up</h5>
      <p className='text-[12px] mb-5'>
        Already have an account? <span className='text-[#d93e00] cursor-pointer' onClick={onSwitchToSignin}>Sign in</span>
      </p>

      <form onSubmit={handleSignup} className='flex flex-col'>
        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Full name"
          className='w-[270px] lg:w-[380px] border border-gray-300 p-1 rounded mb-1' />
        {errors.username && <p className="text-red-500 text-xs mb-2">{errors.username}</p>}

        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email address"
          className='w-[270px] lg:w-[380px] border border-gray-300 p-1 rounded mb-1' />
        {errors.email && <p className="text-red-500 text-xs mb-2">{errors.email}</p>}

        <PhoneInput country={'ng'} value={formData.phone} onChange={handlePhoneChange}
          inputClass="!w-[270px] lg:!w-[380px] text-sm" containerClass="!mb-1" />
        {errors.phone && <p className="text-red-500 text-xs mb-2">{errors.phone}</p>}

        <div className='flex w-[270px] lg:w-[380px] rounded mb-1 items-center pr-1 justify-between border border-gray-300'>
          <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password}
            onChange={handleChange} className="w-[346px] py-1 px-1 focus:ring-0" placeholder="Password" />
          <div className="text-gray-500 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
        {errors.password && <p className="text-red-500 text-xs mb-2">{errors.password}</p>}

        <button type="submit" disabled={loading}
          className={`w-[270px] lg:w-[380px] h-[40px] mb-3 rounded text-white flex items-center justify-center gap-2 ${loading ? 'bg-[#d93e00]' : 'bg-[#f1b69e]'}`}>
          {loading ? 'Signing up...' : 'Continue'}
        </button>

        <div className='flex gap-2 text-[8px] lg:text-[12px] ml-5 mb-5 mt-2 items-center'>
          <p className='border border-gray-300 mt-1 h-0.5 w-[80px] lg:w-[120px]'></p>
          <p className='text-gray-400'>Or continue with</p>
          <p className='border border-gray-300 mt-1 h-0.5 w-[80px] lg:w-[120px]'></p>
        </div>

        <div className="flex gap-5">
          <button type='button' onClick={handleGoogleLogin} className="flex items-center gap-2 border border-gray-400 px-4 py-2 rounded w-[180px] justify-center">
            <FcGoogle size={20} />
            <span>Google</span>
          </button>
          <button className="flex items-center gap-2 border px-4 py-2 rounded w-[180px] justify-center text-white bg-[#3a5597]">
            <FaFacebook size={20} />
            <span>Facebook</span>
          </button>
        </div>
      </form>

      <p className='text-gray-400 text-[8px] lg:text-[12px] ml-12 mt-5'>
        By continuing you agree to the <span className='font-bold text-black'>Policy and Rules</span>
      </p>
    </div>
  );
};

export default Signup;
