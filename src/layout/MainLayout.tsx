import { Header } from '../components/Header';
import { NavBar } from '../components/NavBar';
import { AuthProvider } from '../context/AuthContext';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <AuthProvider>
      <Header />
      <div className="flex">
        <NavBar />
        <Outlet />
      </div>
    </AuthProvider>
  );
};
