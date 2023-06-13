const FetchFiles = ({ onFilesFetched }) => {
  const fetchFileData = () => {
    fetch('http://localhost:8000/converted/success')
      .then((response) => response.json())
      .then((data) => onFilesFetched(data.files))
      .catch((error) => console.error('Error fetching file data:', error));
  };

  return (
    <div>
      <button onClick={fetchFileData}>Fetch File Data</button>
    </div>
  );
};

export default FetchFiles;
