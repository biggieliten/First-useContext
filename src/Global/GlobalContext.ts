import { createContext } from "react";
import { initialStudents, Student } from "../Student/StudentContext";
import { initialTeachers, Teacher } from "../Teacher/TeacherContext";

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
