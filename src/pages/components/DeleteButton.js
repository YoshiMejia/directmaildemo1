const clearBucket = async () => {
  try {
    // const response = await fetch('http://localhost:8000/clear-bucket', {
    const response = await fetch(
      'http://waconverter.us-west-1.elasticbeanstalk.com/clear-bucket',
      {
        method: 'DELETE',
      }
    );

    if (!response.ok) {
      throw new Error('Failed to clear bucket');
    }

    console.log('bucket cleared successfully');
  } catch (error) {
    console.error('Error clearing bucket:', error);
  }
};

const DeleteButton = () => {
  return (
    <div className="border-b-4">
      <button onClick={clearBucket}>Clear conversions</button>
    </div>
  );
};

export default DeleteButton;
