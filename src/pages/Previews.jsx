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
      <div className="flex items-center justify-center py-10 text-2xl font-mono relative -left-4">
        <FetchFiles onFilesFetched={handleFilesFetched} />
      </div>

      {/* <div className="grid grid-cols-3  gap-4 max-w-7xl overflow-y-auto h-75 border-solid border-8 border-slate-400"> 
 <div className="image-container"> */}
      {viewFiles && (
        <div className="overflow-y-auto h-75 border-solid border-8 border-slate-400">
          <div>
            <FileList fileList={fileList} />
          </div>
        </div>
      )}
    </main>
  );
};

export default Previews;
