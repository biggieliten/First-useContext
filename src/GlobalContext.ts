import { createContext } from "react";
import { initialStudents, Student } from "./StudentContext";
import { initialTeachers, Teacher } from "./TeacherContext";

import uuid from "react-uuid";

type Global = {
  students: Student[];
  teachers: Teacher[];
};

export const intitialGlobal: Global = {
  students: initialStudents,
  teachers: initialTeachers,
};

export const GlobalContext = createContext([] as Global[]);
