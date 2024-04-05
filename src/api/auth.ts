import { LoginData } from "../types/auth";
import { ENV } from "../utils/constants";

export class Auth {
  login = async (data: LoginData) => {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.LOGIN}`;
      console.log(url);
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      console.log(params);
      const response = await fetch(url, params);
      if (!response) return null;
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      throw new Error();
    }
  };
}
