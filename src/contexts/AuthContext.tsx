import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authorize, signout } from '../services/authService';
import { toast } from 'react-toastify';

type AuthContextType = {
  user: any;
  isAuthenticated: boolean;
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState()

  const isAuthenticated = !!localStorage.getItem('session');

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

  const logout = async () => {
    const status = await signout()

    if (status === "failed") {
      toast.error("Failed to sign you out")
      return;
    }

    toast.success("Signing you out")
    navigate('/login')
  }

  const value = {
    user: isAuthenticated ? user : null,
    isAuthenticated,
    logout
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
