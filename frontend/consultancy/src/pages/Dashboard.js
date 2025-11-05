// frontend/src/pages/Dashboard.js
import React from 'react';
import { useAuth } from '../utils/AuthContext';

const Dashboard = () => {
  const { currentUser } = useAuth();

  // Same nuclear-safe function
  const getDisplayName = () => {
    if (!currentUser) return 'User';
    
    try {
      if (currentUser.username) {
        if (typeof currentUser.username === 'object' && currentUser.username.username) {
          return String(currentUser.username.username);
        }
        if (typeof currentUser.username === 'string') {
          return currentUser.username;
        }
      }
      
      if (currentUser.first_name || currentUser.last_name) {
        const name = `${currentUser.first_name || ''} ${currentUser.last_name || ''}`.trim();
        if (name) return name;
      }
      
      if (currentUser.email) {
        return String(currentUser.email);
      }
      
      return String(currentUser);
    } catch (error) {
      return 'User';
    }
  };

  const displayName = getDisplayName();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
        {/* ABSOLUTELY SAFE: Force string conversion */}
        <p className="text-gray-600 mb-8 pt-28">
          Welcome back, {String(displayName)}!
        </p>

        {/* Rest of your dashboard content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Job Applications</h3>
            <p className="text-3xl font-bold text-blue-600">0</p>
            <p className="text-gray-500 text-sm">Pending applications</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Program Applications</h3>
            <p className="text-3xl font-bold text-green-600">0</p>
            <p className="text-gray-500 text-sm">Educational programs</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Profile Completeness</h3>
            <p className="text-3xl font-bold text-purple-600">25%</p>
            <p className="text-gray-500 text-sm">Complete your profile</p>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-blue-100 text-blue-700 p-4 rounded-lg text-center hover:bg-blue-200 transition duration-300">
              <div className="text-2xl mb-2">📝</div>
              <div className="font-medium">Update Profile</div>
            </button>
            
            <button className="bg-green-100 text-green-700 p-4 rounded-lg text-center hover:bg-green-200 transition duration-300">
              <div className="text-2xl mb-2">💼</div>
              <div className="font-medium">Browse Jobs</div>
            </button>
            
            <button className="bg-purple-100 text-purple-700 p-4 rounded-lg text-center hover:bg-purple-200 transition duration-300">
              <div className="text-2xl mb-2">🎓</div>
              <div className="font-medium">Find Programs</div>
            </button>
            
            <button className="bg-orange-100 text-orange-700 p-4 rounded-lg text-center hover:bg-orange-200 transition duration-300">
              <div className="text-2xl mb-2">📄</div>
              <div className="font-medium">My Applications</div>
            </button>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="text-center py-8 text-gray-500">
            <p>No recent activity yet.</p>
            <p className="text-sm mt-2">Start by browsing jobs or educational programs!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;