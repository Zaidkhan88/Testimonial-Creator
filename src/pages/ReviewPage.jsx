import React from 'react';
import { ReviewForm } from '../components/index';
import { useParams } from 'react-router-dom';

function ReviewPage() {
  const { reviewLink } = useParams();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Review Form */}
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Submit Your Review
        </h1>
        <ReviewForm reviewLink={reviewLink} />
      </div>
    </div>
  );
}

export default ReviewPage;
