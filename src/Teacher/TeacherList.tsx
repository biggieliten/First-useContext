import { TeacherContext } from "./TeacherContext";
import { useContext } from "react";

export const TeacherList = () => {
  const teachers = useContext(TeacherContext);

  return (
    <div>
      <ul>
        {teachers.map((t) => {
          return (
            <div className="peopleBox">
              <li className="peopleList">
                Name: {t.name}, Age: {t.age}, Class: {t.class}, Competence:
                {t.competence}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
