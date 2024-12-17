import React from 'react';
import { useParams } from 'react-router-dom';
import { RetrievedTestimonials } from '../components/index';

function AllTestimonialsPage() {
  const { testLink } = useParams();

  // Optional: Handle case if testLink is not provided or invalid
  if (!testLink) {
    return <div className="text-center text-xl text-red-500">No test link found!</div>;
  }

  return (
    <div className="container mx-auto p-6">
      {/* Fetch and display testimonials */}
      <h2 className="text-2xl font-semibold text-center mb-4">All Testimonials for {testLink}</h2>
      <RetrievedTestimonials testLink={testLink} />
    </div>
  );
}

export default AllTestimonialsPage;
