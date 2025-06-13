import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = async (formData) => {
    try {
      const res = await axios.post('https://lanvera.onrender.com/auth/signup', formData);
      setUser(res.data.user); // Adjust this if your response structure differs
      toast.success('Signed up successfully!');
      return res.data;
    } catch (error) {
      const message = error.response?.data?.message || 'Signup failed!';
      toast.error(message);
      throw new Error(message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
