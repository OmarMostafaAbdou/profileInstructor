import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBook,
  faChalkboard,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

import img from "../assets/imgs/person.png";

function SideNav() {
  return (
    <div className="bg-[#252641] fixed w-[350px] h-full md:w-[250px] transition-all delay-50 ease-in-out">
      <div className="mb-30 text-center">
        <img
          src={img}
          className="block w-[150px] h-[150px] rounded-full mx-auto"
        />
        <h1 className="text-white my-10 font-bold ml-5 mr-0">Omar mostafa</h1>
      </div>

      <ul className="flex-1">
        <li>
          <NavLink
            to="/profile"
            className="block py-4 px-6 text-white border-b border-solid border-sky-400 hover:bg-[#7bb3ff] transition duration-300"
          >
            <FontAwesomeIcon icon={faAddressCard} className="mr-2" />
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/AddCourse"
            className="block py-4 px-6 text-white border-b border-solid border-sky-400 hover:bg-[#7bb3ff] transition duration-300"
          >
            <FontAwesomeIcon icon={faBook} className="mr-2" />
            Add Course
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/AddLesson"
            className="block py-4 px-6 text-white border-b border-solid border-sky-400 hover:bg-[#7bb3ff] transition duration-300"
          >
            <FontAwesomeIcon icon={faChalkboard} className="mr-2" />
            Add Lesson
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/AddQuiz"
            className="block py-4 px-6 text-white border-b border-solid border-sky-400 hover:bg-[#7bb3ff] transition duration-300"
          >
            <FontAwesomeIcon icon={faCircleQuestion} className="mr-2" />
            Add Quiz
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
