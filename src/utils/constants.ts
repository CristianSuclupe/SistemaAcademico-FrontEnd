export const ENV = {
  SERVER_HOST: import.meta.env.VITE_HOST,
  API_URL: import.meta.env.VITE_API_URL,
  ENDPOINTS: {
    AUTH: {
      LOGIN: "auth",
    },
    CLASS: "class",
    CLASS_TEACHER: "class/teacher",
    STUDENTS_PER_CLASS: "registration/class",
  },
  TOKEN: "token",
};
