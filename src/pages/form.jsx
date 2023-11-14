import React, { useState } from 'react';
import DownloadButton from '../app/components/DownloadButton';
import DeleteButton from '../app/components/DeleteButton';
import Link from 'next/link';
import MaxWidthWrapper from '../app/components/MaxWidthWrapper';
import Decoration from '../app/components/Decoration';

const Form = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState('none');
  const [successfulConversion, setSuccessfulConversion] = useState(false);
  const [viewForm, setViewForm] = useState(true);

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const validateForm = () => {
    const csvInput = document.getElementById('csv-input');
    const templateSelect = document.getElementById('template-select');
    const allowedExtensions = /(\.csv)$/i;
    const fileType = csvInput.value;

    if (csvInput.files.length !== 1) {
      alert('Please make sure to upload 1 CSV file, no more and no less!');
      return false; // Prevent form submission
    } else if (templateSelect.value === 'none') {
      alert('Please select a template.');
      return false; // Prevent form submission
    } else if (!allowedExtensions.exec(fileType)) {
      alert('Please upload a CSV file.');
      csvInput.value = '';
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    validateForm();
    const formData = new FormData();
    formData.append('csv', selectedFile);
    formData.append('template', selectedTemplate);
    console.log(formData);
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
      <MaxWidthWrapper className="mb-12 mt-28 sm:my-40 flex flex-col items-center justify-center text-center">
        <Decoration />
        <div className="min-h-[45vh]">
          {viewForm && (
            <div className=" mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 bg-white/50">
              <p className="text-sm font-semibold text-gray-700">
                Upload a CSV file and select a template from the list!
              </p>
            </div>
          )}
          {successfulConversion && (
            <div className=" mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 bg-white/50">
              <p className="text-sm font-semibold text-gray-700">
                Choose an option below
              </p>
            </div>
          )}
          {viewForm && (
            <form onSubmit={handleSubmit}>
              <div
                id="csv-form"
                className="bg-white rounded-lg p-2 space-x-4 relative top-16 w-[33rem] border-2 overflow-hidden"
              >
                <input
                  type="file"
                  accept=".csv"
                  id="csv-input"
                  onChange={handleFileUpload}
                  className="inline-block rounded pl-2 pb-[6px] pt-2 file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-100 file:text-blue-400
      hover:file:bg-violet-100 "
                  required
                />

                <select
                  className="pr-2 relative mt-4"
                  id="template-select"
                  value={selectedTemplate}
                  required
                  onChange={(event) => setSelectedTemplate(event.target.value)}
                >
                  <option value="none">Template</option>
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
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className=" active:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-300 focus:rounded-lg m-2 py-2 px-4
      rounded-full border-0
      text-sm font-semibold
      bg-blue-100 text-blue-400
      hover:bg-violet-100 relative"
                    onClick={handleSubmit}
                  >
                    Convert
                  </button>
                </div>
              </div>
            </form>
          )}
          {successfulConversion && (
            <div className="bg-white/75 rounded-lg text-xl p-6 relative top-16 w-80 left-1.5">
              <div className="border-b-4 border-violet-100">
                <DownloadButton />
              </div>
              <div className="border-b-4 text-center border-violet-100	">
                <Link href="/Previews">Preview Conversions</Link>
              </div>
              <div className="border-b-4 text-center border-violet-100	">
                <DeleteButton />
              </div>
              <div className="border-b-4 text-center border-violet-100	">
                <button onClick={handleViewForm}>Convert more</button>
              </div>
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Form;
