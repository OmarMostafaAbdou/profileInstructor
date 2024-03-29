import React from "react";
import { Route, Routes } from "react-router-dom";
import SideNav from "./SideNav";
import Info from "./Info";
import AddCourses from "./AddCourses";
import AddLessons from "./AddLessons";
import AddQuiz from "./AddQuizzes";
import UpdateProfile from "./UpdateProfile";

function InstructorProfile() {
  return (
    <>
      <SideNav />
      <Routes>
        <Route path="/AddCourse" element={<AddCourses />} />
        <Route path="/AddLesson" element={<AddLessons />} />
        <Route path="/AddQuiz" element={<AddQuiz />} />
        <Route path="/profile" element={<Info />} />
        <Route path="/Update" element={<UpdateProfile />} />
      </Routes>

      {/* <UploadFile /> */}
    </>
  );
}

export default InstructorProfile;
