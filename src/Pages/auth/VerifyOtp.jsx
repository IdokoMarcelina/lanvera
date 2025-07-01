import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const VerifyOtp = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('verifying'); 

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await axios.get(`https://lanvera.onrender.com/auth/confirm-email/${token}`);
        setStatus('success');
        toast.success('Email verified successfully!');
      } catch (error) {
        setStatus('error');
        toast.error(error.response?.data?.message || 'Verification failed');
      }
    };

    if (token) {
      verifyEmail();
    } else {
      setStatus('error');
    }
  }, [token]);

  const handleLoginRedirect = () => {
    navigate('/login'); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      {status === 'verifying' && (
        <p className="text-gray-600 text-lg">Verifying your email...</p>
      )}

      {status === 'success' && (
        <div className="text-center">
          <h2 className="text-green-600 text-xl font-semibold mb-2">Email verified successfully!</h2>
          <button
            onClick={handleLoginRedirect}
            className="mt-4 px-6 py-2 bg-[#d93e00] text-white rounded"
          >
            Go to Login
          </button>
        </div>
      )}

      {status === 'error' && (
        <div className="text-center">
          <h2 className="text-red-600 text-xl font-semibold mb-2">Verification failed</h2>
          <p className="text-gray-500 mb-4">The link may be invalid or expired.</p>
          <button
            onClick={handleLoginRedirect}
            className="mt-4 px-6 py-2 bg-gray-700 text-white rounded"
          >
            Go to Login
          </button>
        </div>
      )}
    </div>
  );
};

export default VerifyOtp;
