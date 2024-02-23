import "./SideNav.css";
import img from "../assets/imgs/person.png";
import { NavLink } from "react-router-dom";
function SideNav() {
  return (
    <>
      <div className="sidenav">
        <div className="profile">
          <img src={img} alt="" width="100" height="100" />
          <div className="name">Abdelrahman Abubakr</div>
        </div>
        <div className="sidenav-url">
          <div className="url">
            <NavLink to="/">Profile</NavLink>
            <hr align="center" />
          </div>
          <div className="url">
            <NavLink to="/AddCourse">ِAdd Courses</NavLink>
            <hr align="center" />
          </div>
          <div className="url">
            <NavLink to="/AddLesson">Add Lessons</NavLink>
            <hr align="center" />
          </div>
          <div className="url">
            <NavLink to="/AddQuiz">ِAdd Quizzes</NavLink>
            <hr align="center" />
          </div>
          <div className="url">
            <NavLink to="/MyCourses">MyCourses</NavLink>
            <hr align="center" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SideNav;
