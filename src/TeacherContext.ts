import { createContext } from "react";
import uuid from "react-uuid";

export type Teacher = {
  id: string;
  name: string;
  age: number;
  class: string;
  competence: string[];
};

export const initialTeachers: Teacher[] = [
  {
    id: uuid(),
    name: "Lena",
    age: 41,
    class: "Biology",
    competence: ["Noble prize"],
  },
  {
    id: uuid(),
    name: "Robin",
    age: 40,
    class: "Städare",
    competence: ["Cleaning Certificate, ", "Ok at cleaning"],
  },
  {
    id: uuid(),
    name: "Kalle",
    age: 32,
    class: "Programming",
    competence: [""],
  },
  {
    id: uuid(),
    name: "Yngve",
    age: 37,
    class: "English",
    competence: ["Poetry Award 2011"],
  },
];

export const TeacherContext = createContext([] as Teacher[]);
