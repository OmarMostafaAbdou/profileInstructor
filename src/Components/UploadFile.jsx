// UploadFile.js
import { useRef, useState } from "react";
import img from "../assets/imgs/upload.svg";
import "./UploadFile.css";
import { useForm } from "react-hook-form";
import { faCheck, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UploadFile({ onFileUpload }) {
  const fileInputRef = useRef(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const uploadFile = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const filename =
      file.name.length > 12
        ? `${file.name.substring(0, 13)}.... ${file.name.split(".")[1]}`
        : file.name;

    const fileSize =
      file.size < 1024
        ? `${file.size} KB`
        : `${(file.size / (1024 * 1024)).toFixed(2)} MB`;

    setUploadedFiles([...uploadedFiles, { name: filename, size: fileSize }]);
    onFileUpload(file);
  };

  return (
    <div className="upload-box">
      <p>Upload your File</p>
      <form>
        <input
          type="file"
          name="file"
          hidden
          ref={fileInputRef}
          onChange={uploadFile}
        />
        <div className="icon" onClick={handleFileInputClick}>
          <img src={img} alt="upload icon" />
        </div>
        <p>Browse File to upload</p>
      </form>

      <section className="uploaded-area">
        {uploadedFiles.map((file, index) => (
          <li className="row" key={index}>
            <div className="content upload">
              <FontAwesomeIcon icon={faFile} className="text-[#0000]" />
              <div className="details">
                <span className="name">{file.name}</span>
                <span className="size">{file.size}</span>
              </div>
            </div>
            <FontAwesomeIcon icon={faCheck} />
          </li>
        ))}
      </section>
    </div>
  );
}

export default UploadFile;
