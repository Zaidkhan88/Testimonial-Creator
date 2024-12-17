import React, { useState } from 'react';
import { Input, Button } from './index';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function HaveALink() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    navigate(`/reviewPage/${data.reviewLink}`);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5">
      {/* Form Container */}
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        {/* Title */}
        <h1 className="text-lg font-semibold text-gray-800 mb-4">
          Have a Link? Enter to give a review
        </h1>

        {/* Input Field */}
        <Input
          type="text"
          placeholder="Enter your review link"
          {...register('reviewLink')}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Click for review
        </Button>
      </form>
    </div>
  );
}

export default HaveALink;
