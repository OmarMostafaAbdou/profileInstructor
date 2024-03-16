import axiosInstance from "../Axios/interceptor";
import { useContext, useEffect, useState } from "react";
import img from "../assets/imgs/person.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPen } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useForm } from "react-hook-form";
import { Navigate, useLocation, useNavigate } from "react-router-dom/dist";
import { AuthContext } from "./context/AxiosProvider";

function Info() {
  const navigate = useNavigate();

  const { UserID } = useContext(AuthContext);

  const location = useLocation();
  const users = location.state;

  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const [userData, setUserData] = useState(null);
  const [hovering, setHovering] = useState(false);

  const goUpdate = () => {
    navigate("/update", { state: UserID });
  };
  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("imgURL", file);

    try {
      await axiosInstance.put(
        `http://localhost:4000/user/UserImg/${UserID}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `http://localhost:4000/user/${UserID}`
        );
        setUserData(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (UserID) {
      fetchData();
    }
  }, [UserID]);

  return (
    <div className="flex flex-col items-center mt-4 w-5/6 ml-[250px] justify-center">
      <div
        className="relative"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <img
          src={`http://localhost:4000/imgs/${userData && userData.imgURL}`}
          alt="User"
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4"
        />
        <label
          htmlFor="fileInput"
          className="absolute bottom-1 right-3 transform translate-x-1/2 -translate-y-1/2 cursor-pointer"
        >
          {hovering && (
            <FontAwesomeIcon
              icon={faImage}
              className="absolute bottom-1 right-3 transform translate-x-1/2 -translate-y-1/2 text-black rounded-full p-1 cursor-pointer"
              style={{ width: "1.5em", height: "1.5em" }}
              onClick={() => {
                console.log("Update image clicked");
              }}
            />
          )}
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
      </div>

      <div className="bg-white w-3/4 rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <FontAwesomeIcon
            icon={faPen}
            onClick={goUpdate}
            className="mr-2 cursor-pointer"
          />

          <h3 className="text-lg font-semibold">Personal Information</h3>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <span className="font-semibold">Name:</span>
            <span>{userData && userData.fullName}</span>
          </div>
          <div>
            <span className="font-semibold">Email: </span>
            <span>{userData && userData.Email}</span>
          </div>
          <div>
            <span className="font-semibold">Age: </span>
            <span>{userData && userData.age}</span>
          </div>
          <div>
            <span className="font-semibold">National ID: </span>
            <span>{userData && userData.nationalId}</span>
          </div>
          <div>
            <span className="font-semibold">Phone: </span>
            <span>{userData && userData.phone}</span>
          </div>
          <div>
            <span className="font-semibold">Role: </span>
            <span>{userData && userData.role}</span>
          </div>
          <div>
            <span className="font-semibold">Gender: </span>
            <span>{userData && userData.gender}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
