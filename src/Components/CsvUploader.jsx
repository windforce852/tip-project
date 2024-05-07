import { useState } from 'react'
import Dropzone from 'react-dropzone';
import { Button, styled } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const CsvUploader = () => {
  const [file, setFile] = useState(null);
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onFileChange = event => {
    setFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("file", file);

    const xhr = new XMLHttpRequest();
    
    // Progress event listener
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentCompleted = Math.round((event.loaded * 100) / event.total);
        setUploadPercentage(percentCompleted);
      }
    };

    // XHR completed successfully
    xhr.onload = () => {
      console.log('File uploaded successfully', xhr.responseText);
      setUploadPercentage(0); // Reset the progress bar after upload
    };

    // XHR failed
    xhr.onerror = () => {
      console.error('Error uploading file');
      setUploadPercentage(0); // Reset the progress bar on error
    };

    // Open and send the request
    xhr.open("POST", "YOUR_API_URL", true);
    xhr.send(formData);
  };

  // const VisuallyHiddenInput = styled('input')({
  //   clip: 'rect(0 0 0 0)',
  //   clipPath: 'inset(50%)',
  //   height: 1,
  //   overflow: 'hidden',
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   whiteSpace: 'nowrap',
  //   width: 1,
  // });

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>
        Upload
      </button>
      {/* <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        onClick={onFileUpload}
      >
        Upload file
        <VisuallyHiddenInput type="file" />
      </Button> */}
      {uploadPercentage > 0 && <progress value={uploadPercentage} max="100">{uploadPercentage}%</progress>}
    </div>
  );
}

export default CsvUploader;
