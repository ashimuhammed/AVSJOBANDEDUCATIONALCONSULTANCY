// ProfileStats.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileStats = () => {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);

  const getCSRFToken = () => {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith('csrftoken='))
      ?.split('=')[1];
    return cookieValue;
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/users/stats/', {
        headers: {
          'X-CSRFToken': getCSRFToken(),
        },
      });
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading stats...</div>;

  return (
    <div className="profile-stats-card">
      <h3>Profile Overview</h3>
      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-label">Username</span>
          <span className="stat-value">{stats.username}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Profile Status</span>
          <span className={`stat-value status ${stats.profile_complete ? 'complete' : 'incomplete'}`}>
            {stats.profile_complete ? 'Complete' : 'Incomplete'}
          </span>
        </div>
        {/* {stats.user_type && (
          <div className="stat-item">
            <span className="stat-label">User Type</span>
            <span className="stat-value">{stats.user_type}</span>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ProfileStats;