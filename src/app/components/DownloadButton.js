import React from 'react';

const DownloadButton = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch(
        'http://localhost:8000/downloadfile'
        // 'http://localhost:8000/download_converted/converted'
        // 'http://waconverter.us-west-1.elasticbeanstalk.com/downloadfile'
      );
      if (!response.ok) {
        throw new Error('Failed to download ZIP file');
      }
      // Extract the file name from the Content-Disposition header
      const contentDisposition = response.headers.get('content-disposition');
      const filename = contentDisposition
        ? contentDisposition.match(/filename="(.+)"/)[1]
        : 'file.zip';
      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', filename);
      link.click();

      // Clean up the temporary URL
      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Error downloading ZIP file:', error);
    }
  };

  return (
    <>
      <button id="downloadFiles-btn" onClick={handleDownload}>
        Download Conversions
      </button>
    </>
  );
};

export default DownloadButton;
