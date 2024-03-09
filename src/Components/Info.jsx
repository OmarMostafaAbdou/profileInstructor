import axiosInstance from "../Axios/interceptor";
import { useEffect, useState } from "react";
import img from "../assets/imgs/person.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useForm } from "react-hook-form";
import { useRouteLoaderData } from "react-router-dom/dist";

function Info() {
  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const userID = localStorage.getItem("userID");
  const [userData, setUserData] = useState(null);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  async function UpdateProfile(data) {
    console.log(data);
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("Email", data.Email);
    formData.append("Password", data.Password);
    formData.append("age", data.age);
    formData.append("phone", data.phone);
    formData.append("nationalId", data.nationalId);
    formData.append("gender", data.gender);

    console.log(formData);

    try {
      await axiosInstance.put(
        `http://localhost:4000/user/update/${userID}`,
        data
      );
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `http://localhost:4000/user/${userID}`
        );
        setUserData(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (userID) {
      fetchData();
    }
  }, [userID]);

  return (
    <div className="flex flex-col items-center mt-4  w-5/6 ml-[250px] justify-center">
      <img
        src={img}
        alt="User"
        className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4"
      />

      <div className="bg-white w-3/4 rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <FontAwesomeIcon
            icon={faPen}
            onClick={onOpenModal}
            className="mr-2 cursor-pointer"
          />
          <Modal open={open} onClose={onCloseModal} center>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto w-full max-w-md lg:py-0 sm:p-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Update Profile
                  </h1>
                  <form
                    className="space-y-4 md:space-y-6"
                    onSubmit={handleSubmit(UpdateProfile)}
                  >
                    <div>
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="fullName"
                      >
                        Name
                      </label>
                      <input
                        {...register("fullName", {
                          required: {
                            value: true,
                            message: "user name is required",
                          },
                          minLength: {
                            value: 8,
                            message: "invalid user name",
                          },
                        })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="fullName"
                        type="text"
                      />
                    </div>
                    <div>
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="email"
                      >
                        Your email
                      </label>
                      <input
                        {...register("Email", {
                          required: {
                            value: true,
                            message: "Email is required",
                          },
                        })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="email"
                        type="email"
                      />
                    </div>
                    <div>
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        {...register("Password", {
                          required: {
                            value: true,
                            message: "Password is required",
                          },
                          minLength: {
                            value: 8,
                            message: "invalid user name",
                          },
                        })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="password"
                        type="password"
                      />
                    </div>
                    <div>
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="age"
                      >
                        Age
                      </label>
                      <input
                        {...register("age", {
                          required: {
                            value: true,
                            message: "Age is required",
                          },
                        })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="age"
                        type="number"
                      />
                    </div>
                    <p>{errors.age?.message}</p>

                    <div>
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="phone"
                      >
                        Phone
                      </label>
                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="phone"
                        type="text"
                        {...register("phone", {
                          required: {
                            value: true,
                            message: "user name is required",
                          },
                          minLength: {
                            value: 11,
                            message: "phone number must be 11 number",
                          },
                          maxLength: {
                            value: 11,
                            message: "phone number must be 11 number",
                          },
                        })}
                      />
                    </div>

                    <div>
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="nationalId"
                      >
                        nationalId
                      </label>
                      <input
                        {...register("nationalId", {
                          required: {
                            value: true,
                            message: "nationalId is required",
                          },
                          minLength: {
                            value: 14,
                            message: "must Be 14 number",
                          },
                        })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="nationalId"
                        name="nationalId"
                        required
                        type="text"
                      />
                    </div>
                    <div>
                      <div>
                        <label
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          htmlFor="countries"
                        >
                          Gender
                        </label>
                        <select
                          {...register("gender", {
                            required: {
                              value: true,
                              message: "Gender is required",
                            },
                          })}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          id="countries"
                        >
                          <option selected>Choose Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                    </div>

                    <button
                      className="w-full text-white bg-[#49bbbd]
                       hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      type="submit"
                    >
                      Create an account
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Modal>
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
