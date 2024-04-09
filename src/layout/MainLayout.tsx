import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { Records } from "../components/Records";
import { AuthProvider } from "../context/AuthContext";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <AuthProvider>
      <Header />
      <div className="flex">
        <NavBar />
        <main className="p-10 font-Montserrat flex w-full gap-x-10">
          <Outlet />
          <Records />
        </main>
      </div>
    </AuthProvider>
  );
};
