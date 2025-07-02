import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (err) {
      console.error("Failed to parse stored user", err);
      localStorage.removeItem('user'); // Optional cleanup
      return null;
    }
  });
  

  // Signup user
  const signup = async (formData) => {
    try {
      const res = await axios.post('https://lanvera.onrender.com/auth/signup', formData);
      setUser(res.data.user);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      toast.success("Signup successful! Check your email to verify.");
      return res.data;
    } catch (error) {
      const message = error.response?.data?.message || 'Signup failed!';
      toast.error(message);
      throw new Error(message);
    }
  };

  // Login user
  const login = async ({ email, password }) => {
    try {
      const res = await axios.post('https://lanvera.onrender.com/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      toast.success("Login successful!");
      return res.data;
    } catch (err) {
      const message = err.response?.data?.message || "Login failed";
      toast.error(message);
      throw new Error(message);
    }
  }; 


  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    toast.success("Logged out successfully!");
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
