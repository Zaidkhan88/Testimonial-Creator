import React from 'react';

function ReviewTemplate({ reviews }) {
  const maxStars = 5;

  // Function to render stars based on the rating
  const renderStars = (rating) => {
    return Array.from({ length: maxStars }, (_, index) => {
      const starColor = index < rating ? 'text-yellow-500' : 'text-gray-500';
      return (
        <span key={index} className={`ml-1 text-2xl ${starColor}`}>
          ★
        </span>
      );
    });
  };

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {reviews.map((review, index) => (
        <div
          key={index} // Consider using a unique id from review, like review.id
          className="rounded-md p-6 w-full md:w-1/3 border border-gray-300 flex flex-col items-start"
        >
          <h1 className="font-bold text-xl mb-2">Testimonial</h1>
          <div className="flex items-center mb-4">{renderStars(review.rating)}</div>
          <div className="mt-5 p-2 rounded-md border border-gray-300 w-full">
            <p>{review.answers}</p>
          </div>
          <p className="text-right mt-2 text-sm font-semibold">- {review.Name}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewTemplate;
