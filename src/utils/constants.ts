export const ENV = {
  SERVER_HOST: import.meta.env.HOST || "http://",
  API_URL: import.meta.env.API_URL || "localhost:3000/api",
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
