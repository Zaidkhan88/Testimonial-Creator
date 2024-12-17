import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { ReviewTemplate } from './index';

function RetrievedTestimonials({ testLink }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  useEffect(() => {
    async function fetchData() {
      setLoading(true); // Set loading to true when starting the fetch
      setError(null); // Reset any previous errors
      try {
        if (testLink) {
          const data = await appwriteService.retrieveDocs(testLink);
          console.log(data.documents, 'data from db');
          setReviews(data.documents);
        } else {
          setError('Test link not found.');
        }
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setError('Failed to load testimonials.');
      } finally {
        setLoading(false); // Set loading to false once fetch is complete
      }
    }
    fetchData();
  }, [testLink]);

  // Return the loading state
  if (loading) {
    return (
      <div className="text-center text-xl text-gray-500">Loading...</div>
    );
  }

  // Return error state if there is an error
  if (error) {
    return (
      <div className="text-center text-xl text-red-500">{error}</div>
    );
  }

  // Return empty state if no reviews are found
  if (reviews.length === 0) {
    return (
      <div className="text-center text-xl text-gray-500">No testimonials available.</div>
    );
  }

  return <ReviewTemplate reviews={reviews} />;
}

export default RetrievedTestimonials;
