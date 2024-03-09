// import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../Axios/interceptor";
function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const location = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    axiosInstance
      .post("http://localhost:4000/user/login", data)
      .then((response) => {
        console.log(response);
        localStorage.setItem("userID", response.data.data.user._id);
      })
      .catch((error) => {
        console.error("Error sending form data:", error);
      });
    location("/profile");
  };
  console.log(getValues());

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* left */}
        <div className="bg md:w-1/3 flex bg-[#49bbbd9d] mx items-center  justify-center">
          <img
            src="src\assets\—Pngtree—knowledge tree pencil books stationery_4346186.png"
            alt=""
            className=" w-1/6 md:w-full rounded-lg"
          />
        </div>

        {/* right */}
        <div className="md:w-1/2 md:pl-8 flex justify-center">
          <div className="w-full md:w-3/4 bg-white rounded-lg p-8">
            <div className="text-center mb-6">
              <p>
                Welcome To{" "}
                <span className="text-teal-500 font-bold text-2xl">
                  Learnova
                </span>
              </p>
              <div className="flex justify-center rounded-full py-3 bg-[#49bbbd9d] items-center mt-4">
                <ul className="flex">
                  <li className="mr-4">
                    <Link
                      to="/Login"
                      className="text-gray-700 font-semibold hover:text-teal-500"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Register"
                      className="text-gray-700 p-3 w-5/12 rounded-full  bg-[#49bbbd9d] font-semibold hover:text-teal-500"
                    >
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center text-gray-700 text-sm mb-4">
              With <span className="text-teal-500 font-bold">Learnova</span>
              ... Explore boundless learning opportunities tailored just for
              you.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="loginForm">
              <div className="mb-6">
                <label
                  htmlFor="username"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  {...register("Email", {
                    required: "Email is required",
                    minLength: {
                      value: 3,
                      message: "Email must be at least 3 characters",
                    },
                  })}
                  className="w-full h-10 px-4 rounded-lg border border-gray-300 focus:border-teal-500 focus:outline-none"
                />
                {errors.username && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  {...register("Password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  className="w-full h-10 px-4 rounded-lg border border-gray-300 focus:border-teal-500 focus:outline-none"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="text-right mb-6">
                <a href="#" className="text-gray-700 font-semibold text-sm">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-500 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
