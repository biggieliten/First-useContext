import { StudentContext } from "./StudentContext";
import { useContext, useRef } from "react";

export const StudentList = () => {
  const students = useContext(StudentContext);
  const allRef = useRef<HTMLInputElement>(null);
  const adultRef = useRef<HTMLInputElement>(null);
  const minorRef = useRef<HTMLInputElement>(null);

  const filteredStudents = students.filter((s) => {
    if (adultRef.current?.checked) {
      return s.age >= 18;
    } else if (minorRef.current?.checked) {
      return s.age < 18;
    } else if (allRef.current?.checked) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div>
      <fieldset>
        <input type="radio" name="All" ref={allRef} />
        <label htmlFor="Myndiga">Alla</label>
        <input type="radio" name="Myndiga" ref={adultRef} />
        <label htmlFor="Myndiga">Myndiga</label>
        <input type="radio" name="Omyndiga" ref={minorRef} />
        <label htmlFor="Myndiga">Omyndiga</label>
      </fieldset>
      <ul>
        {filteredStudents.map((s) => (
          <li className="peopleList">
            Name: {s.name}, Age:{s.age}, Hair: {s.hair ? "True" : "False"}
          </li>

          //   else if (s.)
        ))}
      </ul>
    </div>
  );
};
