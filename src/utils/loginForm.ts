import * as Yup from 'yup'

export const initialValues = () => {
  return {
    rol: '',
    user: '',
    password: ''
  }
}

export const validatioSchema = () => {
  return Yup.object({
    rol: Yup.string().required('Este campo es obligatorio'),
    user: Yup.string().required('Este campo es obligatorio'),
    password: Yup.string().required('Este campo es obligatorio')
  })
}
