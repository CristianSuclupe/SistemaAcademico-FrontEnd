import { authFetch } from "../utils/authFetch";
import { ENV } from "../utils/constants";
import { Token } from "./token";

const tokenController = new Token()
export class Registration {
    getStudentsPerClass = async (classId: string) => {
        try {
            const token = await tokenController.getToken()
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.STUDENTS_PER_CLASS}/${classId}`
            const params = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'aplication/json'
                }
            }
            const response = await authFetch(url, params)
            if(!response) return null
            const result = await response.json()
            return result
        }
        catch (error) {
            throw new Error();
        }
    }
}