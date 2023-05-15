import React from 'react';

const ConvertedFiles = ({ files }) => {
  return (
    <div>
      <h2>List of Converted Files:</h2>
      <ul>
        {files.map((file, index) => (
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
