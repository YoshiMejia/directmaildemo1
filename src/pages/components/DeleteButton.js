const clearBucket = async () => {
  try {
    const response = await fetch('http://localhost:8000/clear-bucket', {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to clear the S3 bucket');
    }

    console.log('S3 bucket cleared successfully');
  } catch (error) {
    console.error('Error clearing the S3 bucket:', error);
  }
};

const DeleteButton = () => {
  return (
    <div className="border-b-4">
      <button onClick={clearBucket}>Clear S3 Bucket</button>
    </div>
  );
};

export default DeleteButton;
