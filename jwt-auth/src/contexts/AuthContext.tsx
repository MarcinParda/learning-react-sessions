import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import {
  getAuthToken,
  logout as apiLogout,
  validateToken,
} from '../services/api';

interface AuthContextType {
  user: { id: string; username: string } | null;
  login: (user: { id: string; username: string }) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<{ id: string; username: string } | null>(
    null
  );
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = getAuthToken();
      if (token) {
        const isValid = await validateToken(token);
        if (isValid) {
          setIsAuthenticated(true);
          // In a real scenario, you'd fetch user data here
          setUser({ id: '1', username: 'user' });
        } else {
          // If the token is invalid, remove it
          apiLogout();
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = (newUser: { id: string; username: string }) => {
    setUser(newUser);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    apiLogout();
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
