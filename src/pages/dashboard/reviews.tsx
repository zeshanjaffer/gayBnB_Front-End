'use client';

import React from 'react';
import Image from 'next/image';

const ReviewsPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl text-center">
        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button className="bg-purple-500 text-white py-2 px-4 rounded-lg shadow-md">Review About You</button>
          <button className="bg-gray-300 text-gray-600 py-2 px-4 rounded-lg">Review By You</button>
        </div>

        {/* Illustration */}
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/reviews.png"
            alt="Review Illustration"
            width={157}
            height={145}
            className="mb-4"
          />
          <h2 className="text-lg font-semibold">Simple & Clear</h2>
          <p className="text-gray-500">Review Your Transactions</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;