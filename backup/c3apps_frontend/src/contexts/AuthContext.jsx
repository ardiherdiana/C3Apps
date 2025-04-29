import React, { createContext, useContext, useState, useEffect } from 'react';
import { c3apps_backend } from "../../../declarations/c3apps_backend";
import { sha256 } from 'js-sha256';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fungsi untuk hash password
  const hashPassword = (password) => {
    return sha256(password);
  };

  // Cek apakah user sudah login pada load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const register = async (email, password, role = "user") => {
    try {
      const hashedPassword = hashPassword(password);
      const result = await c3apps_backend.register(email, hashedPassword, role);
      
      if ('ok' in result) {
        return { success: true, message: result.ok };
      } else {
        return { success: false, message: result.err };
      }
    } catch (error) {
      console.error("Registration error:", error);
      return { success: false, message: "Registration failed" };
    }
  };

  const login = async (email, password) => {
    try {
      const hashedPassword = hashPassword(password);
      const result = await c3apps_backend.login(email, hashedPassword);
      
      if ('ok' in result) {
        const userData = {
          email,
          role: result.ok.role
        };
        
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return { success: true, user: userData };
      } else {
        return { success: false, message: result.err };
      }
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, message: "Login failed" };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    loading,
    register,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};