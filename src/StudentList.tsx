import { StudentContext } from "./StudentContext";
import { useContext } from "react";

export const StudentList = () => {
  const students = useContext(StudentContext);

  return (
    <div>
      <ul>
        {students.map((s) => {
          return (
            <li className="peopleList">
              Name: {s.name}, Age:{s.age}, Hair: {s.hair ? "True" : "False"}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StudentList;
