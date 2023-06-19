import React, { useState } from 'react';
import FileList from './components/FileList';
import FetchFilesButton from './components/FetchFilesButton';
import DownloadButton from './components/DownloadButton';
import DeleteButton from './components/DeleteButton';

const Previews = () => {
  const [viewFiles, setviewFiles] = useState(false);
  const [fileList, setFileList] = useState([]);

  const handleFilesFetched = (fetchedFiles) => {
    setFileList(
      fetchedFiles.reduce((acc, file) => {
        const content = file.content;
        return {
          ...acc,
          [file.filename]: content,
        };
      }, {})
    );
    setviewFiles(true);
  };

  return (
    <main className="flex flex-col items-center">
      <div className="cloud-img flex relative mt-20">
        <FetchFilesButton onFilesFetched={handleFilesFetched} />
        {viewFiles && (
          <>
            <div className="inline-flex">
              <div
                className="active:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-300 focus:rounded-lg mr-4 py-2 px-4
      rounded-full border-0
    font-semibold h-fit text-lg 
      bg-blue-100 text-blue-400
      hover:bg-violet-100 relative top-28 left-36 w-48"
              >
                <DownloadButton />
              </div>
              <div
                className="active:bg-red-200 focus:outline-none focus:ring focus:ring-red-300 focus:rounded-lg mr-4 py-2 px-4
      rounded-full border-0
    font-semibold h-fit text-lg 
      bg-red-100 text-red-400
      hover:bg-blue-100 relative top-28 left-36"
              >
                <DeleteButton />
              </div>
            </div>
            <FileList fileList={fileList} />
          </>
        )}
      </div>
    </main>
  );
};

export default Previews;
