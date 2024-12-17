import React from 'react';
import { CreateSpaceForm } from '../components/index';

function CreateSpaceFormPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {/* Form Container */}
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl bg-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg">
        <CreateSpaceForm />
      </div>
    </div>
  );
}

export default CreateSpaceFormPage;
