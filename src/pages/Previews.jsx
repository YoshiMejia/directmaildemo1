import React, { useState } from 'react';
import FileList from './components/FileList';
import FetchFiles from './components/FetchFile';

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
        <FetchFiles onFilesFetched={handleFilesFetched} />
        {/* <div className="grid grid-cols-3  gap-4 max-w-7xl overflow-y-auto h-75 border-solid border-8 border-slate-400"> 
 <div className="image-container"> */}
        {viewFiles && (
          <>
            <FileList fileList={fileList} />
          </>
        )}
      </div>
    </main>
  );
};

export default Previews;
