import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authorize } from '../services/authService';

type AuthContextType = {
  user: any;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState()

  const isAuthenticated = localStorage.getItem('session');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
    else {
      const profileData = async () => {
        const profile = await authorize()
        setUser(profile.data)
      }
      profileData()
    }
  }, [isAuthenticated]);

  const value = {
    user: isAuthenticated ? user : null,
    isAuthenticated: !!isAuthenticated,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};
