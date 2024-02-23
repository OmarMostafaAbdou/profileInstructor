import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function AddLessons() {
  const [Val, setValue] = useState();
  useEffect(() => {
    axios.get("http://localhost:4000/course/all").then((val) => {
      setValue(val.data.data);
      console.log(val.data.data);
    });
  }, []);

  console.log(Val);
  return (
    <div className="w-full mx-auto px-6 mt-4 flex items-center justify-center">
      <form className=" shadow-md rounded w-6/12 mx-auto bg-white px-8 pt-6 pb-8 mb-4">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h1 className="text-base font-bold  text-gray-900">
              Add your Lessons
            </h1>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="course"
                  className="block mb-2 w-full text-md font-medium text-gray-900 dark:text-white"
                >
                  choose course
                </label>
                <select
                  data-te-select-init
                  className="bg-[#49bbbd] h-10 w-full"
                  id="course"
                >
                  {Val &&
                    Val.map((opts) => (
                      <option key={opts._id} value={opts._id}>
                        {opts.title}
                      </option>
                    ))}
                </select>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="title"
                  className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                >
                  title
                </label>
                <input
                  type="text"
                  name="Title"
                  id="title"
                  autoComplete="title"
                  className="block w-full text-lg p-2 rounded-lg bg-gray-300 focus:outline-none"
                  placeholder="your Course title"
                />
              </div>

              <div className="col-span-full">
                <label
                  className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  htmlFor="video"
                >
                  lesson video
                </label>
                <input
                  className="block w-full text-lg p-2 rounded-lg bg-gray-300 focus:outline-none"
                  type="file"
                  name="video"
                  id="video"
                />
              </div>
              <div className="col-span-full">
                <label
                  className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  htmlFor="AddImg"
                >
                  lesson document
                </label>
                <input
                  className="block w-full text-lg p-2 rounded-lg bg-gray-300 focus:outline-none"
                  type="file"
                  name="AddImg"
                  id="AddImg"
                />
              </div>
              <div className="col-span-full">
                <label
                  className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  htmlFor="duration"
                >
                  duration (hours)
                </label>
                <div className="flex flex-wrap">
                  <input
                    className="block w-full text-lg p-2 rounded-lg bg-gray-300 focus:outline-none"
                    type="number"
                    name="duration"
                    id="duration"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Lesson
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddLessons;
