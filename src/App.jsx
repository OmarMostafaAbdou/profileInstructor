import { Route, Routes } from "react-router-dom";
import AddCourses from "./Components/AddCourses";
import AddLessons from "./Components/AddLessons";
import AddQuizzes from "./Components/AddQuizzes";
import Info from "./Components/Info";
import SideNav from "./Components/SideNav";
import UploadFile from "./Components/UploadFile";

function App() {
  return (
    <>
      <SideNav />

      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/AddCourse" element={<AddCourses />} />
        <Route path="/AddLesson" element={<AddLessons />} />
        <Route path="/AddQuiz" element={<AddQuizzes />} />
        <Route path="/profile" element={<Info />} />
      </Routes>
      {/* <UploadFile /> */}
    </>
  );
}

export default App;
