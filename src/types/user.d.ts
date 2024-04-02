export interface User {
  id: string;
  name: string;
  surname: string;
  email?: string;
  cellPhone?: string;
  dateOfBirth?: Date;
  genre?: string;
  dni: string;
  rol?: string;
  createdAt?: number;
  updatedAt?: number;
}
