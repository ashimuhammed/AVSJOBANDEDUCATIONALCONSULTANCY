// Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

const API_BASE_URL = 'http://localhost:8000';

const Profile = () => {
  const [userData, setUserData] = useState({
    // User model fields
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    
    // UserProfile fields (from users app)
    user_type: 'job_seeker',
    phone_number: '',
    bio: '',
    profile_picture: '',
    
    // Profile fields (from consultancy app)
    address: '',
    date_of_birth: '',
    education_level: '',
    work_experience: '',
    skills: '',
    resume: ''
  });

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [stats, setStats] = useState({});

  const getCSRFToken = () => {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith('csrftoken='))
      ?.split('=')[1];
    return cookieValue;
  };

  // Fetch user profile and stats
  useEffect(() => {
    fetchUserProfile();
    fetchUserStats();
  }, []);

  const fetchUserProfile = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/api/users/profile/`, {
        headers: {
          'X-CSRFToken': getCSRFToken(),
        },
      });
      
      // Merge user data and profile data
      const userProfile = response.data.profile || {};
      setUserData(prev => ({
        ...prev,
        ...response.data,
        ...userProfile
      }));

      // Also fetch consultancy profile if exists
      await fetchConsultancyProfile();
    } catch (error) {
      console.error('Error fetching user profile:', error);
      setMessage('Error loading profile');
    } finally {
      setLoading(false);
    }
  };

  const fetchConsultancyProfile = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/consultancy/profiles/`, {
        headers: {
          'X-CSRFToken': getCSRFToken(),
        },
      });
      
      if (response.data && response.data.length > 0) {
        const consultancyProfile = response.data[0];
        setUserData(prev => ({
          ...prev,
          ...consultancyProfile
        }));
      }
    } catch (error) {
      console.error('Error fetching consultancy profile:', error);
      // This is okay if user doesn't have consultancy profile yet
    }
  };

  const fetchUserStats = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/users/stats/`, {
        headers: {
          'X-CSRFToken': getCSRFToken(),
        },
      });
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching user stats:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    
    try {
      // Update user profile (users app)
      const userUpdateData = {
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        profile: {
          user_type: userData.user_type,
          phone_number: userData.phone_number,
          bio: userData.bio
        }
      };

      await axios.put(`${API_BASE_URL}/api/users/profile/`, userUpdateData, {
        headers: {
          'X-CSRFToken': getCSRFToken(),
          'Content-Type': 'application/json',
        },
      });

      // Update consultancy profile
      const consultancyUpdateData = {
        phone_number: userData.phone_number, // Use same phone number or separate?
        address: userData.address,
        date_of_birth: userData.date_of_birth,
        education_level: userData.education_level,
        work_experience: userData.work_experience,
        skills: userData.skills
      };

      const consultancyProfiles = await axios.get(`${API_BASE_URL}/api/consultancy/profiles/`, {
        headers: {
          'X-CSRFToken': getCSRFToken(),
        },
      });

      if (consultancyProfiles.data && consultancyProfiles.data.length > 0) {
        // Update existing consultancy profile
        await axios.put(`${API_BASE_URL}/api/consultancy/profiles/${consultancyProfiles.data[0].id}/`, consultancyUpdateData, {
          headers: {
            'X-CSRFToken': getCSRFToken(),
            'Content-Type': 'application/json',
          },
        });
      } else {
        // Create new consultancy profile
        await axios.post(`${API_BASE_URL}/api/consultancy/profiles/`, consultancyUpdateData, {
          headers: {
            'X-CSRFToken': getCSRFToken(),
            'Content-Type': 'application/json',
          },
        });
      }

      setMessage('Profile updated successfully!');
      setIsEditing(false);
      fetchUserStats(); // Refresh stats
    } catch (error) {
      console.error('Error updating profile:', error);
      if (error.response?.data) {
        setMessage(`Error: ${JSON.stringify(error.response.data)}`);
      } else {
        setMessage('Error updating profile');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e, fieldName) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append(fieldName, file);

    try {
      setLoading(true);
      setMessage('');

      let endpoint, method;
      
      if (fieldName === 'profile_picture') {
        endpoint = `${API_BASE_URL}/api/users/profile/`;
        method = 'patch';
      } else if (fieldName === 'resume') {
        const consultancyProfiles = await axios.get(`${API_BASE_URL}/api/consultancy/profiles/`, {
          headers: {
            'X-CSRFToken': getCSRFToken(),
          },
        });
        
        if (consultancyProfiles.data && consultancyProfiles.data.length > 0) {
          endpoint = `${API_BASE_URL}/api/consultancy/profiles/${consultancyProfiles.data[0].id}/`;
          method = 'patch';
        } else {
          // Create new profile with resume
          endpoint = `${API_BASE_URL}/api/consultancy/profiles/`;
          method = 'post';
        }
      }

      const response = await axios[method](endpoint, formData, {
        headers: {
          'X-CSRFToken': getCSRFToken(),
          'Content-Type': 'multipart/form-data',
        },
      });

      setUserData(prev => ({ 
        ...prev, 
        [fieldName]: response.data[fieldName] 
      }));
      setMessage(`${fieldName.replace('_', ' ')} uploaded successfully!`);
    } catch (error) {
      console.error(`Error uploading ${fieldName}:`, error);
      setMessage(`Error uploading ${fieldName.replace('_', ' ')}`);
    } finally {
      setLoading(false);
      e.target.value = '';
    }
  };

  const getFileUrl = (filePath) => {
    if (!filePath) return null;
    if (filePath.startsWith('http')) return filePath;
    return `${API_BASE_URL}${filePath}`;
  };

  if (loading && !userData.username) {
    return <div className="loading">Loading profile...</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div>
          <h2>User Profile</h2>
          {stats.profile_complete !== undefined && (
            <div className="profile-stats">
              <span className={`status ${stats.profile_complete ? 'complete' : 'incomplete'}`}>
                Profile {stats.profile_complete ? 'Complete' : 'Incomplete'}
              </span>
              {stats.user_type && (
                <span className="user-type">({stats.user_type})</span>
              )}
            </div>
          )}
        </div>
        {!isEditing && (
          <button 
            className="edit-btn"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        )}
      </div>

      {message && (
        <div className={`message ${message.includes('Error') ? 'error' : 'success'}`}>
          {message}
        </div>
      )}

      <div className="profile-content">
        {/* Profile Picture Section */}
        <div className="avatar-section">
          <div className="avatar-container">
            <img 
              src={getFileUrl(userData.profile_picture) || '/default-avatar.png'} 
              alt="Profile" 
              className="avatar"
              onError={(e) => {
                e.target.src = '/default-avatar.png';
              }}
            />
            {isEditing && (
              <div className="avatar-upload">
                <input
                  type="file"
                  id="profile-picture-upload"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, 'profile_picture')}
                  style={{ display: 'none' }}
                />
                <label htmlFor="profile-picture-upload" className="upload-btn">
                  {loading ? 'Uploading...' : 'Change Photo'}
                </label>
              </div>
            )}
          </div>
        </div>

        {/* Profile Form */}
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-section">
            <h3>Basic Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first_name">First Name *</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={userData.first_name || ''}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="last_name">Last Name *</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={userData.last_name || ''}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userData.email || ''}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  required
                />
              </div>

              {/* <div className="form-group">
                <label htmlFor="user_type">User Type</label>
                <select
                  id="user_type"
                  name="user_type"
                  value={userData.user_type || 'job_seeker'}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                >
                  <option value="job_seeker">Job Seeker</option>
                  <option value="student">Student</option>
                  <option value="employer">Employer</option>
                  <option value="institution">Educational Institution</option>
                </select>
              </div> */}
            </div>
          </div>

          <div className="form-section">
            <h3>Contact Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone_number">Phone Number</label>
                <input
                  type="tel"
                  id="phone_number"
                  name="phone_number"
                  value={userData.phone_number || ''}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                value={userData.address || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
                rows="3"
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Professional Information</h3>
            <div className="form-group">
              <label htmlFor="education_level">Education Level</label>
              <input
                type="text"
                id="education_level"
                name="education_level"
                value={userData.education_level || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
                placeholder="e.g., Bachelor's Degree, Master's, PhD"
              />
            </div>

            <div className="form-group">
              <label htmlFor="work_experience">Work Experience</label>
              <textarea
                id="work_experience"
                name="work_experience"
                value={userData.work_experience || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
                rows="4"
                placeholder="Describe your work experience..."
              />
            </div>

            <div className="form-group">
              <label htmlFor="skills">Skills</label>
              <textarea
                id="skills"
                name="skills"
                value={userData.skills || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
                rows="3"
                placeholder="List your skills (comma separated)"
              />
            </div>

            <div className="form-group">
              <label htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                name="bio"
                value={userData.bio || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
                rows="4"
                placeholder="Tell us about yourself..."
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Additional Information</h3>
            <div className="form-group">
              <label htmlFor="date_of_birth">Date of Birth</label>
              <input
                type="date"
                id="date_of_birth"
                name="date_of_birth"
                value={userData.date_of_birth || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>

            <div className="form-group">
              <label>Resume</label>
              <div className="file-upload-section">
                {userData.resume ? (
                  <div className="file-info">
                    <a 
                      href={getFileUrl(userData.resume)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="file-link"
                    >
                      View Current Resume
                    </a>
                  </div>
                ) : (
                  <div className="no-file">No resume uploaded</div>
                )}
                {isEditing && (
                  <>
                    <input
                      type="file"
                      id="resume-upload"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileUpload(e, 'resume')}
                      style={{ display: 'none' }}
                    />
                    <label htmlFor="resume-upload" className="upload-btn">
                      {userData.resume ? 'Update Resume' : 'Upload Resume'}
                    </label>
                  </>
                )}
              </div>
            </div>
          </div>

          {isEditing && (
            <div className="form-actions">
              <button 
                type="submit" 
                className="save-btn"
                disabled={loading}
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
              <button 
                type="button"
                className="cancel-btn"
                onClick={() => {
                  setIsEditing(false);
                  fetchUserProfile();
                  setMessage('');
                }}
                disabled={loading}
              >
                Cancel
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Profile;