import { ICourse } from './course';
import { ITeacher } from './teacher';

export interface IClass {
  id: string;
  state: boolean;
  currentAmount: number;
  maximumCapacity: 20;
  deadLine: Date;
  schedule: Date;
  createdAt: Date;
  updatedAt: Date;
  teacher: ITeacher;
  course: ICourse;
}
