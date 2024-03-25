import { AuthProvider } from '../context/AuthContext';

export const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
