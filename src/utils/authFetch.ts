import { Token } from '../api/token';

interface Props {
  url: string;
  params?: {
    headers?: Record<string, string>;
  };
}

export const authFetch = async ({ url, params }: Props) => {
  const tokenController = new Token();
  const token = tokenController.getToken();

  const logout = () => {
    tokenController.removeToken();
    window.location.replace('/');
  };

  if (!token) logout();
  else {
    const paramsTemp = {
      ...params,
      headers: {
        ...params?.headers,
        Authorization: `${token}`
      }
    };
    try {
      return await fetch(url, paramsTemp);
    } catch (error) {
      throw new Error();
    }
  }
};
