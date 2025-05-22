import React, { createContext, useState, useEffect, useContext } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string, role: User['role']) => Promise<void>;
  logout: () => void;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data - in a real app, this would come from a backend
const MOCK_USERS: User[] = [
  {
    id: '1',
    email: 'fan@example.com',
    name: 'Cricket Fan',
    role: 'fan',
    createdAt: new Date()
  },
  {
    id: '2',
    email: 'organizer@example.com',
    name: 'Match Organizer',
    role: 'organizer',
    createdAt: new Date()
  },
  {
    id: '3',
    email: 'admin@example.com',
    name: 'System Admin',
    role: 'admin',
    createdAt: new Date()
  },
  {
    id: '4',
    email: 'player@example.com',
    name: 'Cricket Player',
    role: 'player',
    createdAt: new Date()
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('nepCscoreUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      
      // Mock authentication - in a real app, this would be an API call
      const mockUser = MOCK_USERS.find(u => u.email === email);
      
      if (mockUser && password === 'password') {
        setUser(mockUser);
        localStorage.setItem('nepCscoreUser', JSON.stringify(mockUser));
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const signup = async (email: string, password: string, name: string, role: User['role']) => {
    try {
      setLoading(true);
      setError(null);
      
      // Mock signup - in a real app, this would be an API call
      if (MOCK_USERS.some(u => u.email === email)) {
        throw new Error('User already exists');
      }
      
      const newUser: User = {
        id: String(MOCK_USERS.length + 1),
        email,
        name,
        role,
        createdAt: new Date()
      };
      
      // In a real app, this would persist to a database
      MOCK_USERS.push(newUser);
      
      setUser(newUser);
      localStorage.setItem('nepCscoreUser', JSON.stringify(newUser));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('nepCscoreUser');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, error }}>
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