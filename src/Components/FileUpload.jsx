import { useRef, useState } from "react";
import styles from "./FileUpload.module.css";

const FileUpload = ({ onFileUpload }) => {
  const inputRef = useRef();

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("select");

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  const clearFileInput = () => {
    inputRef.current.value = "";
    setSelectedFile(null);
    setUploadStatus("select");
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        setUploadStatus("uploading");

        const formData = new FormData();
        formData.append("file", selectedFile);

        setUploadStatus("done");
      } catch (error) {
        setUploadStatus("select");
      }
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      {!selectedFile && (
        <button className={styles["file-btn"]} onClick={onChooseFile}>
          Upload File
        </button>
      )}

      {selectedFile && (
        <>
          <div className={styles["file-card"]}>
            <span className={styles[("material-symbols-outlined", " icon")]}>
              description
            </span>

            <div className={styles["file-info"]}>
              <div style={{ flex: 1 }}>
                <h6>{selectedFile?.name}</h6>
              </div>

              {uploadStatus === "select" ? (
                <button onClick={clearFileInput}>
                  <span
                    className={
                      styles[("material-symbols-outlined", "close-icon")]
                    }
                  >
                    close
                  </span>
                </button>
              ) : (
                <div className={styles["check-circle"]}>
                  {uploadStatus === "uploading" ? (
                    <span>Uploading...</span>
                  ) : uploadStatus === "done" ? (
                    <span
                      className={styles["material-symbols-outlined"]}
                      style={{ fontSize: "20px" }}
                    >
                      check
                    </span>
                  ) : null}
                </div>
              )}
            </div>
          </div>
          <button className={styles["upload-btn"]} onClick={handleUpload}>
            {uploadStatus === "select" || uploadStatus === "uploading"
              ? "Upload"
              : "Done"}
          </button>
        </>
      )}
    </div>
  );
};

export default FileUpload;
