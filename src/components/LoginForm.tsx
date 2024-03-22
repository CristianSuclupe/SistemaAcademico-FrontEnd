import { useFormik } from 'formik'
import { initialValues, validatioSchema } from '../utils/loginForm'
import { LoginData } from '../types/auth'

interface LoginFormProps {
  handleSubmit: (formData: LoginData) => void
}

export const LoginForm = ({ handleSubmit }: LoginFormProps) => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validatioSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      handleSubmit(formValues)
    }
  })
  return (
    <form onSubmit={formik.handleSubmit} className="w-[420px] text-white">
      <div className="flex flex-col">
        <label>Seleccione un rol</label>
        <select
          name="rol"
          value={formik.values.rol}
          className="border-white rounded-3xl border-[1px] bg-white bg-opacity-30 h-8"
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
      <div className="flex flex-col">
        <label>Usuario</label>
        <input
          type="text"
          name="user"
          className="border-white rounded-3xl border-[1px] bg-white bg-opacity-30 text-white h-8"
          value={formik.values.user}
          onChange={formik.handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label>Clave</label>
        <input
          type="password"
          name="password"
          className="border-white rounded-3xl border-[1px] bg-white bg-opacity-30 text-white h-8"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </div>
      <button
        type="submit"
        className="rounded-3xl bg-white text-black h-8 w-full"
      >
        Login
      </button>
    </form>
  )
}
