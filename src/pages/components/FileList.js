const FileList = ({ fileList }) => {
  const openHtmlPreview = (filename) => {
    const htmlContent = fileList[filename];
    const newWindow = window.open('', '_blank');
    newWindow.document.write(htmlContent);
    newWindow.document.close();
  };

  return (
    <div>
      {Object.keys(fileList).length > 0 ? (
        <ul className="w-96">
          {Object.entries(fileList).map(([filename, content]) => (
            <li
              key={filename}
              className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50"
            >
              <a href="#" onClick={() => openHtmlPreview(filename)}>
                {filename}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        console.log('No files to display.')
      )}
    </div>
  );
};

export default FileList;

// import React, { useState } from 'react';

// const FileList = () => {
//   const [fileData, setFileData] = useState({});

//   const fetchFileData = () => {
//     fetch('http://localhost:8000/converted/success')
//       .then((response) => response.json())
//       .then((data) =>
//         setFileData(
//           data.files.reduce((acc, file) => {
//             const content = file.content;
//             return {
//               ...acc,
//               [file.filename]: content,
//             };
//           }, {})
//         )
//       )
//       .catch((error) => console.error('Error fetching file data:', error));
//   };

//   const openHtmlPreview = (filename) => {
//     const htmlContent = fileData[filename];
//     const newWindow = window.open('', '_blank');
//     newWindow.document.write(htmlContent);
//     newWindow.document.close();
//   };

//   return (
//     <div>
//       <h1>Converted Files</h1>
//       <button onClick={fetchFileData}>Preview conversions</button>
//       {Object.keys(fileData).length > 0 ? (
//         <ul>
//           {Object.entries(fileData).map(([filename, content]) => (
//             <li key={filename}>
//               <a href="#" onClick={() => openHtmlPreview(filename)}>
//                 {filename}
//               </a>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         console.log('no files to display')
//       )}
//     </div>
//   );
// };

// export default FileList;
