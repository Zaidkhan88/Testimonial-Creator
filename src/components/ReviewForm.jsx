import React, { useState, useEffect } from 'react';
import appwriteService from '../appwrite/config';
import { useForm } from 'react-hook-form';
import { Input, Button } from './index';

function ReviewForm({ reviewLink }) {
  const [retrievedData, setData] = useState('');
  const { register, handleSubmit } = useForm();

  const submit = async (data) => {
    try {
      const { Name, email, answers, rating } = data;
      const uniqueLink = reviewLink;
      const ansForm = await appwriteService.submitAns({
        uniqueLink,
        rating: Number(rating),
        Name,
        email,
        answers,
      });
    } catch (err) {
      console.error('ReviewForm Err', err);
    }
  };

  useEffect(() => {
    async function fetchData() {
      if (reviewLink) {
        const data = await appwriteService.getDocumentQuestions(reviewLink);
        setData(data);
      } else {
        console.log('Link is not provided');
      }
    }
    fetchData();
  }, [reviewLink]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Review Form
        </h1>
        <form onSubmit={handleSubmit(submit)} className="space-y-4">
          <p className="text-lg text-gray-600">Write a Text Testimonial for</p>
          <h4 className="text-2xl font-semibold text-gray-800">{retrievedData.spaceName}</h4>

          <div className="mb-4">
            <h4 className="text-lg text-gray-600">Rate this on a scale of</h4>
            <select
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              {...register('rating')}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="mb-4">
            <h5 className="text-lg text-gray-600">Questions</h5>
            <ul className="list-disc pl-5 space-y-2">
              {retrievedData?.quiz?.map((question, index) => (
                <li key={index} className="text-gray-700">{question}</li>
              ))}
            </ul>
          </div>

          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            rows={4}
            placeholder="Your feedback"
            {...register('answers')}
          />

          <Input
            label="Your Name"
            type="text"
            className="mt-2 w-full"
            {...register('Name')}
          />
          <Input
            label="Email Id"
            type="email"
            className="mt-2 w-full"
            {...register('email')}
          />

          <Button type="submit" className="w-full bg-red-500 text-white p-3 rounded-md mt-4">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ReviewForm;
