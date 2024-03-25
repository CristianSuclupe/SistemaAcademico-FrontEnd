import { authFetch } from '../utils/authFetch';
import { ENV } from '../utils/constants';
import { Token } from './token';

const tokenController = new Token();
export class Class {
  getByTeacher = async (teacherId: string) => {
    try {
      const token = await tokenController.getToken();
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CLASS_TEACHER}/${teacherId}`;
      const params = {
        headers: {
          Authorization: `Bearer ${token}`, // Pasa el token en el encabezado Authorization
          'Content-Type': 'application/json'
        }
      };
      const response = await authFetch(url, params);
      if (!response) return null;
      const result = await response.json();
      return result;
    } catch (error) {
      throw new Error();
    }
  };
}
