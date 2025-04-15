import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutSuccess = () => {
  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center px-4'>
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-md max-w-lg w-full">
        <div className="flex flex-col items-center justify-center">
          <svg
            className="text-green-500 w-20 h-20 mb-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful ✅</h2>
          <p className="text-gray-600 text-center mb-1">
            Thank you for your secure payment.
          </p>
          <p className="text-gray-600 text-center mb-6">
            We've received your booking — have a great day!
          </p>

          <Link
            to="/home"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition duration-200 font-semibold"
          >
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
