function AddQuizzes() {
  return (
    <div className="w-full mx-auto px-6 mt-4 flex items-center justify-center">
      <form className=" shadow-md w-6/12 mx-auto bg-white rounded px-8 pt-6 pb-8 mb-4">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h1 className="text-base font-bold  text-gray-900">Make Quiz</h1>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                  htmlFor="questionText"
                  className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                >
                  questionText
                </label>
                <input
                  type="text"
                  name="questionText"
                  id="questionText"
                  className="block w-full text-lg p-2 rounded-lg bg-gray-300 focus:outline-none"
                  placeholder="questionText"
                />
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="option1"
                  className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                >
                  option1
                </label>
                <input
                  type="text"
                  name="option1"
                  id="option1"
                  className="block w-full text-lg p-2 rounded-lg bg-gray-300 focus:outline-none"
                  placeholder="option1"
                />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="option2"
                  className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                >
                  option2
                </label>
                <input
                  type="text"
                  name="option2"
                  id="option2"
                  className="block w-full text-lg p-2 rounded-lg bg-gray-300 focus:outline-none"
                  placeholder="option2"
                />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="option3"
                  className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                >
                  option3
                </label>
                <input
                  type="text"
                  name="option3"
                  id="option3"
                  className="block w-full text-lg p-2 rounded-lg bg-gray-300 focus:outline-none"
                  placeholder="option3"
                />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="option4"
                  className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                >
                  option4
                </label>
                <input
                  type="text"
                  name="option4"
                  id="option4"
                  className="block w-full text-lg p-2 rounded-lg bg-gray-300 focus:outline-none"
                  placeholder="option4"
                />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="correctOption"
                  className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                >
                  correctOption
                </label>
                <input
                  type="text"
                  name="correctOption"
                  id="correctOption"
                  className="block w-full text-lg p-2 rounded-lg bg-gray-300 focus:outline-none"
                  placeholder="correctOption"
                />
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

export default AddQuizzes;
