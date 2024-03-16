import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../Axios/interceptor";
import { useForm } from "react-hook-form";

function UpdateProfile() {
  const navigate = useNavigate();

  const location = useLocation();
  const userID = location.state;
  console.log(userID);

  const {
    register,

    handleSubmit,

    formState: { errors },
  } = useForm();
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

    try {
      const response = await axiosInstance.put(
        `http://localhost:4000/user/update/${userID}`,
        data
      );

      alert(response.data.message);
      navigate("/profile");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  }

  return (
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
  );
}

export default UpdateProfile;
