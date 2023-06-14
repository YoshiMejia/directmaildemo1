const FileList = ({ fileList }) => {
  if (!fileList) {
    return <h1 className="font-mono">There are currently no files to show.</h1>;
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
        <div className="bg-white z-20 rounded-lg p-2 space-x-4 relative top-28 h-fit -left-12 w-80 border-2 overflow-hidden">
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
        </div>
      ) : (
        <div className="bg-white z-20 rounded-lg relative border-2 h-fit top-60 p-6 -left-24">
          <h1 className="font-mono text-xl">
            There are currently no files to show.
          </h1>
        </div>
      )}
    </div>
  );
};

export default FileList;
