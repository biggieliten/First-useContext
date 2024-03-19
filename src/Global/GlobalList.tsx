import { GlobalContext } from "./GlobalContext";
import { useContext } from "react";
import { initialStudents } from "../Student/StudentContext";

export const GlobalList = () => {
  const global = useContext(GlobalContext);

  return (
    <>
      <ul>
        {global.map((g) => {
          return (
            <>
              {g.students.map((s) => (
                <>
                  <li>Student: {s.name}</li>
                  <li>Age: {s.age}</li>
                  <li>Hair: {s.hair ? "Har hår" : "Bold"}</li>
                  <br />
                </>
              ))}

              <br />
              {g.teachers.map((t) => (
                <>
                  <b>
                    <li>Teacher: {t.name}</li>
                  </b>
                  <b>
                    <li>Age: {t.age}</li>
                  </b>
                  <li>Class: {t.class}</li>
                  <i>
                    <li>Competence: {t.competence}</li>
                  </i>
                  <br />
                </>
              ))}
            </>
          );
        })}
      </ul>
    </>
  );
};

export default GlobalList;
