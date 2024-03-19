import { GlobalContext, intitialGlobal } from "./GlobalContext";
import GlobalList from "./GlobalList";

import "./App.css";

function App() {
  return (
    <>
      <GlobalContext.Provider value={[intitialGlobal]}>
        <GlobalList />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
