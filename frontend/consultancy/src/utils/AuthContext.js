// frontend/src/utils/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { authService, userService } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('access_token');
      console.log('checkAuth - Token exists:', !!token);
      
      if (token) {
        // Verify token is valid by making an API call
        const userResponse = await userService.getProfile();
        console.log('checkAuth - User profile response:', userResponse.data);
        setCurrentUser(userResponse.data);
      }
    } catch (error) {
      console.error('checkAuth - Error:', error);
      // Token is invalid, clear it
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
      setCurrentUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      console.log('login - Attempting login with:', credentials);
      const response = await authService.login(credentials);
      const { access, refresh } = response.data;
      
      console.log('login - Tokens received');
      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);
      
      // Get user profile
      const userResponse = await userService.getProfile();
      console.log('login - User profile:', userResponse.data);
      
      setCurrentUser(userResponse.data);
      localStorage.setItem('user', JSON.stringify(userResponse.data));
      
      return { success: true };
    } catch (error) {
      console.error('login - Error:', error);
      return { 
        success: false, 
        error: error.response?.data?.detail || 'Login failed' 
      };
    }
  };

  const register = async (userData) => {
    try {
      console.log('register - Attempting registration with:', userData);
      const response = await authService.register(userData);
      
      if (response.data.access) {
        console.log('register - Registration successful, tokens received');
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        
        const userResponse = await userService.getProfile();
        console.log('register - User profile:', userResponse.data);
        
        setCurrentUser(userResponse.data);
        localStorage.setItem('user', JSON.stringify(userResponse.data));
      }
      
      return { success: true, data: response.data };
    } catch (error) {
      console.error('register - Error:', error);
      return { 
        success: false, 
        error: error.response?.data || 'Registration failed' 
      };
    }
  };

  const logout = () => {
    console.log('logout - Clearing auth data');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};