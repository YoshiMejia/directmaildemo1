import axios from 'axios';
import { saveAs } from 'file-saver';

const arrayBufferToBlob = (buffer) => {
  const blob = new Blob([buffer], { type: 'application/zip' });
  return blob;
};

export default async function handler(req, res) {
  const { folderName } = req.query;
  console.log('inside downloadConverted.js folderName:', folderName);
  try {
    const response = await axios.get(
      `http://localhost:8000/download_converted/${folderName}`,
      {
        responseType: 'arraybuffer',
      }
    );

    const blob = arrayBufferToBlob(response.data);

    // Trigger file download using FileSaver.js
    saveAs(blob, `${folderName}.zip`);

    // Log successful download
    console.log('ZIP file downloaded successfully');

    // Send response indicating success (optional)
    res.status(200).json({ message: 'ZIP file downloaded successfully' });
  } catch (error) {
    console.error('Error downloading ZIP file:', error);
    res.status(500).end();
  }
}
