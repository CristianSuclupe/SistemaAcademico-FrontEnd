import { LoginForm } from '../components/LoginForm';
import { AuthProvider } from '../context/AuthContext';

export const Login = () => {
  return (
    <AuthProvider>
      <main className="flex justify-between h-screen bg-login bg-cover bg-no-repeat bg-center bg-fixed relative">
        <div className="h-full w-full bg-gradient-to-r from-main to-secondary opacity-20 absolute"></div>
        <section className="flex justify-center items-center flex-col h-full w-[630px] bg-secondary bg-opacity-50 ml-56 absolute">
          <img src="" alt="" />
          <h1>Bienvenidos</h1>
          <LoginForm />
        </section>
      </main>
    </AuthProvider>
  );
};
