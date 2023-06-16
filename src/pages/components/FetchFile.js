const FetchFiles = ({ onFilesFetched }) => {
  const fetchFileData = () => {
    // fetch('http://localhost:8000/converted/success')
    fetch('https://waconverter.us-west-1.elasticbeanstalk.com/clear-bucket')
      .then((response) => response.json())
      .then((data) => onFilesFetched(data.files))
      .catch((error) => console.error('Error fetching file data:', error));
  };

  return (
    <div className="h-fit">
      <button
        onClick={fetchFileData}
        className="active:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-300 focus:rounded-lg mr-4 py-2 px-4
      rounded-full border-0
    font-semibold h-fit text-2xl 
      bg-blue-100 text-blue-400
      hover:bg-violet-100 relative left-56 top-64 z-0"
      >
        Fetch File Data
      </button>
    </div>
  );
};

export default FetchFiles;
