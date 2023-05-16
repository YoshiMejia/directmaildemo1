import React from 'react';

const ConvertedFiles = ({ files }) => {
  console.log('inside ConvertedFiles looking at files:', files.convertedData);
  return (
    <div>
      <h2>List of Converted Files:</h2>
      <ul>
        {files.convertedData.map((file, index) => (
          <li key={index}>
            <a href={file.downloadUrl} download>
              {file.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConvertedFiles;
