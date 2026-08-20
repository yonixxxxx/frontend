
import { createContext, useState, useEffect, useContext } from 'react';
import api from '../api/axiosConfig';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get('/account/me');
        setUser(response.data);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const login = async (email, password) => {
    const response = await api.post('/account/login', { email, password });
    
    const userResponse = await api.get('/account/me');
    setUser(userResponse.data);
    return response.data;
  };

  const register = async (email, full_name, password) => {
    const response = await api.post('/account/register', { email, full_name, password });
    return response.data;
  };

  const logout = async () => {
    await api.post('/account/logout');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);