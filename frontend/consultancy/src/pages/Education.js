// frontend/src/pages/Education.js
import React from 'react';

const Education = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 pt-32">Educational Programs</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover educational opportunities from top institutions around the world
        </p>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong>Note:</strong> Education section is under development. Coming soon!
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder program cards */}
        {[1, 2, 3, 4, 5, 6].map(item => (
          <div key={item} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-1/3 mb-4"></div>
              <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-2/3 mb-4"></div>
              <div className="h-8 bg-gray-300 rounded w-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;