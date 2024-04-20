import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const data = JSON.parse(localStorage.getItem("userData"));
  const [user, setUser] = useState(data);

  const navigate = useNavigate();

  const login = (userData) => {
    setUser( userData );
    localStorage.setItem("userData",JSON.stringify(userData));
    navigate('/');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userData");
    navigate('/');
  };

  const registration = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, registration }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};