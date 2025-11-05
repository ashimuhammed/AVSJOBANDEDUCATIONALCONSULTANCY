// frontend/src/components/jobs/JobCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getJobTypeColor = (jobType) => {
    const colors = {
      full_time: 'bg-green-100 text-green-800',
      part_time: 'bg-blue-100 text-blue-800',
      contract: 'bg-purple-100 text-purple-800',
      internship: 'bg-yellow-100 text-yellow-800',
      remote: 'bg-gray-100 text-gray-800'
    };
    return colors[jobType] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            <Link to={`/jobs/${job.id}`} className="hover:text-blue-600">
              {job.title}
            </Link>
          </h3>
          <p className="text-lg text-gray-600 mb-1">{job.company}</p>
          <p className="text-gray-500 mb-2">{job.location}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getJobTypeColor(job.job_type)}`}>
          {job.job_type.replace('_', ' ').toUpperCase()}
        </span>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-2">
        {job.description.length > 150 ? job.description.substring(0, 150) + '...' : job.description}
      </p>

      <div className="flex justify-between items-center">
        <div>
          {job.salary && (
            <span className="text-green-600 font-semibold">{job.salary}</span>
          )}
        </div>
        <div className="flex space-x-3">
          <span className="text-sm text-gray-500">
            Posted {formatDate(job.created_at)}
          </span>
          <Link 
            to={`/jobs/${job.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;