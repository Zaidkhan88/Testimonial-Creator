import React from 'react';
import { HaveALink, CreateSapce, Container, AllTestimonials } from '../components/index';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {/* Outer Container */}
      <Container>
        {/* Create Space Section */}
        <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 lg:mb-10 w-full max-w-md sm:max-w-lg lg:max-w-2xl">
          <CreateSapce />
        </div>

        {/* Have A Link Section */}
        <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 lg:mb-10 w-full max-w-md sm:max-w-lg lg:max-w-2xl">
          <HaveALink />
        </div>

        {/* All Testimonials Section */}
        <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-8 w-full max-w-md sm:max-w-lg lg:max-w-2xl">
          <AllTestimonials />
        </div>
      </Container>
    </div>
  );
}

export default Home;
