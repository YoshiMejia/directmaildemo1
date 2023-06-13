const FileList = ({ fileList }) => {
  if (!fileList) {
    return <div>No files to show.</div>;
  }

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
        <div>No files to show.</div>
      )}
    </div>
  );
};

export default FileList;
