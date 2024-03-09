import { useCallback, useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../Axios/interceptor";
import { useDropzone } from "react-dropzone";
import ProgressBar from "@ramonak/react-progress-bar";

function AddLessons() {
  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const [Val, setValue] = useState();
  const [Video, setVideo] = useState(null);
  const [document, setDocument] = useState(null);
  const [selectedVideoName, setSelectedVideoName] = useState("");
  const [selectedDocumentName, setSelectedDocumentName] = useState("");
  const [videoUploadProgress, setVideoUploadProgress] = useState(0);
  const [documentUploadProgress, setDocumentUploadProgress] = useState(0);
  useEffect(() => {
    axiosInstance.get("http://localhost:4000/course/all").then((val) => {
      setValue(val.data.data);
    });
  }, []);

  const onDropVideo = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setVideo(acceptedFiles[0]);
    setSelectedVideoName(acceptedFiles[0].name);
    simulateUploadProgress(acceptedFiles[0].size, setVideoUploadProgress);
  }, []);

  const onDropDocument = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);

    setDocument(acceptedFiles[0]);
    setSelectedDocumentName(acceptedFiles[0].name);
    simulateUploadProgress(acceptedFiles[0].size, setDocumentUploadProgress);
  }, []);
  const simulateUploadProgress = (fileSize, setProgress) => {
    const bytesPerSecond = 1048576;
    const durationInSeconds = fileSize / bytesPerSecond;
    const intervalTime = 100;
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += (intervalTime / (durationInSeconds * 1000)) * 100;
      const simulatedProgress = Math.min(100, currentProgress);
      setProgress(Math.round(simulatedProgress));
      if (simulatedProgress === 100) {
        clearInterval(interval);
      }
    }, intervalTime);
  };
  const {
    getRootProps: getVideoRootProps,
    getInputProps: getVideoInputProps,
    isDragActive: isVideoDragActive,
  } = useDropzone({ onDrop: onDropVideo });
  const {
    getRootProps: getDocumentRootProps,
    getInputProps: getDocumentInputProps,
    isDragActive: isDocumentDragActive,
  } = useDropzone({ onDrop: onDropDocument });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("CourseID", data.CourseID);
    formData.append("title", data.title);
    formData.append("video", Video);
    formData.append("document", document);
    formData.append("duration", data.duration);

    axiosInstance
      .post("http://localhost:4000/lesson/addlesson", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((val) => {
        console.log(val);
        reset();
      });
  };

  function Reset() {
    reset();
  }
  return (
    <div className="w-full mx-auto px-6 mt-4 flex items-center justify-center">
      <form
        className=" shadow-md rounded w-full md:w-6/12 mx-auto bg-white px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h1 className="text-base font-bold  text-gray-900">
              Add your Lessons
            </h1>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full sm:col-span-6">
                <label
                  htmlFor="courseID"
                  className="block mb-2 text-md font-lg font-bold  text-gray-900 dark:text-white"
                >
                  choose course
                </label>
                <select
                  data-te-select-init
                  className="block w-full text-lg p-2 rounded-full border-[#49bbbd] border-2	border-solid	 bg-gray-300 focus:outline-none"
                  id="courseID"
                  {...register("CourseID", {
                    required: "you must choose your course",
                  })}
                >
                  {Val &&
                    Val.map((opts) => (
                      <option key={opts._id} value={opts._id}>
                        {opts.title}
                      </option>
                    ))}
                </select>
                <p className="text-[red] text-12 text-left">
                  {errors.courseID?.message}
                </p>
              </div>
              <div className="col-span-full sm:col-span-6">
                <label
                  htmlFor="title"
                  className="block mb-2 text-md font-lg font-bold  text-gray-900 dark:text-white"
                >
                  lesson name
                </label>
                <input
                  {...register("title", {
                    required: " lesson name is required",
                    minLength: {
                      value: 8,
                      message: "invalid lesson name (short name)",
                    },
                  })}
                  type="text"
                  id="title"
                  className="block w-full text-lg p-2 rounded-full border-[#49bbbd] border-2	border-solid	 bg-gray-300 focus:outline-none"
                  placeholder="your Course title"
                />
                <p className="text-[red] text-12 text-left">
                  {errors.title?.message}
                </p>
              </div>

              <div className="col-span-full sm:col-span-6">
                <label
                  htmlFor="Video"
                  className="block mb-2 text-md font-lg font-bold  text-gray-900 dark:text-white"
                >
                  Choose Video
                </label>
                <div
                  {...getVideoRootProps()}
                  className="border-2 border-dashed rounded-full border-[#49bbbd] p-4 text-center"
                >
                  <input id="Video" {...getVideoInputProps()} />
                  {isVideoDragActive ? (
                    <p className="text-[#49bbbd]">
                      {selectedVideoName || "Drop Course video"}
                    </p>
                  ) : (
                    <p className="text-[#49bbbd]">
                      {selectedVideoName
                        ? selectedVideoName
                        : "Drag Course Video"}
                    </p>
                  )}
                </div>
                <ProgressBar
                  className="mt-2"
                  bgColor="#252641"
                  completed={videoUploadProgress}
                />
                ;
              </div>
              <div className="col-span-full sm:col-span-6">
                <label
                  htmlFor="Document"
                  className="block mb-2 text-md font-lg font-bold  text-gray-900 dark:text-white"
                >
                  Choose Document
                </label>
                <div
                  {...getDocumentRootProps()}
                  className="border-2 border-dashed rounded-full border-[#49bbbd] p-4 text-center"
                >
                  <input id="Document" {...getDocumentInputProps()} />
                  {isDocumentDragActive ? (
                    <p className="text-[#49bbbd]">
                      {selectedDocumentName || "Drop Course document"}
                    </p>
                  ) : (
                    <p className="text-[#49bbbd]">
                      {selectedDocumentName
                        ? selectedDocumentName
                        : "Drag Course Document"}
                    </p>
                  )}
                </div>
                {errors.document && (
                  <p className="text-red-500">
                    Please select a valid file type
                  </p>
                )}
                <ProgressBar
                  className="mt-2"
                  completed={documentUploadProgress}
                  bgColor="#252641"
                />
                ;
              </div>
              <div className="col-span-full sm:col-span-6">
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
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={Reset}
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
