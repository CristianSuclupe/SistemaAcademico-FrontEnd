import { useState } from "react";
import { useFormik } from "formik";
import { initialValues, validatioSchema } from "../utils/loginForm";
import { LoginData } from "../types/auth";
import { useAuthContext } from "../hooks/useAuthContext";
import { Auth } from "../api/auth";
import { LoaderSpinner } from "./LoaderSpinner";

const authController = new Auth();

export const LoginForm = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const { login } = useAuthContext();
  const handleSubmit = async (formData: LoginData) => {
    setLoader(true);
    const result = await authController.login(formData);
    login(result.data);
    setLoader(false);
  };
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validatioSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      handleSubmit(formValues);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="w-[480px] text-white">
      <div className="flex flex-col mb-4">
        <label htmlFor="rol" className="flex font-medium text-lg pl-7 mb-2">
          <img
            src="/images/iconrol.webp"
            alt="icono de rol"
            className="self-center mr-5"
          />
          Seleccione un rol
        </label>
        <select
          id="rol"
          name="rol"
          value={formik.values.rol}
          className="border-white rounded-3xl border-[1px] bg-white bg-opacity-30 h-10 pl-5 focus:outline-none focus:ring-2 focus:ring-main"
          onChange={formik.handleChange}
        >
          <option value="" className="text-black"></option>
          <option value="Profesor" className="text-black">
            Profesor
          </option>
          <option value="Secretarioacademico" className="text-black">
            Secretario académico
          </option>
        </select>
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="user" className="flex font-medium text-lg pl-7 mb-2">
          <img
            src="/images/iconuser.webp"
            alt="icono de rol"
            className="self-center mr-5"
          />
          Usuario
        </label>
        <input
          id="user"
          type="text"
          name="user"
          className="border-white rounded-3xl border-[1px] bg-white bg-opacity-30 text-white h-10 pl-5 focus:outline-none focus:ring-2 focus:ring-main"
          value={formik.values.user}
          onChange={formik.handleChange}
        />
      </div>
      <div className="flex flex-col mb-14">
        <label
          htmlFor="password"
          className="flex font-medium text-lg pl-7 mb-2"
        >
          <img
            src="/images/iconpassword.webp"
            alt="icono de rol"
            className="self-center mr-5"
          />
          Clave
        </label>
        <input
          id="password"
          type="password"
          name="password"
          className="border-white rounded-3xl border-[1px] bg-white bg-opacity-30 text-white h-10 pl-5 focus:outline-none focus:ring-2 focus:ring-main"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </div>
      <button
        type="submit"
        className="rounded-3xl bg-white text-secondary h-10 w-full font-bold text-lg transition-[background, color] duration-500 hover:bg-main hover:text-white focus:outline-none focus:ring-2 focus:ring-main"
      >
        Login
      </button>
      {loader && (
        <div className="flex justify-center mt-5">
          <LoaderSpinner />
        </div>
      )}
    </form>
  );
};
