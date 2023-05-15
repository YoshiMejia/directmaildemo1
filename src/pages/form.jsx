import React, { useState, useEffect } from 'react';

const Form = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState('none');
  const [successfulConversion, setSuccessfulConversion] = useState(false);

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    console.log('formData', formData);
    formData.append('csv', selectedFile);
    formData.append('template', selectedTemplate);
    try {
      const response = await fetch('http://localhost:8000/convert', {
        // const response = await fetch(
        //   'https://yoshimejia.github.io/directmaildemo/convert',
        //   {
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
      const fileList = await response.json();

      fileList.forEach((filePath) => {
        <a href={filePath} download>
          Download
        </a>;
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
  );
};

export default Form;
