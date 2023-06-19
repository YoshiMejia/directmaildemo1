const clearBucket = async () => {
  var confirmed = window.confirm('Are you sure you want to erase?');
  const fetchButton = document.getElementById('fetch-btn');

  if (confirmed) {
    try {
      const response = await fetch('http://localhost:8000/clear-bucket', {
        // const response = await fetch(
        //   'https://waconverter.us-west-1.elasticbeanstalk.com/clear-bucket',
        //   {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to clear bucket');
      }
      fetchButton.click();
      console.log('bucket cleared successfully');
    } catch (error) {
      console.error('Error clearing bucket:', error);
    }
  } else {
    console.log('Erase cancelled!');
  }
};

const DeleteButton = () => {
  return (
    <>
      <button id="deleteFiles-btn" onClick={clearBucket}>
        Clear Conversions
      </button>
    </>
  );
};

export default DeleteButton;
