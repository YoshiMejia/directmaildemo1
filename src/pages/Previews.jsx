import React, { useState } from 'react';
import FileList from '../app/components/FileList';
import FetchFilesButton from '../app/components/FetchFilesButton';
import DownloadButton from '../app/components/DownloadButton';
import DeleteButton from '../app/components/DeleteButton';
import MaxWidthWrapper from '../app/components/MaxWidthWrapper';
import Decoration from '../app/components/Decoration';

const Previews = () => {
  const [viewFiles, setviewFiles] = useState(false);
  const [fileList, setFileList] = useState([]);

  const handleFilesFetched = (fetchedFiles) => {
    const sortedFiles = fetchedFiles.sort((a, b) => {
      const regex = /-(\d+)-/;
      const numA = Number(a.filename.match(regex)[1]);
      const numB = Number(b.filename.match(regex)[1]);
      return numA - numB;
    });

    const updatedFileList = sortedFiles.reduce((acc, file) => {
      const content = file.content;
      return {
        ...acc,
        [file.filename]: content,
      };
    }, {});
    setFileList(updatedFileList);
    setviewFiles(true);
  };

  return (
    <MaxWidthWrapper className="mb-12 mt-28 sm:my-40 flex flex-col items-center justify-center text-center">
      <Decoration />
      <main className="min-h-[45vh]">
        <div className="">
          <div className=" mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 bg-white/50">
            <p className="text-sm font-semibold text-gray-700">
              Press the button below to see what conversions you currently have
              stored!
            </p>
          </div>
          <FetchFilesButton onFilesFetched={handleFilesFetched} />
          {viewFiles && (
            <>
              <div id="preview-files">
                <div className="inline-flex m-8">
                  <div
                    className="active:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-300 focus:rounded-lg mr-4 py-2 px-4
      rounded-full border-0
    font-semibold h-fit text-lg 
      bg-blue-100 text-blue-400
      hover:bg-blue-300 relative "
                  >
                    <DownloadButton />
                  </div>
                  <div
                    className="active:bg-red-200 focus:outline-none focus:ring focus:ring-red-300 focus:rounded-lg mr-4 py-2 px-4
      rounded-full border-0
    font-semibold h-fit text-lg 
      bg-red-100 text-red-400
      hover:bg-red-300 relative"
                  >
                    <DeleteButton />
                  </div>
                </div>
                <FileList fileList={fileList} />
              </div>
            </>
          )}
        </div>
      </main>
    </MaxWidthWrapper>
  );
};

export default Previews;
