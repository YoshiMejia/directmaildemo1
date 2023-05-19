import React, { useState } from 'react';
import DownloadButton from '@/components/DownloadButton';

const Form = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState('none');
  const [successfulConversion, setSuccessfulConversion] = useState(false);
  const [fileList, setFileList] = useState([]);

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('csv', selectedFile);
    formData.append('template', selectedTemplate);
    console.log('formData', formData);
    try {
      const response = await fetch('http://localhost:8000/convert', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error(
          `Failed to convert CSV file (${response.status} ${response.statusText})`
        );
      }
      const convertedData = await response.json();
      console.log(convertedData);
      setSuccessfulConversion(true);
      setFileList(convertedData);
      // check back if setFileList/fileList state values are needed now that download button is working, also check if ConvertedFiles component is needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div id="csv-form">
        <form onSubmit={handleSubmit}>
          <input type="file" accept=".csv" onChange={handleFileUpload} />
          <label htmlFor="template1">template1</label>
          <input
            type="checkbox"
            value="template1"
            onClick={(event) => setSelectedTemplate(event.target.value)}
          />
          <label htmlFor="template2">template2</label>
          <input
            type="checkbox"
            value="template2"
            onClick={(event) => setSelectedTemplate(event.target.value)}
          />
          <button type="submit">Convert</button>
        </form>
      </div>

      {successfulConversion && (
        <div>
          <DownloadButton />
        </div>
      )}
    </>
  );
};

export default Form;
