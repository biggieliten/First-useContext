import { createContext } from "react";
import uuid from "react-uuid";

export type Student = {
  id: string;
  name: string;
  age: number;
  hair: boolean;
};

export const initialStudents: Student[] = [
  {
    id: uuid(),
    name: "Bosse",
    age: 45,
    hair: true,
  },
  {
    id: uuid(),
    name: "Dagny",
    age: 36,
    hair: true,
  },
  {
    id: uuid(),
    name: "Örjan",
    age: 75,
    hair: true,
  },
  {
    id: uuid(),
    name: "Robin",
    age: 40,
    hair: false,
  },
];
export const StudentContext = createContext([] as Student[]);
