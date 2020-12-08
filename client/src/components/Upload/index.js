import react, { useState } from "react";
import API from "../../utils/API";
import "./style.css";

function Upload({ country, profile, setProfileState}) {
  console.log(country);
  console.log("hit upload");
  const [selectedFile, setSelectedFile] = useState();
  const [previewSource, setPreviewSource] = useState("");
  const [upload, setUpload] = useState(true);

  const handleChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    console.log(file);
    previewFile(file);
    setSelectedFile(file);
    setUpload(false);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (event) => {
    event.preventDefault();
    //checks to see if a file is set to upload if not return
    if (!selectedFile) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      //uploadImage(reader.result);
      if(profile){
        API.profilePicUpload({ data: reader.result})
        .then((res) => {
          console.log("upload success");
          setTimeout(function(){ window.location.href = "/profile"; }, 2000);
          
        })
        .catch((err) => {
          console.log(err);
        });
        setProfileState(false);
      }
      else{
        API.Upload({ data: reader.result, countryCode: country})
        .then((res) => {
          console.log("upload success");
        })
        .catch((err) => {
          console.log(err);
        });
      }
      //setFileInputState('');
      setPreviewSource("");
    };
    reader.onerror = () => {
      console.error("upload error");
    };
    setUpload(true);
  };

  const handleOffClick = (event) =>{
    event.preventDefault();
    console.log("off click")
    setProfileState(false);
}
  

  return (
    <div className="upload">
      {upload ? (
        <div className="container">
          <label for="fileInput" className="uploadbtn">
            {profile
            ? <>
              <h2 id="postbtnText">Update</h2>
            <button className = "offClick" onClick ={handleOffClick}><i className="material-icons material-icons-outlined" id="post">
                add
            </i></button>
            </>
            :<>
            <h2 id="postbtnText">Upload</h2>
            <i className="material-icons material-icons-outlined" id="post">
              add
              </i>
              </>
            }

          </label>
          <input
            id="fileInput"
            type="file"
            name="image"
            onChange={handleChange}
            className="form-input"
          />
        </div>
      ) : (
        <div className="imgSubmit">
          {previewSource && (
            <div className="imgContainer">
                <img
                className="imagePreview"
                src={previewSource}
                alt="chosen"
                style={{ height: "300px" }}
                />
            </div>
          )}
          <button className="submitBtn" type="submit" onClick={handleSubmitFile}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default Upload;
