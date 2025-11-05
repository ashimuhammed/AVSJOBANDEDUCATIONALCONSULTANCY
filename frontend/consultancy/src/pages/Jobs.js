// frontend/src/pages/Jobs.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import JobCard from '../components/jobs/JobCard';
import JobFilters from '../components/jobs/JobFilters';
import { jobService } from '../services/api';
import { useAuth } from '../utils/AuthContext';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    job_type: '',
    location: ''
  });
  
  const { currentUser, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!authLoading && !currentUser) {
      navigate('/login', { 
        state: { 
          message: 'Please login to view job opportunities',
          redirectTo: '/jobs'
        }
      });
      return;
    }

    // Load jobs only if user is authenticated
    if (currentUser) {
      loadJobs();
    }
  }, [filters, currentUser, authLoading, navigate]);

  const loadJobs = async () => {
    try {
      setLoading(true);
      const response = await jobService.getJobs(filters);
      setJobs(response.data.results || response.data);
    } catch (error) {
      console.error('Error loading jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  // Show loading while checking authentication
  if (authLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-2 text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // Show message if not authenticated (though redirect should happen)
  if (!currentUser) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Access Required</h2>
          <p className="text-gray-600 mb-4">Please log in to view job opportunities.</p>
          <button 
            onClick={() => navigate('/login')}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="mb-8">
        <div className="flex justify-between items-center"> 
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2 pt-32 ">Find Your Dream Job</h1>
            <p className="text-gray-600">Welcome back! Discover opportunities that match your skills and aspirations</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Welcome, {currentUser.username || currentUser.email}</p>
            <p className="text-xs text-gray-400">{jobs.length} jobs available</p>
          </div>
        </div>
      </div>

      <JobFilters filters={filters} setFilters={setFilters} />
      
      {loading ? (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-2 text-gray-600">Loading jobs...</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {jobs.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600 text-lg">No jobs found matching your criteria.</p>
              <button 
                onClick={() => setFilters({ search: '', job_type: '', location: '' })}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            jobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Jobs;