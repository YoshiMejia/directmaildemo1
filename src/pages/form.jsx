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
          <select
            value={selectedTemplate}
            onChange={(event) => setSelectedTemplate(event.target.value)}
          >
            <option value="none">Select a template</option>
            <option value="700v2">700v2</option>
            <option value="702v2">702v2</option>
            <option value="704v2">704v2</option>
            <option value="706v2">706v2</option>
            <option value="712v2">712v2</option>
            <option value="720v2">720v2</option>
            <option value="721v2">721v2</option>
            <option value="731v2">731v2</option>
            <option value="740v2">740v2</option>
            <option value="741v2">741v2</option>
          </select>
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
