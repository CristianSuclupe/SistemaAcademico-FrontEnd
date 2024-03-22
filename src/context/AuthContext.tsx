import { createContext, useState, useEffect } from 'react';
import { Token } from '../api/token';
import { User } from '../types/user';
import { AuthContextProps } from '../types/auth';

const tokenController = new Token();

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const token = tokenController.getToken();

      if (!token) {
        logout();
        setLoading(false);
        return;
      }

      if (tokenController.hasExpired(token)) logout();
      else login(token);
      return;
    })();
  }, []);

  console.log(user);
  const login = (token: string) => {
    if (!token) return null;
    tokenController.setToken(token);
    const userLogged = tokenController.getUser(token);
    setUser(userLogged);
    setLoading(false);
  };

  const logout = () => {
    // Eliminamos el token y el usuario actual
    tokenController.removeToken();
    setUser(null);
    setToken(null);
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
