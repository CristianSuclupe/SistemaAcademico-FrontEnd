import { createContext, useState, useEffect } from 'react';
import { Token } from '../api/token';
import { User } from '../types/user';
import { AuthContextProps } from '../types/auth';
import { useNavigate } from 'react-router-dom';

const tokenController = new Token();

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const token = await tokenController.getToken();

      if (!token) {
        logout();
        setLoading(false);
        return;
      }

      if (tokenController.hasExpired(token)) {
        logout();
      } else {
        login(token);
      }
      return;
    })();
  }, []);

  const login = (token: string) => {
    try {
      tokenController.setToken(token);
      const userLogged = tokenController.getUser(token);
      setUser(userLogged);
      setToken(token);
      setLoading(false);
      navigate('/');
    } catch (error) {
      throw new Error();
    }
  };

  const logout = () => {
    // Eliminamos el token y el usuario actual
    tokenController.removeToken();
    setUser(null);
    setToken(null);
    navigate('/login');
  };

  const data = {
    accessToken: token,
    user,
    login,
    logout
  };

  if (loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
