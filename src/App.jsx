import { Route, Routes } from "react-router-dom";

import InstructorProfile from "./Components/InstructorProfile";
import Registration from "./Components/Registration";

// import UploadFile from "./Components/UploadFile";

function App() {
  return (
    <>
      <Registration />

      <InstructorProfile />
    </>
  );
}

export default App;
