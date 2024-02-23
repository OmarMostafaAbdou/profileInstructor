import { useState } from "react";
import UploadFile from "./UploadFile";
import { useForm } from "react-hook-form";
import axios from "axios";

function AddCourses() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const [uploadedFile, setUploadedFile] = useState(null);
  const onsubmit = async (data) => {
    console.log(`formSubmitted `, data);

    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("level", data.level);
    formData.append("tags", data.tags);
    formData.append("duration", data.duration);
    // formData.append("created_at", data.created_at);

    if (uploadedFile) {
      formData.append("imgURL", uploadedFile);
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/course/addCourse",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleFileUpload = (file) => {
    console.log("Uploaded file:", file);

    setUploadedFile(file);
  };

  return (
    <div className="w-full m-auto px-6 mt-4 flex items-center justify-center">
      <form
        className=" shadow-md rounded px-8  bg-white w-6/12 m-auto	 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onsubmit)}
        noValidate
      >
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h1 className="text-base font-bold  text-gray-900">
              Add your Courses
            </h1>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="title"
                  className="block mb-2 text-md font-lg font-bold  text-gray-900 dark:text-white"
                >
                  course name
                </label>
                <input
                  {...register("title", {
                    required: {
                      value: true,
                      message: "course name is required",
                    },
                    minLength: {
                      value: 10,
                      message: "invalid course name (short name) ",
                    },
                  })}
                  type="text"
                  id="title"
                  autoComplete="title"
                  className="block w-full text-lg p-2 rounded-full border-[#49bbbd] border-2	border-solid	 bg-gray-300 focus:outline-none"
                  placeholder="your Course title"
                />

                <p className="text-[red] text-12 text-left">
                  {errors.title?.message}
                </p>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block mb-2 text-md font-lg font-bold  text-gray-900 dark:text-white"
                >
                  description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    rows={3}
                    className="block w-full text-lg p-2 rounded-2xl	 border-[#49bbbd] border-2	border-solid	 bg-gray-300 focus:outline-none"
                    {...register("description", {
                      required: {
                        value: true,
                        message: "course description is required",
                      },
                      minLength: {
                        value: 50,
                        message:
                          "Description must be at least 10 characters long",
                      },
                    })}
                  />
                </div>
                <p className="text-[red] text-12 text-left">
                  {errors.description?.message}
                </p>
              </div>

              <div className="col-span-full">
                <label
                  className="block mb-2 text-md font-lg font-bold  text-gray-900 dark:text-white"
                  htmlFor="imgURL"
                ></label>
                <UploadFile
                  onFileUpload={handleFileUpload}
                  handleSubmit={handleSubmit}
                />
              </div>
              <div className="col-span-full">
                <label
                  className="block mb-2 text-md font-lg font-bold  text-gray-900 dark:text-white"
                  htmlFor="enumData"
                >
                  Level
                </label>
                <select
                  {...register("level", {
                    required: "you must choose level of course",
                  })}
                  className={`block w-full text-lg p-2 rounded-full border-[#49bbbd] border-2	border-solid	 bg-gray-300 focus:outline-none`}
                  id="Level"
                  autoComplete="off"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
                <p className="text-[red] text-12 text-left">
                  {errors.level?.message}
                </p>
              </div>
              <div className="col-span-full">
                <label
                  className="block mb-2 text-md font-lg font-bold  text-gray-900 dark:text-white"
                  htmlFor="tags"
                >
                  Tags
                </label>

                <input
                  className="block w-full text-lg p-2 rounded-full border-[#49bbbd] border-2	border-solid	 bg-gray-300 focus:outline-none"
                  {...register("tags", {
                    required: {
                      value: true,
                      message: "course tag is required",
                    },
                  })}
                  type="text"
                  id="tags"
                />
                <p className="text-[red] text-12 text-left">
                  {errors.tags?.message}
                </p>
              </div>
              <div className="col-span-full">
                <label
                  className="block mb-2 text-md font-lg font-bold  text-gray-900 dark:text-white"
                  htmlFor="duration"
                >
                  duration (hours)
                </label>

                <input
                  {...register("duration", {
                    required: {
                      value: true,
                      message: "Duration is required",
                    },
                    validate: {
                      positiveNumber: (value) =>
                        parseFloat(value) > 0 ||
                        "Duration must be a positive number",
                    },
                  })}
                  className="block w-full text-lg p-2 rounded-full border-[#49bbbd] border-2	border-solid	 bg-gray-300 focus:outline-none"
                  type="number"
                  id="duration"
                />
                <p className="text-[red] text-12 text-left">
                  {errors.duration?.message}
                </p>
              </div>
              <div className="col-span-full">
                <label
                  className="block mb-2 text-md font-lg font-bold  text-gray-900 dark:text-white"
                  htmlFor="created_at"
                >
                  Date
                </label>
                <input
                  {...register("date", {
                    required: {
                      value: true,
                      message: "Date is required",
                    },
                    validate: {
                      notInPast: (value) => {
                        const selectedDate = new Date(value);
                        const currentDate = new Date();
                        return (
                          selectedDate >= currentDate ||
                          "Date cannot be in the past"
                        );
                      },
                    },
                  })}
                  type="date"
                  className="block w-full text-lg p-2 rounded-full border-[#49bbbd] border-2	border-solid	 bg-gray-300 focus:outline-none"
                  placeholder="Select date"
                  id="created_at"
                />
                <p className="text-red-500 text-sm mt-1">
                  {errors.date && errors.date.message}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-x-6">
          <button
            type="submit"
            className="rounded-xl p-4 bg-[#49bbbd] w-3/6  text-sm font-semibold text-white text-[20px] shadow-sm hover:bg-[#9ad8de] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-[#49bbbd]"
          >
            Add Courses
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCourses;
