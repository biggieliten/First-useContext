import { useRef, useState } from "react";
import { initialTeachers } from "./TeacherContext";
import { Teacher } from "./TeacherContext";

const SearchTeacher = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [teacher, setTeacher] = useState<Teacher[]>([]);
  const handleSearch = () => {
    const searchedTeacher = initialTeachers.filter(
      (t: Teacher) => t.name === inputRef.current?.value
    );
    setTeacher(searchedTeacher);
    console.log(searchedTeacher);
  };

  const displayTeacher = () => {
    return (
      <>
        <ul>
          {teacher.map((t) => {
            return (
              <>
                <li>Name: {t.name}</li>
                <li>Age: {t.age}</li>
                <li>Class: {t.class}</li>
                <li>Competence: {t.competence}</li>
              </>
            );
          })}
        </ul>
      </>
    );
  };
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={() => handleSearch()}>Search</button>
      {displayTeacher()}
    </>
  );
};

export default SearchTeacher;
