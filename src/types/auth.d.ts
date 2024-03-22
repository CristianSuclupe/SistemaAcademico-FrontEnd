export interface LoginData {
  rol: string;
  user: string;
  password: string;
}

export interface AuthContextProps {
  accessToken: string | null;
  user: UserData | null;
  login: (token: string) => null | undefined;
  logout: () => void;
}
