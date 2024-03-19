import { GlobalContext, intitialGlobal } from "./Global/GlobalContext";
import SearchTeacher from "./Teacher/SearchTeacher";
import { StudentList } from "./Student/StudentList";

// import GlobalList from "./Global/GlobalList";

import "./App.css";
import { StudentContext, initialStudents } from "./Student/StudentContext";

function App() {
  return (
    <>
      <GlobalContext.Provider value={[intitialGlobal]}>
        <SearchTeacher />
        {/* <GlobalList /> */}
      </GlobalContext.Provider>

      <StudentContext.Provider value={initialStudents}>
        <StudentList />
      </StudentContext.Provider>
    </>
  );
}

export default App;
