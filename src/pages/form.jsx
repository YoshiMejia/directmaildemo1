import React, { useState } from 'react';
import DownloadButton from '@/pages/components/DownloadButton';
import DeleteButton from './components/DeleteButton';
import { NavHead } from '@/app/components/NavHead';

const Form = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState('none');
  const [successfulConversion, setSuccessfulConversion] = useState(false);
  const [viewForm, setViewForm] = useState(true);
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
        // const response = await fetch(
        //   'http://waconverter.us-west-1.elasticbeanstalk.com/convert',
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
      setSuccessfulConversion(true);
      handleViewForm();
      setFileList(convertedData);
      // check back if setFileList/fileList state values are needed now that download button is working, also check if ConvertedFiles component is needed
    } catch (error) {
      console.error(error);
    }
  };

  const handleViewForm = () => {
    setViewForm(!viewForm);
    setSuccessfulConversion(!successfulConversion);
  };
  return (
    <>
      <main className="flex font-mono flex-col items-center">
        {/* <NavHead /> */}
        {viewForm && (
          <div className="absolute z-10 top-96 text-blue-100 text-center text-xl w-450">
            <h2>Upload a CSV file and select a template from the list!</h2>
          </div>
        )}
        {successfulConversion && (
          <div className="absolute z-10 top-96 text-blue-100 text-center text-2xl w-450">
            <h2>Choose an option below</h2>
          </div>
        )}

        <div className="cloud-img flex relative mt-20">
          <div className="inset-0 flex items-center justify-center">
            {viewForm && (
              <div
                id="csv-form"
                className="bg-white rounded-lg p-2 space-x-4 relative top-24 left-20"
              >
                <form onSubmit={handleSubmit} className="border-2">
                  <input
                    type="file"
                    accept=".csv"
                    id="csv-input"
                    onChange={handleFileUpload}
                    className="inline-block rounded pl-2 pb-[6px] pt-2 w-60 file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-100 file:text-blue-400
      hover:file:bg-violet-100"
                  />
                  <select
                    className="pr-2"
                    value={selectedTemplate}
                    onChange={(event) =>
                      setSelectedTemplate(event.target.value)
                    }
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
                  <button
                    type="submit"
                    className="px-4 bg-stone-100 hover:bg-blue-50 active:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-300 focus:rounded-lg"
                    onClick={handleSubmit}
                  >
                    Convert
                  </button>
                </form>
              </div>
            )}
            {successfulConversion && (
              <div className="bg-white rounded-lg text-xl p-6 space-x-4 relative top-16 left-52">
                <DownloadButton />
                <DeleteButton />
                <button className="left-12 relative" onClick={handleViewForm}>
                  Convert more
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Form;
